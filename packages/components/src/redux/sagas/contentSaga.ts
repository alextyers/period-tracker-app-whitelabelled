import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { RehydrateAction, REHYDRATE } from 'redux-persist'
import { ExtractActionFromActionType } from '../types'
import {
  fromEncyclopedia,
  fromQuizzes,
  fromDidYouKnows,
  fromSurveys,
  fromHelpCenters,
  fromAvatarMessages,
} from '@period-tracker-app/core'
import { httpClient } from '../../services/HttpClient'
import * as staleContent from '../../assets/content'
import * as selectors from '../selectors'
import * as actions from '../actions'
import _ from 'lodash'
import firebase from 'react-native-firebase'
import { closeOutTTs } from '../../services/textToSpeech'

function* onRehydrate(action: RehydrateAction) {
  const locale = yield select(selectors.currentLocaleSelector)
  const hasPreviousContentFromStorage = action.payload && action.payload.content
  if (!hasPreviousContentFromStorage) {
    yield put(actions.initStaleContent(staleContent[locale]))
  }
  yield put(actions.fetchContentRequest(locale))
}

function* onFetchContentRequest(action: ExtractActionFromActionType<'FETCH_CONTENT_REQUEST'>) {
  const { locale } = action.payload
  function* fetchEncyclopedia() {
    const encyclopediaResponse = yield httpClient.fetchEncyclopedia({ locale })
    return fromEncyclopedia(encyclopediaResponse)
  }
  function* fetchSurvey() {
    const surveysResponse = yield httpClient.fetchSurveys({
      locale,
    })

    return fromSurveys(surveysResponse)
  }
  function* fetchHelpCenters() {
    const helpCenterResponse = yield httpClient.fetchHelpCenters({
      locale,
    })
    return fromHelpCenters(helpCenterResponse)
  }

  function* fetchQuizzes() {
    const quizzesResponse = yield httpClient.fetchQuizzes({
      locale,
    })
    return fromQuizzes(quizzesResponse)
  }

  function* fetchDidYouKnows() {
    const didYouKnows = yield httpClient.fetchDidYouKnows({
      locale,
    })
    return fromDidYouKnows(didYouKnows)
  }

  function* fetchAvatarMessages() {
    const avatarMessages = yield httpClient.fetchAvatarMessages({
      locale,
    })
    return fromAvatarMessages(avatarMessages)
  }

  try {
    const { articles, categories, subCategories } = yield fetchEncyclopedia()
    const { surveys } = yield fetchSurvey()
    const { quizzes } = yield fetchQuizzes()
    const { didYouKnows } = yield fetchDidYouKnows()
    const { helpCenters } = yield fetchHelpCenters()
    const { avatarMessages } = yield fetchAvatarMessages()
    yield put(
      actions.fetchContentSuccess({
        articles: _.isEmpty(articles.allIds) ? staleContent[locale].articles : articles,
        categories: _.isEmpty(categories.allIds) ? staleContent[locale].categories : categories,
        subCategories: _.isEmpty(subCategories.allIds)
          ? staleContent[locale].subCategories
          : subCategories,
        quizzes: _.isEmpty(quizzes.allIds) ? staleContent[locale].quizzes : quizzes,
        surveys: _.isEmpty(surveys.allIds) ? staleContent[locale].surveys : surveys,
        didYouKnows: _.isEmpty(didYouKnows.allIds) ? staleContent[locale].didYouKnows : didYouKnows,
        helpCenters: _.isEmpty(helpCenters) ? staleContent[locale].helpCenters : helpCenters,
        avatarMessages: _.isEmpty(avatarMessages)
          ? staleContent[locale].avatarMessages
          : avatarMessages,
      }),
    )
  } catch (error) {
    yield put(actions.fetchContentFailure())
  }
}

function* onSetLocale(action: ExtractActionFromActionType<'SET_LOCALE'>) {
  const { locale } = action.payload
  const isTtsActive = yield select(selectors.isTtsActiveSelector)
  if (isTtsActive) {
    yield call(closeOutTTs)
    yield put(actions.setTtsActive(false))
  }
  // unsubscribe from topic
  firebase.messaging().unsubscribeFromTopic('oky_en_notifications')
  firebase.messaging().unsubscribeFromTopic('oky_id_notifications')
  firebase.messaging().unsubscribeFromTopic('oky_mn_notifications')
  firebase.messaging().subscribeToTopic(`oky_${locale}_notifications`)
  yield put(actions.initStaleContent(staleContent[locale]))
  yield put(actions.fetchContentRequest(locale))
}

export function* contentSaga() {
  yield all([
    takeLatest(REHYDRATE, onRehydrate),
    takeLatest('SET_LOCALE', onSetLocale),
    takeLatest('FETCH_CONTENT_REQUEST', onFetchContentRequest),
  ])
}
