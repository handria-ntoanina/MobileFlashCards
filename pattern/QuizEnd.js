import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Button from '../pattern/Button'
import { Question } from '../utils/icons'
import { quizzesStop } from '../actions/quizzes'
import { primaryLightText, primaryText, primaryDarkText } from '../utils/colors'
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
	}
})
class QuizEnd extends Component {
	onPress = () => {
		const { dispatch, navigation } = this.props
		dispatch(quizzesStop())
		navigation.goBack()
		navigation.goBack()
	}
	render() {
		const { correct, incorrect } = this.props
		return (<>
			<View style={styles.container}>
				<Question color={primaryLightText} style={{ flexShrink: 0, marginHorizontal: 20 }} size={50} />
				<View styles={styles.textContainer}>
					<Text style={[{ color: primaryDarkText}, typography.message]}>
						Congratulations! You have finished the quiz. Here is your score
					</Text>
				</View>
			</View>
			<Text style={[{ color: primaryDarkText }, typography.header1]}>
				{correct} / {correct + incorrect}
			</Text>
			<Button onPress={this.onPress}
				label='End the quiz' style={{ paddingHorizontal: 25, margin: 10 }}
				textColor={primaryText} />
		</>)
	}
}

const mapStateToProps = ({ quizzes }, ownProps) => {
	return {
		correct: quizzes ? quizzes.correct : 0,
		incorrect: quizzes ? quizzes.incorrect : 0,
		...ownProps
	}
}
export default connect(mapStateToProps)(QuizEnd)