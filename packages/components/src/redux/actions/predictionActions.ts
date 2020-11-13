import { createAction } from '../helpers'
import { PredictionState } from '@period-tracker-app/core'

export function setPredictionEngineState(predictionState: PredictionState) {
  return createAction('SET_PREDICTION_ENGINE_STATE', { predictionState })
}

export function adjustPrediction(action) {
  return createAction('ADJUST_PREDICTION', action)
}
