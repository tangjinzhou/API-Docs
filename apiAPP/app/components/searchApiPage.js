'use strict';

import React, { Component,View,StyleSheet} from 'react-native';
import CommonList from './commonList';
import SearchText from './searchText';
import ApiInfo from './apiInfo';


class searchApiPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <SearchText {...this.props} style={styles.searchTextInput}/>
                <CommonList
                    {...this.props}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchTextInput: {
        height: 30,
    },
});

export default searchApiPage;
