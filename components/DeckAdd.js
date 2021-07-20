import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styles from '../utils/styles'
import typography from '../utils/typography'
import TextInput from '../pattern/TextInput'
import Button from '../pattern/Button'
import { primaryLightText, primaryText } from '../utils/colors'
import { decksAdd} from '../actions/decks'

class DeckAdd extends Component {
	state = {
		deckTitle: ''
	}
	onChangeText = (text) => {
		this.setState({ deckTitle: text })
	}
	onPress = () => {
		const { deckTitle } = this.state
		if(!deckTitle || deckTitle.trim() === ''){
			alert('Please enter a deck title')
			return
		}
		const { dispatch, navigation } = this.props
		dispatch(decksAdd(deckTitle))
		this.setState({ deckTitle: '' })
		navigation.goBack()
		navigation.navigate('DeckDetails')
	}
	render() {
		return (<View style={styles.displayAtScreenCenter}>
			<Text style={[typography.header1, { color: primaryLightText }]}>
				Adding a new deck
			</Text>
			<TextInput label='Title of the deck' style={{ alignSelf: 'stretch' }}
				onChangeText={this.onChangeText} value={this.state.deckTitle} />
			<Button onPress={this.onPress} label='Submit' style={{ alignSelf: 'stretch', marginTop: 10 }} textColor={primaryText} />
		</View>)
	}
}

export default connect()(DeckAdd)