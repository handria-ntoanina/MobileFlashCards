import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Button from '../pattern/Button'
import { Question } from '../utils/icons'
import { handleQuizStart, quizzesStop } from '../actions/quizzes'
import { primaryLightText, primaryText, primaryDarkText, primaryDark } from '../utils/colors'
import typography from '../utils/typography'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 10,
		marginHorizontal: 35
	},
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	question: {
		flexShrink: 0,
		marginRight: 20
	},
	restartButton: {
		paddingHorizontal: 25,
		margin: 10,
	},
	endButton: {
		paddingHorizontal: 25,
		margin: 10,
		backgroundColor: primaryDark 
	}
})
class QuizEnd extends Component {
	onPress = () => {
		const { dispatch, navigation } = this.props
		dispatch(quizzesStop())
		navigation.goBack()
	}
	onRestart = () => {
		const { dispatch, cards } = this.props
		dispatch(handleQuizStart(cards))
	}
	render() {
		const { correct, incorrect } = this.props
		return (<>
			<View style={styles.container}>
				<Question color={primaryLightText} style={styles.question} size={50} />
				<View styles={styles.textContainer}>
					<Text style={[{ color: primaryDarkText }, typography.message]}>
						Congratulations! You have finished the quiz. Here is your score
					</Text>
				</View>
			</View>
			<Text style={[{ color: primaryDarkText }, typography.header1]}>
				{correct} / {correct + incorrect}
			</Text>
			<Button onPress={this.onRestart}
				label='Restart Quiz' style={styles.restartButton}
				textColor={primaryText} />
			<Button onPress={this.onPress}
				label='Back to Deck' style={styles.endButton}
				textColor={primaryText} />
		</>)
	}
}

const mapStateToProps = ({ decks, quizzes, cards }, ownProps) => {
	const deck = decks && decks.selected && decks.data ? decks.data[decks.selected] : null
	const deckCards = deck && deck.cards ? deck.cards.map(id => cards[id]) : []
	return {
		correct: quizzes ? quizzes.correct : 0,
		incorrect: quizzes ? quizzes.incorrect : 0,
		cards: deckCards,
		...ownProps
	}
}
export default connect(mapStateToProps)(QuizEnd)
