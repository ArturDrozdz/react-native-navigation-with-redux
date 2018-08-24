/** @format */

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './app/reducers'
import Navigation from './app/components/navigation/navigation'
import { name as appName } from './app.json';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware, // lets us dispatch() functions
			loggerMiddleware,
		),
	);
	return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

const Main = () => (
	<Provider store={store}>
		<Navigation />
	</Provider>
)

AppRegistry.registerComponent(appName, () => Main);
