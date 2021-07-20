import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import NoCard from '../pattern/NoCard'
import DeckWithCards from '../pattern/DeckWithCards'
import styles from '../utils/styles'
import typography from '../utils/typography'
import { primaryLightText, primaryText, primaryDark } from '../utils/colors'
import Button from '../pattern/Button'
import { handleQuizStart } from '../actions/quizzes'

class DeckDetails extends Component {
	onAddCard = () => {
		const { navigation } = this.props
		navigation.navigate('AddCard')
	}
	onStartQuiz = () => {
		const { navigation, dispatch, cards } = this.props
		dispatch(handleQuizStart(cards))
		navigation.navigate('Quiz')
	}
	render() {
		const { deck } = this.props
		if (!deck)
			return null
		return (
			<View style={styles.displayAtScreenCenter}>
				<Text style={[typography.header1, { color: primaryLightText }]}>
					{deck.title}
				</Text>
				{deck.cards && deck.cards.length > 0 && <DeckWithCards count={deck.cards.length} />}
				{(!deck.cards || !deck.cards.length) && <NoCard />}
				<Button onPress={this.onAddCard} label='Add a new card' 
					style={{ alignSelf: 'stretch', marginTop: 50 }} 
					textColor={primaryText} />
				{deck.cards && deck.cards.length > 0 && <Button onPress={this.onStartQuiz} label='Start a quiz' 
									style={{ alignSelf: 'stretch', marginTop: 10, backgroundColor: primaryDark }} 
									textColor={primaryText} />}
			</View>)
	}
}

const mapStateToProps = ({ decks, cards }, ownProps) => {
	const deck = decks && decks.selected && decks.data ? decks.data[decks.selected] : null
	const deckCards = deck && deck.cards ? deck.cards.map(id => cards[id]) : []
	return {
		deck,
		cards: deckCards,
		...ownProps
	}
}


export default connect(mapStateToProps)(DeckDetails)