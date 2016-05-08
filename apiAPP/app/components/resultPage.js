'use strict';

import React, { Component,View,StyleSheet,PixelRatio,Dimensions,ListView,Navigator,TouchableOpacity,Text,Image} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import CommonList from './commonList';
import SearchText from './searchText';
import listData from './listData';
import ApiInfo from './apiInfo';
import RNFS from 'react-native-fs';
var TimerMixin = require('react-timer-mixin');
var NavbarWrapper = require('./navbar');
import getImageSource from '../imageSource';
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
        var {route, state, actions, actionPage, navigator, hideSection} = this.props;
        var dataSource = listData.getDataSourceWithSection(route, this.state.searchIndexList);
        this.navigator = navigator;
        var listContainerStyles = {};
        if (dataSource.getRowCount() > 0) {
            listContainerStyles.opacity = 1;
            listContainerStyles.backgroundColor = '#EAEAEA';
        }
        hideSection = hideSection === undefined ? true : false;
        return (
            <View style={styles.container}>
                <SearchText {...this.props} updateState={this.updateState.bind(this)} style={styles.searchText}
                                            autoFocus={true} actionPage={actionPage}/>
                <View style={[styles.listContainer,listContainerStyles]}>
                    <CommonList
                        {...this.props}
                        dataSource={dataSource}
                        hideSection={hideSection}
                        //pressRow={this.pressRow.bind(this)}
                        renderRow={this.renderRow.bind(this)}
                    />
                </View>
            </View>
        );
    }

    renderRow(rowData, sectionID, rowID) {
        let type = this.state.searchIndexList[rowID].type;
        var imgSource = getImageSource(sectionID);
        return (
            <TouchableOpacity onPress={() => this.pressRow(rowData,rowID)}>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={imgSource}/>
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

export default ResultPage;


