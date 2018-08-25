import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import SCREENS from '../consts/screens'
import Styles from '../utils/styles'

class Top extends Component {
	render() {
		return (
			<View style={Styles.view}>
				<Text style={Styles.text}>Let's see what's on top.</Text>
				<TouchableOpacity
					style={Styles.button}
					onPress={() => { this.props.navigate(SCREENS.DETAILS); }}
				>
					<Text style={Styles.buttonText}>Show me some details</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
export default connect(null, mapDispatchToProps)(Top);