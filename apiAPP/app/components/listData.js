'use strict';
import React, {ListView} from 'react-native';

class ListData {
    getDataSource(route) {
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return dataSource.cloneWithRows(this._genRows('1'));
    }

    _genRows(title) {
        var dataBlob = [];
        for (var ii = 0; ii < 10; ii++) {
            var pressedText = title + ii;
            dataBlob.push(pressedText);
        }
        return dataBlob;
    }

    getDataSourceWithSection(searchText) {
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
        return dataSource.cloneWithRowsAndSections(...this._genRowsWithSection(searchText));
    }

    _genRowsWithSection(searchText) {
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


export default new ListData();
