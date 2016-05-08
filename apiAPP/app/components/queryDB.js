'use strict';
import React, {
    Alert
} from 'react-native';
import RNFS from 'react-native-fs';
import SQLite from 'react-native-sqlite-storage';

var errorCB = err => {
    console.log("SQL Error: " + err);
};

var successCB = () => {
    console.log("SQL executed fine");
};

function openCB() {
    console.log("Database OPENED");
};
//var db = SQLite.openDatabase("docset/jQuery/Contents/Resources/docSet.dsidx", openCB, errorCB);
//var db = SQLite.openDatabase({name:"docSet.dsidx",createFromLocation: 1}, openCB, errorCB);
class QueryDB {
    createMainIndex(docName) {
        var dbName = 'docset/' + docName + '/' + docName + '.docset/Contents/Resources/docSet.dsidx';
        return new Promise(function (resolve, reject) {
            var db = SQLite.openDatabase(dbName, openCB, errorCB);
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM searchIndex', [], (tx, results) => {
                    resolve(results.rows);
                }, function (error) {
                });
            }, function (err) {
            })
        }).then(function (res) {
            var mainDB = SQLite.openDatabase("mainIndex.dsidx", openCB, errorCB);
            mainDB.transaction((tx) => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS searchIndex (id integer primary key, name text,type text, path text, docName text)', [], function () {
                }, function () {
                });
                var sql = 'INSERT INTO searchIndex (name,type, path, docName) values';
                var values = [];
                for (let i = 0, len = res.length; i < len; i++) {
                    let item = res.item(i);
                    values.push('("' + item.name + '","' + item.type + '","' + item.path + '","' + docName + '")');
                }
                sql += values.join(',');
                tx.executeSql(sql, [], (tx, results) => {
                    Promise.resolve();
                });
            });
        })
    }

    getSearchIndex(searchText, docName) {
        var dbName = 'docset/' + docName + '/' + docName + '.docset/Contents/Resources/docSet.dsidx';
        if (docName) {
            dbName = 'docset/' + docName + '/' + docName + '.docset/Contents/Resources/docSet.dsidx';
        } else {
            dbName = 'mainIndex.dsidx';
        }
        var db = SQLite.openDatabase(dbName, openCB, errorCB);
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
                            row.docName = row.docName || docName;
                            res.push(row);
                        }
                        resolve(res);
                    });
                });
            })
        }
    }

    getOneDocApiList(docPath) {
        //console.log(props);
        //var docPath = props.route.passProps.docPath;
        var db = SQLite.openDatabase(docPath + 'docSet.dsidx', openCB, errorCB);
        //var db = SQLite.openDatabase({name:"docSet.dsidx",createFromLocation: 1}, openCB, errorCB);
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

    getMyDocsNameList() {
        var db = SQLite.openDatabase("myDocs.dsidx", openCB, errorCB);
        return new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS myDocs (name text primary key, docPath text)', [], function () {
                }, function () {
                });
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

    addMyDocs(name, docPath) {
        docPath = docPath || 'docset/' + name + '/' + name + '.docset/Contents/Resources/';
        var db = SQLite.openDatabase("myDocs.dsidx", openCB, errorCB);
        return new Promise(function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql('INSERT OR REPLACE INTO myDocs (name, docPath) VALUES (?,?)', [name, docPath], (tx, results)=> {
                    resolve();
                });
            })
        })
    }
}

export default new QueryDB();
