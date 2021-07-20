import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import NoDeck from '../pattern/NoDeck'
import Deck from './Deck'
import { generateId } from '../utils/tools'

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		padding: 20
	}
})

class DecksList extends Component {
	render() {
		const { decks, navigation } = this.props
		if (!decks.length)
			return (<NoDeck />)
		return (<ScrollView contentContainerStyle={styles.container}>
			{
				decks.map(d => <Deck key={d.id} id={d.id} navigation={navigation}/>)
			}
		</ScrollView>)
	}
}

const mapStateToProps = ({ decks }, ownProps) => {
	return {
		decks: decks && decks.data ? Object.keys(decks.data).map(k => decks.data[k]) : [],
		...ownProps
	}
}

export default connect(mapStateToProps)(DecksList)