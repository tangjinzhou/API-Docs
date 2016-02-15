'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Dash from '../components/dash';
import * as dashActions from '../actions/dashActions';
import { connect } from 'react-redux';

class DashApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Dash
        counter={state.count}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.dash
  }),
  (dispatch) => ({
    actions: bindActionCreators(dashActions, dispatch)
  })
)(DashApp);
