import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import * as types from './types'

export function createHttpClient(
  endpoint: string,
  cmsEndpoint: string,
  { rapidProEndpoint, rapidProChannel, rapidProToken },
) {
  return {
    login: async ({ name, password }: any) => {
      const response: AxiosResponse<types.LoginResponse> = await axios.post(
        `${endpoint}/account/login`,
        {
          name,
          password,
        },
      )
      return response.data
    },
    signup: async ({
      name,
      dateOfBirth,
      gender,
      location,
      country,
      province,
      password,
      secretQuestion,
      secretAnswer,
      preferredId = null,
    }: any) => {
      const response: AxiosResponse<types.SignupResponse> = await axios.post(
        `${endpoint}/account/signup`,
        {
          name,
          dateOfBirth,
          gender,
          location,
          country,
          province,
          password,
          secretAnswer,
          secretQuestion,
          preferredId,
        },
      )
      return response.data
    },
    resetPassword: async ({ name, secretAnswer, password }: any) => {
      const response: AxiosResponse<{}> = await axios.post(`${endpoint}/account/reset-password`, {
        name,
        secretAnswer,
        password,
      })

      return response.data
    },
    deleteUser: async ({ appToken }: any) => {
      await axios.post(`${endpoint}/account/delete`, null, {
        headers: { Authorization: `Bearer ${appToken}` },
      })
    },
    deleteUserFromPassword: async ({ name, password }: any) => {
      await axios.post(`${endpoint}/account/delete-from-password`, {
        name,
        password,
      })
    },
    getUserInfo: async (userName: string) => {
      const response: AxiosResponse<types.UserInfoResponse> = await axios.get(
        `${endpoint}/account/info/${encodeURIComponent(userName)}`,
      )

      return response.data
    },
    getPermanentAlert: async (versionName: string, locale: string, user: string) => {
      const response: AxiosResponse<types.PermanentAlertResponse> = await axios.get(
        `${cmsEndpoint}/mobile/permanent-notification/${versionName}&${locale}&${user}`,
      )
      return response.data
    },
    replaceStore: async ({ storeVersion, appState, appToken }: any) => {
      const response: AxiosResponse<types.ReplaceStoreResponse> = await axios.post(
        `${endpoint}/account/replace-store`,
        {
          storeVersion,
          appState: JSON.stringify(appState),
        },
        {
          headers: { Authorization: `Bearer ${appToken}` },
        },
      )
      return response.data
    },
    editUserInfo: async ({
      appToken,
      name,
      dateOfBirth,
      gender,
      location,
      secretQuestion,
    }: any) => {
      const response: AxiosResponse<{}> = await axios.post(
        `${endpoint}/account/edit-info`,
        {
          name,
          dateOfBirth,
          gender,
          location,
          secretQuestion,
        },
        {
          headers: { Authorization: `Bearer ${appToken}` },
        },
      )

      return response.data
    },
    editUserSecretAnswer: async ({ appToken, previousSecretAnswer, nextSecretAnswer }: any) => {
      const response: AxiosResponse<{}> = await axios.post(
        `${endpoint}/account/edit-secret-answer`,
        {
          previousSecretAnswer,
          nextSecretAnswer,
        },
        {
          headers: { Authorization: `Bearer ${appToken}` },
        },
      )

      return response.data
    },
    fetchAvatarMessages: async ({ locale }) => {
      const response: AxiosResponse<types.AvatarMessagesResponse> = await axios.get(
        `${cmsEndpoint}/mobile/avatar-messages/${locale}`,
      )
      return response.data
    },
    fetchEncyclopedia: async ({ locale }) => {
      const response: AxiosResponse<types.EncyclopediaResponse> = await axios.get(
        `${cmsEndpoint}/mobile/articles/${locale}`,
      )
      return response.data
    },
    fetchSurveys: async ({ locale }: any) => {
      const response: AxiosResponse<types.SurveysResponse> = await axios.get(
        `${cmsEndpoint}/mobile/surveys/${locale}`,
      )

      return response.data
    },
    fetchQuizzes: async ({ locale }: any) => {
      const response: AxiosResponse<types.QuizzesResponse> = await axios.get(
        `${cmsEndpoint}/mobile/quizzes/${locale}`,
      )
      return response.data
    },
    fetchDidYouKnows: async ({ locale }: any) => {
      const response: AxiosResponse<types.DidYouKnowsResponse> = await axios.get(
        `${cmsEndpoint}/mobile/didyouknows/${locale}`,
      )
      return response.data
    },
    fetchHelpCenters: async ({ locale }: any) => {
      const response: AxiosResponse<types.HelpCenterResponse> = await axios.get(
        `${cmsEndpoint}/mobile/help-center/${locale}`,
      )
      return response.data
    },
    fetchSingleNotification: async ({ locale }) => {
      const response: AxiosResponse<types.EncyclopediaResponse> = await axios.get(
        `${cmsEndpoint}/mobile/notification/${locale}`,
      )
      return response.data
    },
    appendEvents: async ({ events, appToken }: any) => {
      await axios.post(
        `${endpoint}/analytics/append-events`,
        { events },
        {
          headers: appToken ? { Authorization: `Bearer ${appToken}` } : {},
        },
      )
    },
    sendContactUsForm: async payload => {
      const response: AxiosResponse<types.EncyclopediaResponse> = await axios.post(
        `${cmsEndpoint}/mobile/suggestions`,
        payload,
      )
      return response.data
    },
    registerContact: async ({ urn, fcmToken, name }) => {
      const api = `${rapidProEndpoint}/c/fcm/${rapidProChannel}/register`

      const response = await axios.post(
        api,
        qs.stringify({
          urn,
          fcm_token: fcmToken,
          name,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      return {
        contact: response.data.contact_uuid,
      }
    },
    receiveIncomingMessage: async ({ from, msg, fcmToken }) => {
      const api = `${rapidProEndpoint}/c/fcm/${rapidProChannel}/receive`

      await axios.post(
        api,
        qs.stringify({
          channel: rapidProChannel,
          fcm_token: fcmToken,
          from,
          msg,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
    },
    getMessages: async contact => {
      const api = `${rapidProEndpoint}/api/v2/messages.json?contact=${contact}`

      const response = await axios.get(api, {
        headers: {
          Authorization: `Token ${rapidProToken}`,
        },
      })

      return response.data.results.map(message => ({
        id: message.id,
        direction: message.direction,
        text: message.text,
        sentAt: message.sent_on,
      }))
    },
    getRuns: async contact => {
      const api = `${rapidProEndpoint}/api/v2/runs.json?contact=${contact}`

      const response = await axios.get(api, {
        headers: {
          Authorization: `Token ${rapidProToken}`,
        },
      })

      return response.data
    },
    getDefinitions: async flow => {
      const api = `${rapidProEndpoint}/api/v2/definitions.json?flow=${flow}`

      const response = await axios.get(api, {
        headers: {
          Authorization: `Token ${rapidProToken}`,
        },
      })

      return response.data
    },
  }
}
