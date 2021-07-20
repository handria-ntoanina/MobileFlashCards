import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decksSelect } from '../actions/decks'
import { View, Text, TouchableOpacity } from 'react-native'
import { Book } from '../utils/icons'
import { StyleSheet } from 'react-native'
import { primaryLightText, primaryDarkText, primary, primaryBackGround } from '../utils/colors'
import typography from '../utils/typography'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginVertical: 10,
		backgroundColor: primaryBackGround,
		elevation: 2,
		paddingVertical: 10,
	},
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flex: 1
	}
})

const Deck = ({ deck, navigation, dispatch }) => {
	const onPress = () => {
		dispatch(decksSelect(deck.id))
		navigation.navigate('DeckDetails')
	}
	if (!deck)
		return null
	return (<TouchableOpacity onPress={onPress}>
		<View style={styles.container}>
			<Book color={primaryLightText} style={{ flexShrink: 0, marginHorizontal: 20 }} size={50}/>
			<View styles={styles.textContainer}>
				<Text style={[{ color: primaryDarkText }, typography.header2]}>
					{deck.title}
				</Text>
				<Text style={[{ color: primaryLightText }, typography.header2]}>
					{deck.cards ? deck.cards.length : 0} cards
				</Text>
			</View>
		</View>
	</TouchableOpacity>)
}

const mapStateToProps = ({ decks }, ownProps) => {
	const { id, ...props } = ownProps
	const deck = decks && decks.data ? decks.data[id] : null
	return {
		deck,
		...props
	}
}

export default connect(mapStateToProps)(Deck)