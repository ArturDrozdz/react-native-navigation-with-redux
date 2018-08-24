import createReducer from '../../utils/createReducer'
import * as types from '../../actions/types'
import Screens from '../../consts/screens'

export const navigation = createReducer({
	screen: Screens.TOP,
	history: []
}, {

	[types.NAVIGATION_CHANGE](state, action) {
		const history = state.history;

		if (state.screen) {
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
			option: last,
			history: state.history.splice(-1,1)
		};
		return newState;
	}

});

