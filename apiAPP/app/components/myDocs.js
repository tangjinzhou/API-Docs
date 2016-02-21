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
import ApiInfo from './apiInfo';
import listData from './listData';

class MyDocs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {navigator, showResultPage,route} = this.props;
        var dataSource = listData.getDataSource(route);
        this.level = route.params.level;
        this.navigator = navigator;
        this.title = route.title;
        console.log(this.level);
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
                    pressRow={this.pressRow.bind(this)}
                />
            </View>
        );
    }

    pressRow(rowData, rowId) {
        var NavComponent = MyDocs;
        var leftTitle = this.title;
        if (this.level == 2) {
            NavComponent = ApiInfo;
            leftTitle = '<...'
        }
        this.navigator.push({
            name: rowData,
            title: rowData,
            leftTitle: leftTitle,
            component: NavComponent,
            params: {
                level: ++this.level
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
