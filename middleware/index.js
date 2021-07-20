import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import persistentStorage from './persistentStorage'

export default applyMiddleware(thunk, persistentStorage, logger)