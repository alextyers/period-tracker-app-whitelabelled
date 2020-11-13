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
  PrivacyPolicy,
  TermsAndConditions,
  About,
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
  privacyPolicy,
  termsAndConditions,
  about,
  aboutBanner,
}: {
  articles: Articles
  avatarMessages: AvatarMessages
  categories: Categories
  subCategories: SubCategories
  surveys: Surveys
  quizzes: Quizzes
  didYouKnows: DidYouKnows
  helpCenters: HelpCenters
  privacyPolicy: PrivacyPolicy
  termsAndConditions: TermsAndConditions
  about: About
  aboutBanner: string
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
    privacyPolicy,
    termsAndConditions,
    about,
    aboutBanner,
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
  privacyPolicy,
  termsAndConditions,
  about,
  aboutBanner,
}: {
  articles: Articles
  avatarMessages: AvatarMessages
  categories: Categories
  subCategories: SubCategories
  surveys: Surveys
  quizzes: Quizzes
  didYouKnows: DidYouKnows
  helpCenters: HelpCenters
  privacyPolicy: PrivacyPolicy
  termsAndConditions: TermsAndConditions
  about: About
  aboutBanner: string
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
    privacyPolicy,
    termsAndConditions,
    about,
    aboutBanner,
  })
}

export function fetchContentFailure() {
  return createAction('FETCH_CONTENT_FAILURE')
}
