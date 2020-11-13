const importedJSON = require('../../stalejson/didyouknowMN.json')
const { createConnection } = require('typeorm')
const { DidYouKnow } = require('../../../entity/DidYouKnow')
const { ormconfig } = require('../../../../ormconfig')
const uuidv4 = require('uuid/v4')
const utils = require('util')

const dataShape = {
  didYouKnows: {
    byId: {},
    allIds: [],
  },
}

;(async function() {
  createConnection(ormconfig)
    .then(async connection => {
      importedJSON.forEach(item => {
        for (let i = 0; i < 3; i++) {
          let id = uuidv4()
          const field = [item.field2, item.field3, item.field4]
          connection.manager.save(
            connection.manager.create(DidYouKnow, {
              id: id,
              title: item.field1,
              content: field[i],
              live: true,
              lang: 'mn',
            }),
          )
          dataShape.didYouKnows = {
            byId: {
              ...dataShape.didYouKnows.byId,
              [id]: {
                id: id,
                title: item.field1,
                content: field[i],
              },
            },
            allIds: dataShape.didYouKnows.allIds.concat(id),
          }
        }
      })
    })
    .then(() => {
      console.log(utils.inspect(dataShape, { depth: 999 })) // util.inspect exports a javascript object from json
    })
})()
