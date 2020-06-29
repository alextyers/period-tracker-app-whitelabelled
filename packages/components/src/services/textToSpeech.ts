import Tts from 'react-native-tts'
import { translate } from '../i18n'

let globalSpeakInstance = 0

export const speakArray = async screenText => {
  globalSpeakInstance++

  try {
    const currentGlobalInstance = globalSpeakInstance
    for await (const textEntry of screenText) {
      if (currentGlobalInstance !== globalSpeakInstance) {
        throw new Error()
      }
      await speakTts(textEntry.replace(/period tracker app/gi, 'period tracker app'))
      await sleep(1000)
    }
  } catch (err) {
    // nothing..
  }
}

export const clearTTSQueue = async () => {
  return Tts.stop()
}

export const closeOutTTs = async () => {
  await Tts.stop()
  speakArray([translate('thank_you')])
}

const speakTts = async speech => {
  return new Promise((resolve, reject) => {
    Tts.speak(speech)
    const cb = event => {
      resolve(event)
      Tts.removeEventListener('tts-finish', cb)
    }
    Tts.addEventListener('tts-finish', cb)
  })
}

const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
