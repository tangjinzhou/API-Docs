'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Navigator,
    Animated
} from 'react-native';

import CommonList from './commonList';
import SearchText from './searchText';
import SearchAPiPage from './searchApiPage';


class MyDocs extends Component {
    constructor(props) {
        super(props);
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

    render() {
        var dataSource = this.getDataSource(this.props.searchText);
        var {navigator, showResultPage} = this.props;
        return (
            <View>
                <TouchableHighlight
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
                </TouchableHighlight>
                <CommonList
                    {...this.props}
                    dataSource={dataSource}
                />
            </View>
        );
    }

    showSearchApiPage(navigator) {
        this.props.dispatchShowResultPage();
    }

    _genRows(searchText) {
        var dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];
        for (var ii = 0; ii < 1; ii++) {
            var sectionName = 'Section ' + ii;
            sectionIDs.push(sectionName);
            dataBlob[sectionName] = sectionName;
            rowIDs[ii] = [];

            for (var jj = 0; jj < 1; jj++) {
                var rowName = searchText + ii + ', R' + jj;
                rowIDs[ii].push(rowName);
                dataBlob[rowName] = rowName;
            }
        }
        return [dataBlob, sectionIDs, rowIDs];
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
