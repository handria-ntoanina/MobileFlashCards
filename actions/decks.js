import { generateId } from '../utils/tools'

export const DECKS_SELECT = 'DECKS/SELECT'
export const DECKS_ADD = 'DECKS/ADD'


export const decksAdd = (title) => {
	const id = generateId()
	return {
		type: DECKS_ADD,
		deck: {
			title,
			id
		}
	}
}

export const decksSelect = (selectedDeckId) => {
	return {
		type: DECKS_SELECT,
		selectedDeckId
	}
}