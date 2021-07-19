import { CARDS_ADD } from '../actions/cards'
import { CARDS_LOAD } from '../actions/shared'

export default function cards(state = {}, action) {
	switch (action.type) {
		case CARDS_ADD:
			const { card } = action
			return { ...state, [card.id]: card}
		case CARDS_LOAD:
			return action.cards
		default:
			return state
	}
}