'use strict';

import React, { Component,View,StyleSheet,PixelRatio,Dimensions,ListView} from 'react-native';
import CommonList from './commonList';
import SearchText from './searchText';


class ResultPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var dataSource = this.getDataSource(this.props.searchText);
        console.log(dataSource.getRowCount());
        var listContainerStyles = {};
        if (dataSource.getRowCount() > 0) {
            listContainerStyles.opacity = 1;
            listContainerStyles.backgroundColor = '#EAEAEA';
        }
        return (
            <View style={styles.container}>
                <SearchText {...this.props} style={styles.searchText} autoFocus={true}/>
                <View style={[styles.listContainer,listContainerStyles]}>
                    <CommonList
                        {...this.props}
                        dataSource={dataSource}
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
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    listContainer: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.2,
        height: Dimensions.get('window').height,
    },
    searchText: {
        paddingTop: 30,
    },
});

export default ResultPage;
