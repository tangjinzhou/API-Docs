'use strict';

import React, { Component,View } from 'react-native';
import {bindActionCreators} from 'redux';
import Dash from '../components/dashRouter';
import ResultPage from '../components/resultPage';
import * as dashActions from '../actions/dashActions';
import { connect } from 'react-redux';


class DashApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                <Dash
                />

        );
    }
}

export default DashApp;

//function getState(state) {
//    state = Object.assign({}, state.search);
//    return {state: state}
//}
//export default connect(getState,
//    (dispatch) => ({
//        actions: bindActionCreators(dashActions, dispatch)
//    })
//)(DashApp);
