import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions'
import { View } from 'react-native';
import SCREENS from '../../consts/screens'
import Menu from './menu'
import Top from '../top'
import Search from '../search'
import Profile from '../profile'

class Navigation extends Component {

	getScreen(screen) {
		switch (screen) {
			case SCREENS.TOP:
				return <Top />
			case SCREENS.SEARCH:
				return <Search />
			case SCREENS.PROFILE:
				return <Profile />
			default:
				return <Top />
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					{this.getScreen(this.props.navigation.screen)}
				</View>
				<Menu />
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
const mapStateToProps = (state) => { return { navigation: state.navigation }; }
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);