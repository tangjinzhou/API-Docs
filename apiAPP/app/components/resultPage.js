'use strict';

import React, { Component,View,StyleSheet,PixelRatio,Dimensions,ListView,Navigator} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import CommonList from './commonList';
import SearchText from './searchText';
import listData from './listData';
import ApiInfo from './apiInfo';
import RNFS from 'react-native-fs';
var TimerMixin = require('react-timer-mixin');
var NavbarWrapper = require('./navbar');

const DocumentDirectoryPath = RNFS.DocumentDirectoryPath;

class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchIndexList: []
        }
    }

    updateState(res) {
        this.setState({searchIndexList: res})
    }
    render() {
        var {route, state, actions, actionPage, navigator} = this.props;
        var dataSource = listData.getDataSource(route, this.state.searchIndexList);
        this.docPath = 'docset/jQuery/Contents/Resources/';
        this.navigator = navigator;
        var listContainerStyles = {};
        if (dataSource.getRowCount() > 0) {
            listContainerStyles.opacity = 1;
            listContainerStyles.backgroundColor = '#EAEAEA';
        }
        return (
            <View style={styles.container}>
                <SearchText {...this.props} updateState={this.updateState.bind(this)} style={styles.searchText}
                                            autoFocus={true} actionPage={actionPage}/>
                <View style={[styles.listContainer,listContainerStyles]}>
                    <CommonList
                        {...this.props}
                        dataSource={dataSource}
                        hideSection={true}
                        pressRow={this.pressRow.bind(this)}
                    />
                </View>
            </View>
        );
    }


    pressRow(rowData, rowId) {
        var NavComponent = ApiInfo;
        var leftTitle = '<...';
        var docName = this.state.searchIndexList[rowId].docName;
        var docPath = 'docset/' + docName + '/' + docName + '.docset/Contents/Resources/';
        var apiPath = DocumentDirectoryPath + '/' + docPath + 'Documents/' + this.state.searchIndexList[rowId].path;

        this.navigator.push({
            title: rowData,
            leftTitle: leftTitle,
            component: NavComponent,
            passProps: {apiPath: apiPath}
        })
    }
}

var styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#000',
        overflow: 'hidden',
        opacity: 0.2,
    },
    searchText: {
        //paddingTop: 95,
    },
});

export default ResultPage;


