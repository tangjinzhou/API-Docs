'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    } = React;

var screen = require('Dimensions').get('window');

import SettingsPage from './settingsPage';

var NavbarContent = React.createClass({
    render() {
        var leftTitle = this.props.leftTitle || '返回';
        var rightTitle = this.props.rightTitle || false;
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={[styles.corner, styles.leftCorner]}>
                    <TouchableHighlight onPress={this.props.leftFunc} underlayColor="transparent">
                        <View style={styles.backView}>
                            <Text style={styles.buttonText}>{leftTitle}</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                {rightTitle && <View style={[styles.corner, styles.rightCorner]}>
                    <TouchableHighlight onPress={this.props.rightFunc} underlayColor="transparent">
                        <View style={styles.backView}>
                            <Text style={styles.buttonText}>{rightTitle}</Text>
                        </View>
                    </TouchableHighlight>
                </View>}

                <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
        )
    },
});

var NavbarWrapper = React.createClass({
    getInitialState() {
        return {};
    },

    componentWillMount() {
        this.setState({
            style: this.props.style
        });
    },

    componentWillReceiveProps(newProps) {
        if (newProps.style !== this.props.style) {
            this.setState({
                style: newProps.style
            });
        }
    },

    render() {
        return (
            <NavbarContent
                {...this.props}
                rightFunc={this.rightFunc}
                leftFunc={this.leftFunc}
                style={this.state.style}/>);
    },
    leftFunc() {
        if (this.props.leftTitle == 'Settings') {
            this.props.route.push({
                component: SettingsPage,
                navbarComponent: NavbarWrapper,
            });
        } else {
            this.props.route.pop();
        }
    },
    rightFunc() {

    },
    _push() {

        //this.props.route.push({
        //    component: SettingsPage,
        //    navbarComponent: NavbarWrapper,
        //});
    },
});

var styles = StyleSheet.create({
    container: {
        width: screen.width,
        height: 64,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

    titleText: {
        position: 'relative',
        top: 10,
        fontSize: 18,
        color: '#222',
        textAlign: 'center',
        alignSelf: 'center',
    },

    buttonText: {
        fontSize: 14,
        color: '#3CAF6A',
        textAlign: 'center',
    },

    corner: {
        top: 20,
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',

    },

    leftCorner: {
        left: 10,
    },

    rightCorner: {
        right: 10,
    },

    backView: {
        height: 44,
        justifyContent: 'center',
    }
});

module.exports = NavbarWrapper;