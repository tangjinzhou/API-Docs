import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import * as reducers from '../reducers/index';
import DashApp from './dashApp';

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools({ hostname: 'localhost', port: 8000, name: 'IOS app' })
)(createStore);
const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <DashApp />
            </Provider>
        );
    }
}
