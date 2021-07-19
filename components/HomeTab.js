import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Text } from 'react-native'
import { primary, primaryDark } from '../utils/colors'
import DecksList from './DecksList'
import DeckAdd from './DeckAdd'

const Tab = createMaterialBottomTabNavigator()

class HomeTab extends Component {
	render() {
		return (
			<Tab.Navigator activeColor={primary} inactiveColor={primaryDark}>
				<Tab.Screen name='Decks' component={DecksList}/>
				<Tab.Screen name='Add' component={DeckAdd}/>
			</Tab.Navigator>)
	}
}

export default HomeTab