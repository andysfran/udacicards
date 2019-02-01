import { actionCreator } from '../../utils/reduxUtils'
import * as types from './types'

export const addDeck = (deckName) => actionCreator(types.ADD_DECK, deckName);
export const addQuestion = (deckIndex, question, answer) => actionCreator(types.ADD_QUESTION, { deckIndex, question, answer });