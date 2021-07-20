import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { decksSelect } from '../actions/decks'
import { View, Text, TouchableOpacity } from 'react-native'
import { Book } from '../utils/icons'
import { StyleSheet, Animated } from 'react-native'
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
	const bounceValue = useRef(new Animated.Value(1)).current
	const onPress = () => {
		Animated.sequence([
			Animated.timing(bounceValue, { duration: 200, toValue: 1.15, useNativeDriver: true }),
			Animated.spring(bounceValue, { toValue: 1, useNativeDriver: true, speed: 12 })
		]).start(({ finished }) => {
			dispatch(decksSelect(deck.id))
			navigation.navigate('DeckDetails')
		})
	}
	const onPressIn = () => {
		Animated.timing(bounceValue, { duration: 200, toValue: 1.15, useNativeDriver: true }).start()
	}
	const onPressOut = () => {
		Animated.spring(bounceValue, { toValue: 1, useNativeDriver: true, speed: 12 })
			.start()
	}
	if (!deck)
		return null
	return (<TouchableOpacity onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
		<Animated.View style={[styles.container, { transform: [{ scale: bounceValue }] }]}>
			<Book color={primaryLightText} style={{ flexShrink: 0, marginHorizontal: 20 }} size={50} />
			<View styles={styles.textContainer}>
				<Text style={[{ color: primaryDarkText }, typography.header2]}>
					{deck.title}
				</Text>
				<Text style={[{ color: primaryLightText }, typography.header2]}>
					{deck.cards ? deck.cards.length : 0} cards
				</Text>
			</View>
		</Animated.View>
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