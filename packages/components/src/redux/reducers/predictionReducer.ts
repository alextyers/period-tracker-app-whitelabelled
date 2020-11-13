import _ from 'lodash'
import { PredictionSerializableState } from '@period-tracker-app/core'
import { Actions } from '../types/index'

export type PredictionState = PredictionSerializableState | null

const initialState: PredictionState = null

export function predictionReducer(state = initialState, action: Actions): PredictionState {
  if (action.type === 'SET_PREDICTION_ENGINE_STATE') {
    return action.payload.predictionState.toJSON()
  }

  return state
}
