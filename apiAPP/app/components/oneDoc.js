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

import CommonList from './commonList';
import SearchText from './searchText';
import SearchAPiPage from './searchApiPage';
import ApiInfo from './apiInfo';
import listData from './listData';
import queryDB from './queryDB';
import RNFS from 'react-native-fs';
var TimerMixin = require('react-timer-mixin');

const DocumentDirectoryPath = RNFS.DocumentDirectoryPath;

var OneDoc = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function () {
        return {oneDocApiList: []};
    },
    componentDidMount: function () {
        var _this = this;
        this.setTimeout(function () {
            queryDB.getOneDocApiList(this.props).then(function (res) {
                _this.setState({oneDocApiList: res});
            });
        }, 0)
    },

    render: function () {
        var {navigator, showResultPage,route} = this.props;
        this.oneDocApiList = this.state.oneDocApiList;
        var dataSource = listData.getDataSource(route, this.oneDocApiList);
        this.navigator = navigator;
        this.title = route.title;
        this.docPath = route.params.docPath;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.showSearchApiPage(navigator)}
                >
                    <View>
                        {showResultPage && <SearchText
                            editable={false}
                            style={styles.searchText}
                        />}
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
            </View>
        );
    },

    pressRow: function (rowData, rowId) {
        var NavComponent = ApiInfo;
        var leftTitle = '<...';
        console.log(this.docPath);
        var apiPath = DocumentDirectoryPath + '/' + this.docPath + 'Documents/' + this.oneDocApiList[rowId].path;
        this.navigator.push({
            name: rowData,
            title: rowData,
            leftTitle: leftTitle,
            component: NavComponent,
            params: {
                apiPath: apiPath
            },
            configureScene: Navigator.SceneConfigs.FloatFromRight
        })

    },

    showSearchApiPage: function (navigator) {
        this.props.dispatchShowResultPage();
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
