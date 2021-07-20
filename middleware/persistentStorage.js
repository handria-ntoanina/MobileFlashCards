import { DECKS_ADD, DECKS_SELECT } from '../actions/decks'
import { ADD_CARD } from '../actions/shared'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_DECKS_KEY, STORAGE_CARDS_KEY } from '../utils/keys'

const persistentStorage = (store) => (next) => (action) => {
	const result = next(action)
	const { decks, cards } = store.getState()
	const decksData = decks ? decks.data : []
	if ([DECKS_ADD, DECKS_SELECT, ADD_CARD ].filter(o => o === action.type).length) {
		AsyncStorage.setItem(STORAGE_DECKS_KEY, JSON.stringify(decksData))
	} 
	if ([ADD_CARD].filter(o => o === action.type).length) {
		AsyncStorage.setItem(STORAGE_CARDS_KEY, JSON.stringify(cards))
	}
	return result
}
export default persistentStorage