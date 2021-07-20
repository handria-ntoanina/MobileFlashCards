import { RECEIVE_DATA, ADD_CARD } from '../actions/shared'

export default function cards(state = {}, action) {
	switch (action.type) {
		case ADD_CARD:
			const { card } = action
			return { ...state, [card.id]: card}
		case RECEIVE_DATA:
			return action.cards
		default:
			return state
	}
}