import React, {
    Alert,
    StyleSheet,
    Component,
    View,
    ListView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    ScrollView,
    Navigator,
    Image,
    Dimensions
} from 'react-native';
import getImageSource from '../imageSource';


var CommonList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([]),
        };
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return this.props.dataSource != nextProps.dataSource;
    },
    render: function () {
        //this._genRows(this.props.searchText);
        var dataSource = this.props.dataSource || this.state.dataSource;
        var hideSection = this.props.hideSection || false;
        this.navigator = this.props.navigator;
        this.pressRow = this.props.pressRow;
        //var renderRow = this.props.renderRow || this._renderRow;
        var listViewProps = {
            automaticallyAdjustContentInsets: true,
            keyboardDismissMode: 'on-drag',
            keyboardShouldPersistTaps: true,
            dataSource: dataSource,
            renderRow: this._renderRow,
            initialListSize: 15,
            pageSize: 15,
            renderScrollComponent: props => <RecyclerViewBackedScrollView {...props} />,
            renderSeparator: (sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
        };
        !hideSection && Object.assign(listViewProps, {renderSectionHeader: this.renderSectionHeader});
        return (
            <ListView style={styles.container}
                {...listViewProps}
            />
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

    _pressRow: function (rowData, rowID) {
        console.log(rowData);
        if (typeof this.pressRow == 'function') {
            this.pressRow(rowData, rowID);
        }
    },
    _renderRow: function (rowData, sectionID, rowID) {
        if (typeof  this.props.renderRow == 'function') {
            return this.props.renderRow(rowData, sectionID, rowID);
        } else {
            var imgSource = getImageSource(rowData + '.png');
            return (
                <TouchableOpacity onPress={() => this._pressRow(rowData,rowID)}>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource}/>
                        <Text style={styles.text}>
                            {rowData}
                        </Text>
                        <Text style={styles.rightArrow}>
                            >
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
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
    thumb: {
        borderRadius: 3,
        marginRight: 5,
        width: 16,
        height: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    text: {
        flex: 1,
    },
    rightArrow: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
        paddingRight: 10,
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
