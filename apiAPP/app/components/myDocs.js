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
import ApiInfo from './apiInfo';
import OneDoc from './oneDoc';
import listData from './listData';
import queryDB from './queryDB';
var TimerMixin = require('react-timer-mixin');
var NavbarWrapper = require('./navbar');

class MyDocs extends Component {
    constructor(props) {
        super(props);
        queryDB.getMyDocsNameList().then(function (res) {
            props.actions.dispatchMydocsUpdate({page: 'startPage', value: res});
        });
        this.state = {
            myDocsNameList: props.state.myDocsNameList || [],
        }
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.state.myDocsNameList != nextProps.state.myDocsNameList;
    }
    render() {
        var {navigator, state,route} = this.props;
        var _this = this;
        this.myDocsNameList = state.myDocsNameList;
        var dataSource = listData.getDataSource(route, this.myDocsNameList);
        this.navigator = navigator;
        this.title = route.title;

        return (
            <View style={styles.container}>
                <CommonList
                    {...this.props}
                    dataSource={dataSource}
                    hideSection={true}
                    pressRow={this.pressRow.bind(this)}
                />
            </View>
        );
    }

    popCallback() {
        this.props.actions.dispatchHideResultPage({page: 'oneDoc'});
    }
    pressRow(rowData, rowId) {
        var NavComponent = OneDoc;
        var leftTitle = this.title;
        var docPath = this.myDocsNameList[rowId].docPath;

        var _this = this;
        queryDB.getOneDocApiList(docPath).then(function (res) {
            //_this.setState(Object.assign(_this.state, {oneDocApiList: res}));
            _this.navigator.push({
                title: rowData,
                leftTitle: 'Docsets',
                component: NavComponent,
                navbarPassProps: {leftTitle: 'Docsets', title: rowData},
                passProps: {
                    docPath: docPath,
                    docName: rowData,
                    oneDocApiList: res,
                    popCallback: _this.popCallback.bind(_this)
                }
            })
        });

    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MyDocs;
