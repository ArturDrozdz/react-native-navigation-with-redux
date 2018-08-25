import createReducer from '../../utils/createReducer'
import * as types from '../../actions/types'
import SCREENS from '../../consts/screens'

export const navigation = createReducer({
	screen: SCREENS.TOP,
	history: []
}, {

	[types.NAVIGATION_CHANGE](state, action) {

		const history = state.history;

		const screensToSkip = [SCREENS.DETAILS];
		if (screensToSkip.indexOf(state.screen) === -1) {
			history.push(state.screen);
		}

		let newState = {
			...state,
			screen: action.screen,
			history
		};
		return newState;
	},

	[types.NAVIGATION_BACK](state) {
		const last = state.history.pop();
		let newState = {
			...state,
			screen: last,
			history: state.history.splice(-1,1)
		};
		return newState;
	}

});

