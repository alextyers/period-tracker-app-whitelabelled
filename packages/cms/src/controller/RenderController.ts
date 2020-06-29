import moment from 'moment'
import { NextFunction, Request, Response } from 'express'
import { getRepository, getManager } from 'typeorm'
import { Article } from '../entity/Article'
import { Quiz } from '../entity/Quiz'
import { User } from '../entity/User'
import { Survey } from '../entity/Survey'
import { Category } from '../entity/Category'
import { DidYouKnow } from '../entity/DidYouKnow'
import { Suggestion } from '../entity/Suggestion'
import { Notification } from '../entity/Notification'
import { Subcategory } from '../entity/Subcategory'
import { accessControlList } from '../access/access-control'
import { analyticsQueries } from '../services/analytics'
import { HelpCenter } from '../entity/HelpCenter'
import { AvatarMessages } from '../entity/AvatarMessages'
import { PermanentNotification } from '../entity/PermanentNotification'
import { countries } from '../services/countries'
import { provinces } from '../services/provinces'

export class RenderController {
  private articleRepository = getRepository(Article)
  private categoryRepository = getRepository(Category)
  private subcategoryRepository = getRepository(Subcategory)
  private quizRepository = getRepository(Quiz)
  private userRepository = getRepository(User)
  private surveyRepository = getRepository(Survey)
  private didYouKnowRepository = getRepository(DidYouKnow)
  private helpCenterRepository = getRepository(HelpCenter)
  private suggestionRepository = getRepository(Suggestion)
  private notificationRepository = getRepository(Notification)
  private permanentNotificationRepository = getRepository(PermanentNotification)
  private avatarMessagesRepository = getRepository(AvatarMessages)

  async renderLogin(request: Request, response: Response, next: NextFunction) {
    response.render('Login')
  }

  async renderAnalytics(request: Request, response: Response, next: NextFunction) {
    const entityManager = await getManager()
    const usersGenders = await entityManager.query(analyticsQueries.usersGender)
    const usersLocations = await entityManager.query(analyticsQueries.usersLocations)
    const usersAgeGroups = await entityManager.query(analyticsQueries.usersAgeGroups)
    const preProcessedProvinceList = await entityManager.query(analyticsQueries.usersProvince)
    const preProcessedCountryList = await entityManager.query(analyticsQueries.usersCountries)
    const usersShares = await entityManager.query(analyticsQueries.usersShares)
    const directDownloads = await entityManager.query(analyticsQueries.directDownloads)

    const usersCountries = preProcessedCountryList.reduce((acc, item) => {
      const country = countries[item.country] || {
        en: `None`,
        mn: 'None',
        id: 'None',
      }
      const countryName = country[request.user.lang]
      return { ...acc, [countryName]: item.value }
    }, {})

    const usersProvinces = preProcessedProvinceList.reduce((acc, item) => {
      const province = provinces.find(prov => prov.uid.toString() === item.province) || {
        code: '00',
        uid: 0,
        en: 'Other',
        id: `Lain`,
        mn: 'Бусад',
      }
      const provinceName = province[request.user.lang]
      const country = countries[item.country] || {
        en: `None`,
        mn: 'None',
        id: 'None',
      }
      const countryName = country[request.user.lang]
      return {
        ...acc,
        [countryName]: { ...acc[countryName], [provinceName]: item.value },
      }
    }, {})

    response.render('AnalyticsDash', {
      usersLocations,
      usersGenders,
      usersAgeGroups,
      usersCountries,
      usersProvinces,
      usersShares,
      directDownloads,
    })
  }

  async renderQuiz(request: Request, response: Response, next: NextFunction) {
    const entityManager = await getManager()
    const quizzes = await this.quizRepository.find({
      where: { lang: request.user.lang },
      order: {
        topic: 'ASC',
      },
    })
    const answeredQuizzes = await entityManager.query(analyticsQueries.answeredQuizzesByID)
    response.render('Quiz', { quizzes, answeredQuizzes })
  }

  async renderHelpCenter(request: Request, response: Response, next: NextFunction) {
    const helpCenters = await this.helpCenterRepository.find({
      where: { lang: request.user.lang },
    })
    response.render('HelpCenter', { helpCenters })
  }

  async renderSurvey(request: Request, response: Response, next: NextFunction) {
    const entityManager = await getManager()
    const answeredSurveys = await entityManager.query(analyticsQueries.answeredSurveysByID)
    const surveys = await this.surveyRepository.find({
      where: { lang: request.user.lang },
      order: {
        question: 'ASC',
      },
    })
    response.render('Survey', { surveys, answeredSurveys })
  }

