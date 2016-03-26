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
import ResultPage from '../components/resultPage';
var TimerMixin = require('react-timer-mixin');

const DocumentDirectoryPath = RNFS.DocumentDirectoryPath;
import config from '../config';
const GET_DOCSETS_URL = config.SERVERBASEURL + 'docsets';

var DocSets = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function () {
        return {docSetsList: []};
    },
    componentDidMount: function () {
        var _this = this;
        fetch(GET_DOCSETS_URL)
            .then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
                _this.setState({docSetsList: JSON.parse(responseText).data});
            })
            .catch((error) => {
                console.warn(error);
            });
    },

    render: function () {
        var {state,actions, navigator, route} = this.props;
        var dataSource = listData.getDataSource(route, this.state.docSetsList);
        return (
            <View style={styles.container}>
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

    }

})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65,
    }
});

export default DocSets;

