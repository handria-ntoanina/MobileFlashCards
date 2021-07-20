import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { primaryDark, primaryLightText, primary } from '../utils/colors'

class MyButton extends Component {
	render() {
		const { onPress, icon, textColor, label, style } = this.props
		const IconToRender = icon
		return (<TouchableOpacity onPress={onPress} style={[styles.container, style]}>
				{ icon && <IconToRender color={textColor}/>}
				<Text style={{color: textColor}}>{label}</Text>
			</TouchableOpacity>)
	}
}

const styles = StyleSheet.create({
	container: {
		 borderRadius: 2, 
		 flexDirection: 'row',
		 justifyContent: 'space-evenly',
		 alignItems: 'center',
		 backgroundColor: primary,
		 height: 47
	},
});

export default MyButton