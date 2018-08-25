import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../utils/styles'


class Profile extends Component {
	render() {
		return (
			<View style={Styles.view}>
				<Text style={Styles.text}>Here's my profile!</Text>
				<TouchableOpacity
					style={Styles.button}
					onPress={() => { this.props.navigateBack(); }}
				>
					<Text style={Styles.buttonText}>Go Back</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
export default connect(null, mapDispatchToProps)(Profile);