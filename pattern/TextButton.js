import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { primary } from '../utils/colors'

class TextButton extends Component {
	render() {
		const { onPress,  textColor, label, style } = this.props
		const colorToApply = textColor ? textColor : primary
		return (<TouchableOpacity onPress={onPress} style={style}>
				<Text style={{color: colorToApply}}>{label}</Text>
			</TouchableOpacity>)
	}
}


export default TextButton