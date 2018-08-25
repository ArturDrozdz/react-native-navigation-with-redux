import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Styles from '../utils/styles'

export default class Details extends Component {
	render() {
		return (
			<View style={Styles.view}>
				<Text style={Styles.text}>Details view</Text>
			</View>
		)
	}
}
