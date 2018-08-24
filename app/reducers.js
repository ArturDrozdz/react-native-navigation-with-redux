import { combineReducers } from 'redux';
import * as NavigationReducer from './components/navigation/navigationreducer'

export default combineReducers(Object.assign(
	NavigationReducer
));
