import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_DECKS_KEY, STORAGE_CARDS_KEY } from '../utils/keys'
import { generateId } from '../utils/tools'

export const ADD_CARD = 'ADD_CARD'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const addCard = (deckId, question, answer) => {
	return {
		type: ADD_CARD,
		deckId,
		card: {
			id: generateId(),
			question, answer
		}
	}
}


const receiveData = (decks, cards) => {
	return {
		type: RECEIVE_DATA,
		decks,
		cards
	}
}

export const handleReceiveData = () => (dispatch, getState) => {
	Promise.all([
		AsyncStorage.getItem(STORAGE_DECKS_KEY),
		AsyncStorage.getItem(STORAGE_CARDS_KEY)
	]).then(([decks, cards]) => [JSON.parse(decks), JSON.parse(cards)]).
		then(([decks, cards]) => {
			dispatch(receiveData(decks, cards))
		})
}
