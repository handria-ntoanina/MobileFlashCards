import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styles from '../utils/styles'
import typography from '../utils/typography'
import TextInput from '../pattern/TextInput'
import Button from '../pattern/Button'
import { primaryLightText, primaryText } from '../utils/colors'
import { addCard } from '../actions/shared'

class AddCard extends Component {
	state = {
		question: '',
		answer: ''
	}
	onChangeText = (field) => (text) => {
		this.setState({ [field]: text })
	}
	onPress = () => {
		const { question, answer } = this.state
		const { deck } = this.props
		if (!question || question.trim() === '' ||
			!answer || answer.trim() === '') {
			alert('Please enter both a question and an answer')
			return
		}
		const { dispatch } = this.props
		dispatch(addCard(deck.id, question, answer))
		this.setState({
			question: '',
			answer: ''
		})
		this.props.navigation.goBack()
	}
	render() {
		const { deck } = this.props
		if (!deck)
			return null

		return (<View style={styles.displayAtScreenCenter}>
			<Text style={[typography.header1, { color: primaryLightText }]}>
				{deck.title}
			</Text>
			<TextInput label='Question' style={{ alignSelf: 'stretch' }}
				onChangeText={this.onChangeText('question')} value={this.state.question} />
			<TextInput label='Answer' style={{ alignSelf: 'stretch' }}
				onChangeText={this.onChangeText('answer')} value={this.state.answer} />
			<Button onPress={this.onPress} label='Submit' style={{ alignSelf: 'stretch', marginTop: 10 }} textColor={primaryText} />
		</View>)
	}
}

const mapStateToProps = ({ decks }, ownProps) => {
	const deck = decks && decks.selected && decks.data ? decks.data[decks.selected] : null
	return {
		deck,
		...ownProps
	}
}

export default connect(mapStateToProps)(AddCard)