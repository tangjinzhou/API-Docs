'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity,
    Navigator,
    Image,
    Text,
    Easing,
    Animated
} from 'react-native';

import CommonList from './commonList';
import SearchText from './searchText';
import SearchAPiPage from './searchApiPage';
import ApiInfo from './apiInfo';
import queryDB from './queryDB';
import RNFS from 'react-native-fs';
import ResultPage from '../components/resultPage';
import getImageSource from '../imageSource';
var TimerMixin = require('react-timer-mixin');

const DocumentDirectoryPath = RNFS.DocumentDirectoryPath;
import config from '../config';
const GET_DOCSETS_URL = config.SERVERBASEURL + 'docsets';

var DocSets = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function () {
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return {docSetsList: []};
    },
    componentDidMount: function () {
        var _this = this;
        fetch(GET_DOCSETS_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                var data = responseJson.data;
                for (var i = 0; i < data.length; i++) {
                    data[i].download = 0;
                }
                _this.setState({docSetsList: data});
            })
            .catch((error) => {
                console.warn(error);
            });


    },

    render: function () {
        var {state,actions, navigator, route} = this.props;
        var dataSource = this.ds.cloneWithRows(this._genRows(this.state.docSetsList));
        return (
            <View style={styles.container}>
                <CommonList
                    {...this.props}
                    dataSource={dataSource}
                    hideSection={true}
                    pressRow={this.pressRow}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },
    _genRows(searchIndexRes) {
        var dataBlob = [];
        var len = searchIndexRes.length;
        for (var ii = 0; ii < len; ii++) {
            var pressedText = ii;
            dataBlob.push(searchIndexRes[ii].name);
        }
        return dataBlob;
    },

    renderRow: function (rowData, sectionID, rowID) {
        console.log(rowID);
        var docset = this.state.docSetsList[rowID];
        var icon = '../Resources/' + docset.icon;
        var imgSource = getImageSource(docset.icon);
        var rowRight = <TouchableOpacity onPress={() => this.pressRow(rowData,rowID)}>
            <Image style={[styles.thumb]} source={getImageSource('download.png')}/>
        </TouchableOpacity>;
        if (docset.download == 1) {
            rowRight = <Image style={[styles.thumb]} source={getImageSource('done.png')}/>;
        } else if (docset.download == 2) {
            rowRight = <Text style={styles.rightArrow}>
                {docset.percent}
            </Text>
            //var startValue = new Animated.Value(0);
            //rowRight = <Animated.Image
            //    source={getImageSource('downloading.png')}
            //    style={[styles.thumb,{
            //          transform: [
            //            {rotate: startValue.interpolate({
            //                inputRange: [0,1],
            //                outputRange: ['0deg', '360deg']
            //            })},
            //          ]}
            //    ]}
            ///>;
            //var startAnimation = function(){
            //    startValue.setValue(0);
            //    Animated.timing(startValue, {
            //        toValue: 1, // 目标值
            //        duration: 800,
            //        easing: Easing.linear
            //    }).start(() => startAnimation());
            //}
            //startAnimation();
        }
        return (
            <View style={styles.row}>
                <Image style={styles.thumb} source={imgSource}/>
                <Text style={styles.text}>
                    {rowData}
                </Text>
                {rowRight}
            </View>
        );
    },

    pressRow: function (rowData, rowID) {
        console.log(rowData, rowID);
        this.state.docSetsList[rowID].download = 2; //2:下载中 1:已下载 0:未下载
        this.state.docSetsList[rowID].percent = '0%'; //2:下载中 1:已下载 0:未下载
        this.setState({docSetsList: this.state.docSetsList});
        var downloadurl = config.SERVERBASEURL + this.state.docSetsList[rowID].path;
        var _this = this;
        RNFS.mkdir(DocumentDirectoryPath + '/docset/').then(function (res) {
            if (res[0]) {
                RNFS.downloadFile(downloadurl, res[1] + _this.state.docSetsList[rowID].name + '.zip', function () {
                }, function (res) {
                    _this.state.docSetsList[rowID].percent = parseInt(res.bytesWritten / res.contentLength * 100, 10) + '%'; //2:下载中 1:已下载 0:未下载
                    _this.setState({docSetsList: _this.state.docSetsList});
                })
            }
        })
    }

})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65,
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
    },
});

export default DocSets;
