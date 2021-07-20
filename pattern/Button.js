import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { primary } from '../utils/colors'

class MyButton extends Component {
	render() {
		const { onPress, icon, textColor, label, style } = this.props
		const IconToRender = icon
		return (<TouchableOpacity onPress={onPress} style={[styles.container, style]}>
				{ icon && <IconToRender color={textColor} style={styles.icon} size={25}/>}
				<Text style={{color: textColor}}>{label}</Text>
			</TouchableOpacity>)
	}
}

const styles = StyleSheet.create({
	container: {
		 borderRadius: 2, 
		 flexDirection: 'row',
		 justifyContent: 'center',
		 alignItems: 'center',
		 backgroundColor: primary,
		 height: 47
	},
	icon: {
		marginRight: 25
	}
});

export default MyButton