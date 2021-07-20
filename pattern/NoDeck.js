import React from 'react'
import { Text, View } from 'react-native'
import { primaryLightText } from '../utils/colors'
import { Book } from '../utils/icons'
import styles from '../utils/styles'
import typography from '../utils/typography'

const NoDeck = () => {
	const color = primaryLightText
	return (<View style={styles.displayAtScreenCenter}>
		<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
			<Book size={83} color={color} />
			<Text style={[typography.message, {color}]}>You have no deck yet!{'\n'}Start by adding one</Text>
		</View>
	</View>)
}

export default NoDeck