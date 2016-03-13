var React = require('react-native');
var {
    Image,
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight
    } = React;

var Router = require('react-native-custom-navigation');
var NavbarWrapper = require('./navbar');

import SettingsPage from './settingsPage';
import StartPage from './startPage';
var screen = require('Dimensions').get('window');

var RootController = React.createClass({

    render() {
        return (
            <Router
                navbarComponent={NavbarWrapper}
                navbarPassProps={{leftTitle: 'Settings', rightTitle: 'Edit',title: 'Docsets'}}
                statusBarColor={'black'}
                initialRoute={{
                    component: StartPage,
                    passProps: this.props,
                }}
            />);
    }
});


var styles = StyleSheet.create({
    container: {
        width: screen.width,
        height: screen.height,
    },

    buttonView: {
        justifyContent: 'center',
        padding: 4,
        width: 180,
        height: 60,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 4
    },

    button: {
        marginBottom: 40
    },

    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)'
    },

    image: {
        alignItems: 'center',
        width: screen.width,
        height: screen.height * 1.5,
    },
});

module.exports = RootController;