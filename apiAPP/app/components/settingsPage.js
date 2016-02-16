import React, {
    NavigatorIOS,
    StyleSheet,
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class SettingsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.emptyPage}>
                <Text style={styles.emptyPageText}>
                    hello
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    customWrapperStyle: {
        backgroundColor: '#bbdddd',
    },
    emptyPage: {
        flex: 1,
        paddingTop: 64,
    },
    emptyPageText: {
        margin: 10,
    },
    list: {
        backgroundColor: '#eeeeee',
        marginTop: 10,
    },
    group: {
        backgroundColor: 'white',
    },
    groupSpace: {
        height: 15,
    },
    line: {
        backgroundColor: '#bbbbbb',
    },
    row: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    separator: {
        backgroundColor: '#bbbbbb',
        marginLeft: 15,
    },
    rowNote: {
        fontSize: 17,
    },
    rowText: {
        fontSize: 17,
        fontWeight: '500',
    },
});
