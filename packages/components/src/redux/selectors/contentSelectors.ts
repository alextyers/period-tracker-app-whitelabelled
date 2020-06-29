import { ReduxState } from '../store'
import moment from 'moment'
import _ from 'lodash'

const s = (state: ReduxState) => state.content

export const allArticlesSelector = (state: ReduxState) =>
  s(state).articles.allIds.map(id => s(state).articles.byId[id])

export const articleByIDSelector = (state: ReduxState, id) => s(state).articles.byId[id]

export const articlesObjectByIDSelector = (state: ReduxState) => s(state).articles.byId

export const allHelpCentersForCurrentLocale = (state: ReduxState) =>
  s(state).helpCenters.filter(item => item.lang === state.app.locale)

export const allCategoriesSelector = (state: ReduxState) =>
  s(state).categories.allIds.map(id => s(state).categories.byId[id])

export const allCategoryEmojis = (state: ReduxState) => {
  const categories = allCategoriesSelector(state)

  return categories.map(item => {
    return { tag: item.tags.primary.name, emoji: item.tags.primary.emoji }
  })
}

export const allSubCategoriesSelector = (state: ReduxState) =>
  s(state).subCategories.allIds.map(id => s(state).subCategories.byId[id])

export const allSubCategoriesObjectSelector = (state: ReduxState) => s(state).subCategories.byId

export const subCategoryByIDSelector = (state: ReduxState, id) => s(state).subCategories.byId[id]

export const allSurveysSelectors = (state: ReduxState) =>
  s(state).surveys.allIds.map(id => s(state).surveys.byId[id])

export const allAvatarText = (state: ReduxState) => s(state).avatarMessages

export const allQuizzesSelectors = (state: ReduxState) => {
  const isUserYoungerThan15 = true
  // moment()
  //   .utc()
  //   .diff(state.auth.user.dateOfBirth) < 15
  const filteredArray = s(state).quizzes.allIds.reduce((acc, id) => {
    if (
      (!s(state).quizzes.byId[id].isAgeRestricted && isUserYoungerThan15) ||
      !isUserYoungerThan15
    ) {
      acc.push(s(state).quizzes.byId[id])
    }
    return acc
  }, [])

  // In the extreme event of all content being age restricted return the first quiz/ did you know instead of crashing the app

  if (_.isEmpty(filteredArray)) {
    return [s(state).quizzes.byId[s(state).quizzes.allIds[0]]]
  }

  return filteredArray
}

export const allDidYouKnowsSelectors = (state: ReduxState) => {
  const isUserYoungerThan15 = true
  // moment()
  //   .utc()
  //   .diff(state.auth.user.dateOfBirth) < 15
  const filteredArray = s(state).didYouKnows.allIds.reduce((acc, id) => {
    if (
      (!s(state).didYouKnows.byId[id].isAgeRestricted && isUserYoungerThan15) ||
      !isUserYoungerThan15
    ) {
      acc.push(s(state).didYouKnows.byId[id])
    }
    return acc
  }, [])

  // In the extreme event of all content being age restricted return the first quiz/ did you know instead of crashing the app
  if (_.isEmpty(filteredArray)) {
    return [s(state).didYouKnows.byId[s(state).didYouKnows.allIds[0]]]
  }

  return filteredArray
}
