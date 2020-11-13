import { ReduxState } from '../store'

const s = (state: ReduxState) => state.app

export const currentLocaleSelector = (state: ReduxState) => s(state).locale

export const currentChosenRegionSelector = (state: ReduxState) => s(state).chosenRegion

export const currentThemeSelector = (state: ReduxState) => s(state).theme

export const currentAvatarSelector = (state: ReduxState) => s(state).avatar

export const hasOpenedSelector = (state: ReduxState) => s(state).hasOpened

export const isTutorialOneActiveSelector = (state: ReduxState) => s(state).isTutorialOneActive

export const isTutorialTwoActiveSelector = (state: ReduxState) => s(state).isTutorialTwoActive

export const isTtsActiveSelector = (state: ReduxState) => s(state).isTtsActive

export const isLoginPasswordActiveSelector = (state: ReduxState) => s(state).isLoginPasswordActive

export const currentAppVersion = (state: ReduxState) => s(state).appVersionName

export const currentFirebaseToken = (state: ReduxState) => s(state).firebaseToken
