import React, {
    StyleSheet,
    Component,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as types from '../actions/actionTypes';
import queryDB from './queryDB';
var TimerMixin = require('react-timer-mixin');

var SearchText = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function () {
        this.state = {searchText: ''};
        return {searchText: ''}
    },
    componentDidMount: function () {

    },
    searchIndexChange: function (text) {
        var _this = this;
        queryDB.getSearchIndex(text, this.props.route.title).then(function (res) {
            _this.props.updateState(res);
        });
        this.setState({searchText: text});
    },
    render: function () {
        var {actions, editable,autoFocus} = this.props;
        var editable = editable === false ? false : true;
        return (
            <View style={[styles.searchRow,this.props.style]}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    onChangeText={this.searchIndexChange}
                    placeholder="Search..."
                    style={styles.searchTextInput}
                    value={this.state.searchText}
                    editable={editable}
                    autoFocus={autoFocus || false}
                />
                {editable &&
                <TouchableOpacity onPress={()=>actions.dispatchHideResultPage({page:this.props.actionPage})}>
                    <Text style={styles.cancelBtn}>取消</Text>
                </TouchableOpacity>}
            </View>
        );
    }
});

var styles = StyleSheet.create({
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

export default SearchText;
