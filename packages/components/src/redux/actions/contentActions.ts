import { createAction } from '../helpers'
import {
  Articles,
  Categories,
  SubCategories,
  Surveys,
  Quizzes,
  DidYouKnows,
  HelpCenters,
  AvatarMessages,
} from '../../types'

export function initStaleContent({
  articles,
  avatarMessages,
  categories,
  subCategories,
  surveys,
  quizzes,
  didYouKnows,
  helpCenters,
}: {
  articles: Articles
  avatarMessages: AvatarMessages
  categories: Categories
  subCategories: SubCategories
  surveys: Surveys
  quizzes: Quizzes
  didYouKnows: DidYouKnows
  helpCenters: HelpCenters
}) {
  return createAction('INIT_STALE_CONTENT', {
    articles,
    avatarMessages,
    categories,
    subCategories,
    surveys,
    quizzes,
    didYouKnows,
    helpCenters,
  })
}

export function fetchContentRequest(locale: string) {
  return createAction('FETCH_CONTENT_REQUEST', { locale })
}

export function fetchContentSuccess({
  articles,
  avatarMessages,
  categories,
  subCategories,
  surveys,
  quizzes,
  didYouKnows,
  helpCenters,
}: {
  articles: Articles
  avatarMessages: AvatarMessages
  categories: Categories
  subCategories: SubCategories
  surveys: Surveys
  quizzes: Quizzes
  didYouKnows: DidYouKnows
  helpCenters: HelpCenters
}) {
  return createAction('FETCH_CONTENT_SUCCESS', {
    articles,
    avatarMessages,
    categories,
    subCategories,
    surveys,
    quizzes,
    didYouKnows,
    helpCenters,
  })
}

export function fetchContentFailure() {
  return createAction('FETCH_CONTENT_FAILURE')
}
