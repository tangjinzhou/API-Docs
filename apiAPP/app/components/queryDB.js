'use strict';
import RNFS from 'react-native-fs';
import SQLite from 'react-native-sqlite-storage';

var errorCB = err => {
    console.log("SQL Error: " + err);
};

var successCB = () => {
    console.log("SQL executed fine");
};

var openCB = ()=> {
    console.log("Database OPENED");
};
var db = SQLite.openDatabase("docset/jQuery/Contents/Resources/docSet.dsidx", openCB, errorCB);
class QueryDB {

    getSearchIndex(props, searchText) {
        var {searchIndex} = props;
        if (searchText.trim() == '') {
            return new Promise(function (resolve, reject) {
                resolve([]);
            })
        } else {
            return new Promise(function (resolve, reject) {
                db.transaction((tx) => {
                    tx.executeSql('SELECT * FROM searchIndex where name like ?', ['%' + searchText + '%'], (tx, results) => {
                        var len = results.rows.length;
                        var res = [];
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            res.push(row);
                        }
                        resolve(res);
                    });
                });
            })
        }
    }

    getOneDocApiList(props) {
        console.log(props);
        var docPath = props.docPath;
        var db = SQLite.openDatabase(docPath + 'docSet.dsidx', openCB, errorCB);
        return new Promise(function (reslove, reject) {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM searchIndex', [], (tx, results) => {
                    var len = results.rows.length;
                    var res = [];
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        res.push(row);
                    }
                    reslove(res);
                });
            });
        })
    }

    getMyDocsNameList(props) {
        var db = SQLite.openDatabase("myDocs.dsidx", openCB, errorCB);
        return new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                //tx.executeSql('CREATE TABLE IF NOT EXISTS myDocs (name text primary key, docPath text)', [], function() {}, function() {});
                //tx.executeSql('INSERT OR REPLACE INTO myDocs (name, docPath) VALUES (?,?)',['jQuery','docset/jQuery/Contents/Resources/']);
                tx.executeSql('SELECT * FROM myDocs', [], (tx, results) => {
                    var len = results.rows.length;
                    var res = [];
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        res.push(row);
                    }
                    resolve(res);
                });
            });
        })

    }
}

export default new QueryDB();