  async renderDidYouKnow(request: Request, response: Response, next: NextFunction) {
    const didYouKnows = await this.didYouKnowRepository.find({
      where: { lang: request.user.lang },
      order: {
        title: 'ASC',
      },
    })
    response.render('DidYouKnow', { didYouKnows })
  }

  async renderEncyclopedia(request: Request, response: Response, next: NextFunction) {
    const articles = await this.articleRepository.query(
      `SELECT ar.id, ca.title as category_title, ca.id as category_id, sc.title as subcategory_title, sc.id as subcategory_id, ar.article_heading, ar.article_text, ar.live as live, ca.primary_emoji, ar.lang, ar.date_created 
      FROM article ar 
      INNER JOIN category ca 
      ON ar.category = CAST(ca.id as CHAR(50))
      INNER JOIN subcategory sc  
      ON ar.subcategory = CAST(sc.id as CHAR(50))
      WHERE ar.lang = $1`,
      [request.user.lang],
    )
    const categories = await this.categoryRepository.find({ where: { lang: request.user.lang } })
    const subcategories = await this.subcategoryRepository.find({
      where: { lang: request.user.lang },
    })
    response.render('Encyclopedia', { articles, categories, subcategories })
  }

  async renderCatSubcatManagement(request: Request, response: Response, next: NextFunction) {
    const categories = await this.categoryRepository.find({ where: { lang: request.user.lang } })
    const subcategories = await this.subcategoryRepository.query(
      `SELECT sc.id, sc.title, ca.title as parent_category, ca.id as parent_category_id
      FROM subcategory sc
      INNER JOIN category ca
      ON sc.parent_category = CAST(ca.id as CHAR(50))
      WHERE sc.lang = $1`,
      [request.user.lang],
    )
    response.render('CatSubcat', { categories, subcategories })
  }

  async renderUserManagement(request: Request, response: Response, next: NextFunction) {
    const viewableItems = []
    if (request.user.type === 'contentManager') {
      response.status(400).send({ error: 'No permission rights to do that' })
    }
    if (accessControlList.can(request.user.type, 'createSuperAdmin')) {
      viewableItems.push({ type: 'superAdmin' })
      viewableItems.push({ type: 'admin' })
    }
    if (accessControlList.can(request.user.type, 'createContentManager')) {
      if (!accessControlList.can(request.user.type, 'createSuperAdmin')) {
        viewableItems.push({ type: 'contentManager', lang: request.user.lang })
      } else {
        viewableItems.push({ type: 'contentManager' })
      }
    }

    const users = await this.userRepository.find({
      select: ['id', 'username', 'type', 'lang', 'date_created'],
      where: viewableItems,
    })
    response.render('UserManagement', { users, moment })
  }

  async renderSuggestion(request: Request, response: Response, next: NextFunction) {
    const reasons = {
      request_access_to_source_code: 'Request access to source code',
      report_an_issue: 'Report an issue',
      suggestion: 'Suggestion',
      report_bug: 'Report a bug',
      request_for_more_information: 'Request for more information',
      need_help: 'Need help',
      problem_app: 'Problem with the app',
      request_topic: 'Request a Topic',
      Other: 'Other',
    }
    const where: any = { lang: request.user.lang }
    if (request.query.reason) {
      where.reason = request.query.reason
    }
    const orderKey = request.query.order_key || null
    const orderSequence = request.query.order_sequence || null
    const suggestions = await this.suggestionRepository.find({
      where,
      order: {
        [orderKey || 'id']: orderSequence || 'ASC',
      },
    })
    response.render('Suggestion', {
      suggestions,
      moment,
      reasons,
      reasonFilter: request.query.reason,
      orderKey,
      orderSequence,
    })
  }

  async renderNotification(request: Request, response: Response, next: NextFunction) {
    const notifications = await this.notificationRepository.find({
      where: {
        lang: request.user.lang,
      },
      order: {
        id: 'ASC',
      },
    })
    const permanentNotifications = await this.permanentNotificationRepository.find({
      where: {
        lang: request.user.lang,
      },
      order: {
        id: 'ASC',
      },
    })
    response.render('Notification', { notifications, permanentNotifications, moment })
  }

  async renderAvatarMessages(request: Request, response: Response, next: NextFunction) {
    const avatarMessages = await this.avatarMessagesRepository.find({
      where: {
        lang: request.user.lang,
      },
      order: {
        id: 'ASC',
      },
    })

    response.render('AvatarMessages', { avatarMessages })
  }
}
