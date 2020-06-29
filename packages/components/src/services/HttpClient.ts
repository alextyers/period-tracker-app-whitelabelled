import { createHttpClient } from '@period-tracker-app/core'
import * as config from '../config'

export const httpClient = createHttpClient(config.API_BASE_URL, config.API_BASE_CMS_URL, {
  rapidProEndpoint: config.RAPIDPRO_ENDPOINT,
  rapidProChannel: config.RAPIDPRO_CHANNEL,
  rapidProToken: config.RAPIDPRO_TOKEN,
})
