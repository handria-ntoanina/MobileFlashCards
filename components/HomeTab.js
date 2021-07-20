import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Text } from 'react-native'
import { handleReceiveData } from '../actions/shared'
import { handleInitialSchedule } from '../actions/notifications'
import { primary, primaryText } from '../utils/colors'
import { Book, Add } from '../utils/icons'
import DecksList from './DecksList'
import DeckAdd from './DeckAdd'

const Tab = createMaterialBottomTabNavigator()

class HomeTab extends Component {
	decksListIcon = ({ focused, color }) => {
		return (<Book color={color} size={25} />)
	}
	addIcon = ({ focused, color }) => {
		return (<Add color={color} size={25} />)
	}
	componentDidMount = () => {
		const { dispatch } = this.props
		dispatch(handleReceiveData())
		dispatch(handleInitialSchedule())
	}
	render() {
		return (
			<Tab.Navigator barStyle={{ backgroundColor: primary }} activeColor={primaryText}>
				<Tab.Screen name='Decks' component={DecksList} options={{ tabBarIcon: this.decksListIcon }} />
				<Tab.Screen name='Add' component={DeckAdd} options={{ tabBarIcon: this.addIcon }} />
			</Tab.Navigator>)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { ...ownProps }
}

export default connect()(HomeTab)