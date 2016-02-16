'use strict';

import React, { Component,View,StyleSheet,PixelRatio,Dimensions} from 'react-native';
import CommonList from './commonList';
import SearchText from './searchText';


class ResultPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchText {...this.props} style={styles.searchText}/>
                <View style={styles.listContainer}>
                    <CommonList
                        {...this.props}
                    />
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
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
