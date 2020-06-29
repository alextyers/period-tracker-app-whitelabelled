const importedJSON = require('../../stalejson/quizENMQ.json')
const { createConnection } = require('typeorm')
const { Quiz } = require('../../../entity/Quiz')
const { ormconfig } = require('../../../../ormconfig')
const uuidv4 = require('uuid/v4')
const utils = require('util')

const dataShape = {
  quizzes: {
    byId: {},
    allIds: [],
  },
}

;(async function() {
  createConnection(ormconfig)
    .then(async connection => {
      importedJSON.forEach(item => {
        let id = uuidv4()
        connection.manager.save(
          connection.manager.create(Quiz, {
            id: id,
            topic: item.Topic,
            question: item.Question,
            option1: item[1],
            option2: item[2],
            option3: item[3],
            right_answer: item.RightNumber,
            wrong_answer_response: item.WrongAnswer,
            right_answer_response: item.RightAnswer,
            live: false,
            lang: 'en',
          }),
        )

        dataShape.quizzes = {
          byId: {
            ...dataShape.quizzes.byId,
            [id]: {
              id: id,
              question: item.Question,
              answers: [
                {
                  text: item[1],
                  emoji: '',
                  isCorrect: item.RightNumber === '1',
                },
                {
                  text: item[2],
                  emoji: '',
                  isCorrect: item.RightNumber === '2',
                },
                {
                  text: item[3],
                  emoji: '',
                  isCorrect: item.RightNumber === '3',
                },
              ],
              response: {
                correct: item.RightAnswer,
                in_correct: item.WrongAnswer,
              },
            },
          },
          allIds: dataShape.quizzes.allIds.concat(id),
        }
      })
    })
    .then(() => {
      console.log(utils.inspect(dataShape, { depth: 999 })) // util.inspect exports a javascript object from json
    })
})()
