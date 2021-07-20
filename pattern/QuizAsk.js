import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../pattern/Button'
import TextButton from '../pattern/TextButton'
import { Right, Wrong, Question } from '../utils/icons'
import { quizzesCorrect, quizzesIncorrect } from '../actions/quizzes'
import { primaryLightText, primaryText, primaryDarkText } from '../utils/colors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 10,
		marginHorizontal: 25
	},
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	question: {
		flexShrink: 0,
		marginRight: 20
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	correctButton: {
		paddingHorizontal: 25,
		margin: 10
	},
	incorrectButton: {
		paddingHorizontal: 25,
		margin: 10,
		backgroundColor: primaryLightText
	}
})
class QuizAsk extends Component {
	state = {
		showAnswer: false
	}
	onPress = (actionCreator) => () => {
		const { dispatch } = this.props
		dispatch(actionCreator())
		this.setState({ showAnswer: false })
	}
	render() {
		const { card, remainingQuestions } = this.props
		if (!card)
			return null
		return (<>
			<View style={styles.container}>
				<Question color={primaryLightText} style={styles.question} size={50} />
				<View styles={styles.textContainer}>
					<Text style={[{ color: primaryDarkText }, typography.message]}>
						{card.question}
					</Text>
					{
						!this.state.showAnswer &&
						<TextButton label='Show the answer' onPress={() => this.setState({ showAnswer: true })} />
					}
					{
						this.state.showAnswer &&
						<Text style={[{ color: primaryDarkText }, typography.message]}>
							{card.answer}
						</Text>
					}
					<Text style={[{ color: primaryDarkText }, typography.header2]}>
						Remaining questions: {remainingQuestions}
					</Text>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<Button onPress={this.onPress(quizzesCorrect)}
					label='Correct' style={styles.correctButton}
					textColor={primaryText} icon={Right} />
				<Button onPress={this.onPress(quizzesIncorrect)}
					label='Incorrect' style={styles.incorrectButton}
					textColor={primaryText} icon={Wrong} />
			</View>
		</>)
	}
}

const mapStateToProps = ({ quizzes }, ownProps) => {
	return {
		card: quizzes ? quizzes.currentCard : null,
		remainingQuestions: quizzes && quizzes.cards ? quizzes.cards.length : 0,
		...ownProps
	}
}
export default connect(mapStateToProps)(QuizAsk)