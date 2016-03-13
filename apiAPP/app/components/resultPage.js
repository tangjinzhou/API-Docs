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
        var {route, state, actions, actionPage} = this.props;
        var dataSource = listData.getDataSource(route, this.state.searchIndexList);
        this.docPath = 'docset/jQuery/Contents/Resources/';
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

    getDataSource(searchText) {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };

        var dataSource = new ListView.DataSource({
            getRowData: getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        return dataSource.cloneWithRowsAndSections(...this._genRows(searchText));
    }

    pressRow(rowData, rowId) {
        var NavComponent = ApiInfo;
        var leftTitle = '<...';
        var apiPath = DocumentDirectoryPath + '/' + this.docPath + 'Documents/' + this.state.searchIndexList[rowId].path;

        this.props.route.push({
            navbarComponent: NavbarWrapper,
            navbarPassProps: {leftTitle: leftTitle, title: rowData},
            component: NavComponent,
            passProps: {apiPath: apiPath}
        })
    }

    _genRows(searchText) {
        var dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];
        if (searchText !== '') {
            for (var ii = 0; ii < 10; ii++) {
                var sectionName = 'Section ' + ii;
                sectionIDs.push(sectionName);
                dataBlob[sectionName] = sectionName;
                rowIDs[ii] = [];

                for (var jj = 0; jj < 4; jj++) {
                    var rowName = searchText + ii + ', R' + jj;
                    rowIDs[ii].push(rowName);
                    dataBlob[rowName] = rowName;
                }
            }
        }

        return [dataBlob, sectionIDs, rowIDs];
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


