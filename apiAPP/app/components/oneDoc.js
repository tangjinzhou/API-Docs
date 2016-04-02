'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity,
    Navigator,
    Animated
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as dashActions from '../actions/dashActions';
import { connect } from 'react-redux';
import CommonList from './commonList';
import SearchText from './searchText';
import SearchAPiPage from './searchApiPage';
import ApiInfo from './apiInfo';
import listData from './listData';
import queryDB from './queryDB';
import RNFS from 'react-native-fs';
import ResultPage from '../components/resultPage';
var TimerMixin = require('react-timer-mixin');

const DocumentDirectoryPath = RNFS.DocumentDirectoryPath;

var OneDoc = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function () {

        return {oneDocApiList: []};
    },
    componentDidMount: function () {
        var _this = this;
        this.props.actions.dispatchHideResultPage('oneDoc');
        //queryDB.getOneDocApiList(this.props).then(function (res) {
        //    _this.setState(Object.assign(_this.state, {oneDocApiList: res}));
        //});
    },

    render: function () {
        var {state,actions, navigator, route} = this.props;
        this.oneDocApiList = route.passProps.oneDocApiList;
        var dataSource = listData.getDataSource(route, this.oneDocApiList);
        this.docPath = route.passProps.docPath;
        this.navigator = navigator;
        var showResultPage = state.showResultPage;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>actions.dispatchShowResultPage('oneDoc')}
                >
                    <View>
                        {!showResultPage && <SearchText
                            editable={false}
                        />}
                    </View>
                </TouchableOpacity>
                <CommonList
                    {...this.props}
                    dataSource={dataSource}
                    hideSection={true}
                    pressRow={this.pressRow}
                />
                {showResultPage && <ResultPage
                    {...this.props}
                    actionPage={'oneDoc'}
                />}
            </View>
        );
    },

    pressRow: function (rowData, rowId) {
        var NavComponent = ApiInfo;
        var leftTitle = '<...';
        var apiPath = DocumentDirectoryPath + '/' + this.docPath + 'Documents/' + this.oneDocApiList[rowId].path;

        var props = Object.assign({}, this.props, {apiPath: apiPath});

        this.navigator.push({
            title: rowData,
            leftTitle: leftTitle,
            component: NavComponent,
            passProps: props
        })

    }

})

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchText: {
        paddingTop: 30,
    },
});

export default OneDoc;

function getState(state) {
    state = Object.assign({}, state.oneDoc);
    return {state: state}
}
export default connect(getState,
    (dispatch) => ({
        actions: bindActionCreators(dashActions, dispatch)
    })
)(OneDoc);
