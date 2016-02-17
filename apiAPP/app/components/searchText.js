import React, {
    StyleSheet,
    Component,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as types from '../actions/actionTypes';

export default class SearchText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {dispatchSearchTextChange,dispatchHideResultPage, searchText, editable,autoFocus} = this.props;
        var editable = editable === false ? false : true;
        return (
            <View style={[styles.searchRow,this.props.style]}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    onChangeText={dispatchSearchTextChange}
                    placeholder="Search..."
                    style={styles.searchTextInput}
                    value={searchText}
                    editable={editable}
                    onBlur={dispatchHideResultPage}
                    autoFocus={autoFocus || false}
                />
                {editable && <TouchableOpacity onPress={dispatchHideResultPage}>
                    <Text style={styles.cancelBtn}>取消</Text>
                </TouchableOpacity>}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
    list: {
        backgroundColor: '#eeeeee',
    },
    sectionHeader: {
        padding: 5,
        fontWeight: '500',
        fontSize: 11,
    },
    group: {
        backgroundColor: 'white',
    },
    row: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bbbbbb',
        marginLeft: 15,
    },
    rowTitleText: {
        fontSize: 17,
        fontWeight: '500',
    },
    rowDetailText: {
        fontSize: 15,
        color: '#888888',
        lineHeight: 20,
    },
    searchRow: {
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        paddingTop: 75,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    searchTextInput: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: '#cccccc',
        borderRadius: 3,
        borderWidth: 1,
        paddingLeft: 8,
        height: 30,
    },
    cancelBtn: {
        color: '#57B9A3',
        fontSize: 17,
        fontWeight: '400',
        paddingTop: 5,
        paddingLeft: 10,
    }
});
