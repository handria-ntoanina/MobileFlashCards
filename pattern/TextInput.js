import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, KeyboardAvoidingView  } from 'react-native'
import { primaryDark, primaryLightText } from '../utils/colors'

class MyTextInput extends Component {
	render() {
		const { label, style, ...ownProps } = this.props
		return (<KeyboardAvoidingView  style={[styles.container, style]}>
			<Text style={{color: primaryLightText}}>{label}</Text>
			<TextInput {...ownProps} style={styles.input} />
		</KeyboardAvoidingView >)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: primaryDark,
		alignSelf: 'stretch',
		paddingHorizontal: 10
	},
});

export default MyTextInput