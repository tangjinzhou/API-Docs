import React, {
    Alert,
    NavigatorIOS,
    StyleSheet,
    Component,
    View,
    ListView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    RecyclerViewBackedScrollView
} from 'react-native';

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
});

var CommonList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([]),
        };
    },
    render: function () {
        console.log(this.props);
        //this._genRows(this.props.searchText);
        var dataSource = this.props.dataSource || this.state.dataSource;
        return (
            <View style={styles.container}>
                <ListView
                    automaticallyAdjustContentInsets={false}
                    dataSource={dataSource}
                    renderRow={this._renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    initialListSize={10}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                    renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                />
            </View>
        );
    },
    renderSectionHeader: function (sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text style={styles.text}>
                    {sectionData}
                </Text>
            </View>
        );
    },

    _pressRow: function (rowID) {
        Alert.alert(
            'Alert Title',
            rowID
        )
    },
    _renderRow: function (rowData, sectionID, rowID) {
        return (
            <TouchableHighlight onPress={()=>this._pressRow(rowID)}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }


});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    text: {
        flex: 1,
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 6,
        backgroundColor: '#5890ff',
    },
});


export default CommonList;
