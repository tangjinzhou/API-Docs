'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import SearchPage from '../components/searchPage';
import MyDocs from '../components/myDocs';
import * as dashActions from '../actions/dashActions';
import { connect } from 'react-redux';

var SearchView = React.createClass({
    render: function () {
        return (
            <View>
                <SearchPage/>
                <MyDocs/>
            </View>
        )
    }
});

const Search = connect(state => ({
        state: state.search
    }),
    (dispatch) => ({
        actions: bindActionCreators(dashActions, dispatch)
    })
)(SearchView);

export default Search;
