import { handleRegisterQuizTime } from '../actions/notifications'

export const QUIZZES_START='QUIZZES/START'
export const QUIZZES_STOP='QUIZZES_STOP'
export const QUIZZES_CORRECT='QUIZZES_CORRECT'
export const QUIZZES_INCORRECT='QUIZZES_INCORRECT'

const quizzesStart = (cards) => {
	return {
		type: QUIZZES_START,
		cards
	}
}

export const quizzesStop = () => {
	return {
		type: QUIZZES_STOP,
	}
}

export const quizzesCorrect = () => {
	return {
		type: QUIZZES_CORRECT,
	}
}

export const quizzesIncorrect = () => {
	return {
		type: QUIZZES_INCORRECT,
	}
}

export const handleQuizStart = (cards) => (dispatch, getState) => {
	dispatch(handleRegisterQuizTime())
	dispatch(quizzesStart(cards))
}