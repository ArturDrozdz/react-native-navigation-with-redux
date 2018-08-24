import * as types from '../../actions/types'

export function navigate(screen) {
	return (dispatch) => {
		dispatch({
			type: types.NAVIGATION_CHANGE,
			screen: screen
		});
	}
}

export function navigateBack() {
	return (dispatch) => {
		dispatch({
			type: types.NAVIGATION_BACK
		});
	}
}
