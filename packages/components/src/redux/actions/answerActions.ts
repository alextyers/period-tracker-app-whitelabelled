import { createAction } from '../helpers'
import { Moment } from 'moment'
import { CardName, DailyCard } from '../../types'

export function answerSurvey({
  id,
  question,
  answerID,
  answer,
  response,
  userID,
  utcDateTime,
}: {
  id: string
  question: string
  answerID: string
  answer: string
  response: string
  userID: string
  utcDateTime: Moment
}) {
  return createAction('ANSWER_SURVEY', {
    id,
    question,
    answerID,
    answer,
    response,
    userID,
    utcDateTime,
  })
}

export function answerQuiz({
  id,
  question,
  answerID,
  emoji,
  answer,
  isCorrect,
  response,
  userID,
  utcDateTime,
}: {
  id: string
  question: string
  answerID: number
  emoji: string
  answer: string
  isCorrect: boolean
  response: string
  userID: string
  utcDateTime: Moment
}) {
  return createAction('ANSWER_QUIZ', {
    id,
    question,
    answerID,
    emoji,
    answer,
    isCorrect,
    response,
    userID,
    utcDateTime,
  })
}

export function answerDailyCard<T extends CardName>({
  cardName,
  answer,
  userID,
  utcDateTime,
  mutuallyExclusive = false,
}: {
  cardName: T
  answer: DailyCard[T]
  userID: string
  utcDateTime: Moment
  mutuallyExclusive: boolean
}) {
  return createAction('ANSWER_DAILY_CARD', {
    cardName,
    answer,
    userID,
    utcDateTime,
    mutuallyExclusive,
  })
}

export function answerNotesCard({
  title,
  notes,
  userID,
  utcDateTime,
}: {
  title: string
  notes: string
  userID: string
  utcDateTime: Moment
}) {
  return createAction('ANSWER_NOTES_CARD', { title, notes, userID, utcDateTime })
}

export function shareApp() {
  return createAction('SHARE_APP')
}
