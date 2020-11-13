import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Survey } from '../entity/Survey'
import uuid = require('uuid')

export class SurveyController {
  private surveyRepository = getRepository(Survey)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.surveyRepository.find({ where: { lang: request.user.lang } })
  }
  async mobileSurveysByLanguage(request: Request, response: Response, next: NextFunction) {
    return this.surveyRepository.find({
      where: { lang: request.params.lang, live: true },
      order: { question: 'ASC' },
    })
  }
  async one(request: Request, response: Response, next: NextFunction) {
    return this.surveyRepository.findOne(request.params.id)
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const surveyToSave = request.body
    surveyToSave.lang = request.user.lang
    surveyToSave.id = uuid()
    await this.surveyRepository.save(surveyToSave)
    return surveyToSave
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const booleanFromString = request.body.live === 'true'
    const surveyToUpdate = await this.surveyRepository.findOne(request.params.id)
    surveyToUpdate.question = request.body.question
    surveyToUpdate.option1 = request.body.option1
    surveyToUpdate.option2 = request.body.option2
    surveyToUpdate.response = request.body.response
    surveyToUpdate.lang = request.user.lang
    surveyToUpdate.live = booleanFromString
    await this.surveyRepository.save(surveyToUpdate)
    return surveyToUpdate
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const surveyToRemove = await this.surveyRepository.findOne(request.params.id)
    await this.surveyRepository.remove(surveyToRemove)
    return surveyToRemove
  }
}
