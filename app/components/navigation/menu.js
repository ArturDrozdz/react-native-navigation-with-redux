import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions'
// import Style from '../../utils/style'
import SCREENS from '../../consts/screens'

import {
	Dimensions,
	View,
	Text,
	TouchableOpacity,
	Image,
	Keyboard
} from 'react-native';

class Menu extends Component {

	constructor() {
		super();
		this.state = {};
		this.options = [
			{ screen: SCREENS.SEARCH, label: 'Search', icon: require('./icon_stores.png') },
			{ screen: SCREENS.TOP, label: 'Top', icon: require('./icon_search.png') },
			{ screen: SCREENS.PROFILE, label: 'Profile', icon: require('./icon_scan.png') }
		];
	}

	navigate(screen) {
		this.props.navigate(screen);
	}

	render() {

		const { width } = Dimensions.get('window');
		const spaceBetween = 8;
		const itemSize = (width - (spaceBetween * 2) - this.options.length * spaceBetween) / this.options.length;
		const screen = (this.props.navigation && this.props.navigation.screen) || SCREENS.TOP;

		return (
			<View>

				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingLeft: spaceBetween,
					paddingRight: spaceBetween,
					paddingTop: spaceBetween / 2
				}}>
					{this.options.map(option => {
						const bgColor = screen === option.screen ? '#2E4053' : '#5D6D7E';
						return (
							<View key={option.label} style={{ alignItems: 'center' }}>
								<TouchableOpacity
									style={{
										width: itemSize,
										height: itemSize,
										backgroundColor: bgColor,
										borderRadius: 10,
										alignItems: 'center',
										justifyContent: 'center'
									}}
									onPress={this.navigate.bind(this, option.screen)}>
									<Image source={option.icon} style={{ resizeMode: "contain", width: '80%',  height: '80%' }} />
								</TouchableOpacity>
								<Text style={{
									color: '#000000'
								}}>{option.label}</Text>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
const mapStateToProps = (state) => {
	return { navigation: state.navigation };
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);