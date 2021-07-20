import React from 'react'
import { Text, View } from 'react-native'
import { primaryLightText } from '../utils/colors'
import { Book } from '../utils/icons'
import styles from '../utils/styles'
import typography from '../utils/typography'

const DeckWithCards = ({ count }) => {
	const color = primaryLightText
	return (
		<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
			<Book size={83} color={color} />
			<Text style={[typography.message, { color }]}>This deck has {count} {count > 1 ? 'cards' : 'card'}</Text>
		</View>)
}

export default DeckWithCards