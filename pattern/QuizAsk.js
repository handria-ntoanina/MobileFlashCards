import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../pattern/Button'
import { Right, Wrong, Question } from '../utils/icons'
import { quizzesCorrect, quizzesIncorrect } from '../actions/quizzes'
import { primaryLightText, primaryText, primaryDarkText } from '../utils/colors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 10,
		marginHorizontal: 35,
		alignSelf: 'stretch',
	},
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	}
})
class QuizAsk extends Component {

	render() {
		const { card, dispatch } = this.props
		if (!card)
			return null
		return (<>
			<View style={styles.container}>
				<Question color={primaryLightText} style={{ flexShrink: 0, marginHorizontal: 20 }} size={50} />
				<View styles={styles.textContainer}>
					<Text style={[{ color: primaryDarkText }, typography.message]}>
						{card.question}
					</Text>
					<Text style={[{ color: primaryDarkText }, typography.message]}>
						{card.answer}
					</Text>
				</View>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<Button onPress={() => dispatch(quizzesCorrect())}
					label='Correct' style={{ paddingHorizontal: 25, margin: 10 }}
					textColor={primaryText} icon={Right} />
				<Button onPress={() => dispatch(quizzesIncorrect())}
					label='Incorrect' style={{ paddingHorizontal: 25, margin: 10, backgroundColor: primaryLightText }}
					textColor={primaryText} icon={Wrong} />
			</View>
		</>)
	}
}

const mapStateToProps = ({ quizzes }, ownProps) => {
	return {
		card: quizzes ? quizzes.currentCard : null,
		...ownProps
	}
}
export default connect(mapStateToProps)(QuizAsk)