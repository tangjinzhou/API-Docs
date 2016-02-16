'use strict';

import React, { Component,View } from 'react-native';
import {bindActionCreators} from 'redux';
import Dash from '../components/dash';
import ResultPage from '../components/resultPage';
import * as dashActions from '../actions/dashActions';
import { connect } from 'react-redux';


class DashApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <View style={{flex:1}}>
                <Dash
                    {...state}
                    {...actions}
                />
                {state.showResultPage && <ResultPage
                    {...state}
                    {...actions}
                />}
            </View>
        );
    }
}

export default DashApp;

export default connect(state => ({
        state: state.search
    }),
    (dispatch) => ({
        actions: bindActionCreators(dashActions, dispatch)
    })
)(DashApp);
