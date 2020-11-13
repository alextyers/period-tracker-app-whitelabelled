const importedJSON = require('../../stalejson/encycMN.json')
const { createConnection } = require('typeorm')
const { Article } = require('../../../entity/Article')
const { Category } = require('../../../entity/Category')
const { Subcategory } = require('../../../entity/Subcategory')
const { ormconfig } = require('../../../../ormconfig')
const uuidv4 = require('uuid/v4')
const utils = require('util')

const dataShape = {
  categories: {
    byId: {},
    allIds: [],
  },
  subCategories: {
    byId: {},
    allIds: [],
  },
  articles: {
    byId: {},
    allIds: [],
  },
}

;(async function() {
  createConnection(ormconfig)
    .then(async connection => {
      let categoryId = uuidv4()
      let subCategoryId = uuidv4()
      let previousCat = '0'
      let previousSubCat = '0'

      importedJSON.forEach(item => {
        const numDecimals = item.field1.split('.').length - 1 || 0

        if (item.field1.split('.')[0] !== previousCat) {
          categoryId = uuidv4()
        }
        previousCat = item.field1.split('.')[0]
        if (item.field1.split('.')[1] !== previousSubCat) {
          subCategoryId = uuidv4()
        }
        previousSubCat = item.field1.split('.')[1]
        const articleID = uuidv4()
        if (numDecimals === 0) {
          connection.manager.save(
            connection.manager.create(Category, {
              id: categoryId,
              title: item.field2,
              primary_emoji: item.field8,
              primary_emoji_name: item.field9,
              lang: 'mn',
            }),
          )
          // --------- Add to the stale content data shape as well
          dataShape.categories = {
            byId: {
              ...dataShape.categories.byId,
              [categoryId]: {
                id: categoryId,
                name: item.field2,
                tags: {
                  primary: {
                    name: item.field9,
                    emoji: item.field8,
                  },
                },
                subCategories: [],
              },
            },
            allIds: dataShape.categories.allIds.concat(categoryId),
          }
        }

        if (numDecimals === 1) {
          connection.manager.save(
            connection.manager.create(Subcategory, {
              id: subCategoryId,
              title: item.field2,
              parent_category: categoryId,
              lang: 'mn',
            }),
          )
          // --------- Add to the stale content data shape as well
          dataShape.subCategories = {
            byId: {
              ...dataShape.subCategories.byId,
              [subCategoryId]: {
                id: subCategoryId,
                name: item.field2,
                articles: [],
              },
            },
            allIds: dataShape.subCategories.allIds.concat(subCategoryId),
          }
          // add relevant subCategory to category list
          dataShape.categories.byId[categoryId] = {
            ...dataShape.categories.byId[categoryId],
            subCategories: dataShape.categories.byId[categoryId].subCategories.concat(
              subCategoryId,
            ),
          }
        }
        if (numDecimals === 2) {
          connection.manager.save(
            connection.manager.create(Article, {
              id: articleID,
              article_heading: item.field3,
              article_text: item.field4,
              category: categoryId,
              subcategory: subCategoryId,
              live: true,
              lang: 'mn',
            }),
          )
          // --------- Add to the stale content data shape as well
          dataShape.articles = {
            byId: {
              ...dataShape.articles.byId,
              [articleID]: {
                id: articleID,
                title: item.field3,
                content: item.field4,
                category: item.field5,
                subCategory: item.field6,
              },
            },
            allIds: dataShape.articles.allIds.concat(articleID),
          }
          // add relevant article to subcategory list
          dataShape.subCategories.byId[subCategoryId] = {
            ...dataShape.subCategories.byId[subCategoryId],
            articles: dataShape.subCategories.byId[subCategoryId].articles.concat(articleID),
          }
        }
      })
    })
    .then(() => {
      console.log(utils.inspect(dataShape, { depth: 999 })) // util.inspect exports a javascript object from json
    })
})()
