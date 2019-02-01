import * as types from '../actions/types'
import {
  addDeck,
  addQuestion
} from './reducers'

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_DECK:
      return addDeck(state, payload)
    case types.ADD_QUESTION:
      return addQuestion(state, payload)
    default:
      return state;
  }
}
