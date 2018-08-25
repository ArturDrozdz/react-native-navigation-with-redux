import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { Text, View, TouchableOpacity } from 'react-native';


class Profile extends Component {
	render() {
		return (
			<View>
				<Text>Here's my profile!</Text>
				<TouchableOpacity
					onPress={() => { this.props.navigateBack(); }}
				>
					<Text>Go Back</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
export default connect(null, mapDispatchToProps)(Profile);