import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import SCREENS from '../consts/screens'

class Top extends Component {
	render() {
		return (
			<View style={{ padding: 10 }}>
				<Text style={{ fontSize: 20 }}>Let's see what's on top.</Text>
				<TouchableOpacity
					onPress={() => { this.props.navigate(SCREENS.DETAILS); }}
				>
					<Text>Show me some details</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
export default connect(null, mapDispatchToProps)(Top);