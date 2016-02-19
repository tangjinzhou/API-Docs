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


class MyDocs extends Component {
    constructor(props) {
        super(props);
    }

    getDataSource(searchText) {
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return dataSource.cloneWithRows(this._genRows());
    }

    render() {
        var dataSource = this.getDataSource(this.props.searchText);
        var {navigator, showResultPage} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
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
                </TouchableOpacity>
                <CommonList
                    {...this.props}
                    dataSource={dataSource}
                    hideSection={true}
                />
            </View>
        );
    }

    showSearchApiPage(navigator) {
        this.props.dispatchShowResultPage();
    }

    _genRows() {
        var dataBlob = [];
        for (var ii = 0; ii < 100; ii++) {
            var pressedText = 'hello' + ii;
            dataBlob.push('Row ' + ii + pressedText);
        }
        return dataBlob;
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
