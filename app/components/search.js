import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';
import Styles from '../utils/styles'

export default class Search extends Component {
	render() {
		return (
			<View style={Styles.view}>
				<Text style={Styles.text}>This is search screen!</Text>
				<TextInput />
			</View>
		)
	}
}
