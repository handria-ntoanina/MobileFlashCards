import { QUIZZES_START, QUIZZES_STOP, QUIZZES_CORRECT, QUIZZES_INCORRECT } from '../actions/quizzes'

export default function cards(state = {}, action) {
	switch (action.type) {
		case QUIZZES_START:
			return {
				cards: action.cards.slice(1),
				currentCard: action.cards.length > 0 ? action.cards[0] : null,
				correct: 0,
				incorrect: 0
			}
		case QUIZZES_STOP:
			return {}
		case QUIZZES_CORRECT:
			return {
				...state,
				cards: state.cards.slice(1),
				currentCard: state.cards.length > 0 ? state.cards[0] : null,
				correct: ++state.correct
			}
		case QUIZZES_INCORRECT:
			return {
				...state,
				cards: state.cards.slice(1),
				currentCard: state.cards.length > 0 ? state.cards[0] : null,
				incorrect: ++state.incorrect
			}
		default:
			return state
	}
}