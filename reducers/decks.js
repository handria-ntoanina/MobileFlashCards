import { DECKS_ADD, DECKS_SELECT, DECKS_ADD_CARD } from '../actions/decks'
import { DECKS_LOAD } from '../actions/shared'

export default function cards(state = {}, action) {
	switch (action.type) {
		case DECKS_ADD:
			const { deck } = action
			return {
				selected: null,
				data: {
					...state.data,
					[deck.id]: deck
				}
			}
		case DECKS_ADD_CARD:
			const { deckId, cardId } = action
			const deckToEdit = state.data[deckId]
			const newDeck = {
				...deckToEdit,
				cards: [...deckToEdit.cards, cardId]
			}
			return {
				...state,
				data: {
					...state.data,
					[deckId]: newDeck
				}
			}
		case DECKS_SELECT:
			return { ...state, selected: action.selectedDeck }
		case DECKS_LOAD:
			return { selected: null, data: action.decks }
		default:
			return state
	}
}