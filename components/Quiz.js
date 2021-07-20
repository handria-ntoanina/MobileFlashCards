import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import styles from '../utils/styles'
import typography from '../utils/typography'
import TextInput from '../pattern/TextInput'
import { primaryLightText, primaryText } from '../utils/colors'
import { decksAdd } from '../actions/decks'
import { Right, Wrong, Question } from '../utils/icons'
import QuizAsk from '../pattern/QuizAsk'
import QuizEnd from '../pattern/QuizEnd'

class Quiz extends Component {
	render() {
		const { deck, end, navigation } = this.props
		if (!deck)
			return null
		return (<View style={styles.displayAtScreenCenter}>
			<Text style={[typography.header1, { color: primaryLightText }]}>
				{deck.title}
			</Text>
			{!end && <QuizAsk />}
			{end && <QuizEnd navigation={navigation} />}
		</View >)
	}
}

const mapStateToProps = ({ decks, quizzes }, ownProps) => {
	const deck = decks && decks.selected && decks.data ? decks.data[decks.selected] : null
	return {
		deck,
		end: quizzes && quizzes.cards && !quizzes.cards.length && !quizzes.currentCard,
		...ownProps
	}
}

export default connect(mapStateToProps)(Quiz)