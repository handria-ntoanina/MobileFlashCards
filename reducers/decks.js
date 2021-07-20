import { DECKS_ADD, DECKS_SELECT } from '../actions/decks'
import { RECEIVE_DATA, ADD_CARD } from '../actions/shared'

export default function cards(state = {}, action) {
	switch (action.type) {
		case DECKS_ADD:
			const { deck } = action
			return {
				selected: deck.id,
				data: {
					...state.data,
					[deck.id]: deck
				}
			}
		case ADD_CARD:
			const { deckId, card } = action
			const cardId = card.id
			const deckToEdit = state.data[deckId]
			const cards = deckToEdit.cards ? deckToEdit.cards : []
			const newDeck = {
				...deckToEdit,
				cards: [...cards, cardId]
			}
			return {
				...state,
				data: {
					...state.data,
					[deckId]: newDeck
				}
			}
		case DECKS_SELECT:
			return { ...state, selected: action.selectedDeckId }
		case RECEIVE_DATA:
			return { selected: null, data: action.decks }
		default:
			return state
	}
}