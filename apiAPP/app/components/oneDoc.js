'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity,
    Navigator,
    Animated,
    Image,
    Text
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
import getImageSource from '../imageSource';
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
                    onPress={()=>actions.dispatchShowResultPage({page:'oneDoc'})}
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
                    renderRow={this.renderRow}
                />
                {showResultPage && <ResultPage
                    {...this.props}
                    actionPage={'oneDoc'}
                />}
            </View>
        );
    },
    renderRow: function (rowData, sectionID, rowID) {
        let type = this.oneDocApiList[rowID].type;
        return (
            <TouchableOpacity onPress={() => this.pressRow(rowData,rowID)}>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={getImageSource(type)}/>
                    <Text style={styles.text}>
                        {rowData}
                    </Text>
                    <Text style={styles.rightArrow}>
                        >
                    </Text>
                </View>
            </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        borderRadius: 3,
        marginRight: 5,
        width: 16,
        height: 16,
    },
    text: {
        flex: 1,
    },
    rightArrow: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
        paddingRight: 10,
    }
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
