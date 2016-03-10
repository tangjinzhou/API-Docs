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

class MyDocs extends Component {
    constructor(props) {
        super(props);
        //this.mixins = [TimerMixin];
        this.state = {
            myDocsNameList: []
        }
    }

    componentDidMount() {
        var _this = this;
        queryDB.getMyDocsNameList(this.props).then(function (res) {
            _this.setState({myDocsNameList: res});
        });
    }

    render() {
        var {navigator, showResultPage,route} = this.props;
        this.myDocsNameList = this.state.myDocsNameList;
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

    pressRow(rowData, rowId) {
        var NavComponent = OneDoc;
        var leftTitle = this.title;
        var docPath = this.myDocsNameList[rowId].docPath;
        this.navigator.push({
            name: rowData,
            title: rowData,
            leftTitle: leftTitle,
            component: NavComponent,
            params: {
                docPath: docPath
            },
            configureScene: Navigator.SceneConfigs.FloatFromRight
        })

    }

    showSearchApiPage(navigator) {
        this.props.dispatchShowResultPage();
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchText: {
        paddingTop: 30,
    },
});

export default MyDocs;
