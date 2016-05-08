'use strict';
import React, {ListView} from 'react-native';

class ListData {
    getDataSource(route, searchIndexRes = []) {
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return dataSource.cloneWithRows(this._genRows(searchIndexRes));
    }

    _genRows(searchIndexRes) {
        var dataBlob = [];
        var len = searchIndexRes.length;
        for (var ii = 0; ii < len; ii++) {
            var pressedText = ii;
            dataBlob.push(searchIndexRes[ii].name);
        }
        return dataBlob;
    }

    getDataSourceWithSection(route, searchIndexRes = []) {
        var getSectionData = (dataBlob, sectionID) => {
            return sectionID;
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
        return dataSource.cloneWithRowsAndSections(...this._genRowsWithSection(searchIndexRes));
    }

    _genRowsWithSection(searchIndexRes) {
        var dataBlob = [];
        var sectionIDs = [];
        var rowIDs = [];
        var len = searchIndexRes.length;
        for (var ii = 0; ii < len; ii++) {
            var pressedText = ii;
            var docName = searchIndexRes[ii].docName;
            var rowId = sectionIDs.length - 1;
            if (sectionIDs.indexOf(docName) === -1) {
                sectionIDs.push(docName);
                rowId = sectionIDs.length - 1;
                rowIDs[rowId] = [];
            }
            dataBlob.push(searchIndexRes[ii].name);
            rowIDs[rowId].push(ii);
        }
        return [dataBlob, sectionIDs, rowIDs];
    }
}


export default new ListData();
