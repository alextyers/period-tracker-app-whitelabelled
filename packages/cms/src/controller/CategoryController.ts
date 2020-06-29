import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Category } from '../entity/Category'
import { Subcategory } from '../entity/Subcategory'
import { Article } from '../entity/Article'
import uuid = require('uuid')

export class CategoryController {
  private categoryRepository = getRepository(Category)
  private subcategoryRepository = getRepository(Subcategory)
  private articleRepository = getRepository(Article)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.categoryRepository.find()
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.categoryRepository.findOne(request.params.id)
  }

  async save(request: Request, response: Response, next: NextFunction) {
    await this.categoryRepository.save({
      id: uuid(),
      title: request.body.title,
      primary_emoji: request.body.primary_emoji,
      primary_emoji_name: request.body.primary_emoji_name,
      lang: request.user.lang,
    })
    return request.body
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const categoryToUpdate = await this.categoryRepository.findOne(request.params.id)
    categoryToUpdate.title = request.body.title
    categoryToUpdate.primary_emoji = request.body.primary_emoji
    categoryToUpdate.primary_emoji_name = request.body.primary_emoji_name
    categoryToUpdate.lang = request.user.lang
    await this.categoryRepository.save(categoryToUpdate)
    return categoryToUpdate
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const categoryToRemove = await this.categoryRepository.findOne(request.params.id)
    const subcategoriesToRemove = await this.subcategoryRepository.find({
      where: {
        parent_category: categoryToRemove.id,
      },
    })
    const articlesToRemove = await this.articleRepository.find({
      where: {
        category: categoryToRemove.id,
      },
    })
    await this.categoryRepository.remove(categoryToRemove)
    await this.subcategoryRepository.remove(subcategoriesToRemove)
    await this.articleRepository.remove(articlesToRemove)
    return categoryToRemove
  }
}
