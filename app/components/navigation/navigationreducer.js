import createReducer from '../../utils/createReducer'
import * as types from '../../actions/types'
import Screens from '../../consts/screens'

export const navigation = createReducer({
	screen: Screens.TOP,
	history: []
}, {

	[types.NAVIGATION_CHANGE](state, action) {

		const history = state.history;
		history.push(state.screen);

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

