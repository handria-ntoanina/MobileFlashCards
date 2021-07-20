import React from 'react'
import { Text, View } from 'react-native'
import { primaryLightText } from '../utils/colors'
import { Warning } from '../utils/icons'
import styles from '../utils/styles'
import typography from '../utils/typography'

const NoCard = () => {
	const color = primaryLightText
	return (
		<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
			<Warning size={83} color={color} />
			<Text style={[typography.message, { color }]}>This deck has no card yet!{'\n'}Start by adding one</Text>
		</View>)
}

export default NoCard