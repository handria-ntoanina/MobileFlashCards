import { combineReducers } from 'redux'

import cards from './cards'
import decks from './decks'
import quizzes from './quizzes'

export default combineReducers({ cards, decks, quizzes})