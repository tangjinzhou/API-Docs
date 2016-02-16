import React, {
    Navigator,
    NavigatorIOS,
    StyleSheet,
    Component,
    View,
    Text,
    PixelRatio,
    TouchableOpacity
} from 'react-native';

import SettingsPage from './settingsPage';
import StartPage from './startPage';


export default class Dash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                style={styles.navContainer}
                initialRoute={{
                    title: 'API Docs',
                    name: "home",
                    index: 0,
                    component: StartPage,
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component) {
                        //这里有个 { ...route.params }
                        return <Component {...this.props} navigator={navigator} />
                    }
                }}
                configureScene={(route) => {
                    if(route.configureScene) {
                        return route.configureScene;
                    }
                    return Navigator.SceneConfigs.FloatFromRight
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                    />
                }
            />
        );
    }
}

var NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        if (index === 0) {
            return (
                <TouchableOpacity
                    onPress={() => navigator.push({
                    name: 'Setting',
                    title: 'Setting',
                    leftTitle: 'Done',
                    component: SettingsPage,
                    configureScene: Navigator.SceneConfigs.FloatFromBottom
                })}
                    style={styles.navBarLeftButton}>
                    <Text style={[styles.navBarText, styles.navBarButtonText]}>
                        {"Setting"}
                    </Text>
                </TouchableOpacity>
            );
        }

        var previousRoute = navState.routeStack[index - 1];
        var title = route.leftTitle || route.title;
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function (route, navigator, index, navState) {
        if (index === 0) {
            return (
                <TouchableOpacity
                    onPress={() => navigator.pop()}
                    style={styles.navBarLeftButton}>
                    <Text style={[styles.navBarText, styles.navBarButtonText, styles.navBarRightButton]}>
                        {"Edit"}
                    </Text>
                </TouchableOpacity>
            );
        }

    },

    Title: function (route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText, styles.navBarTitleText ]}>
                {route.title}
            </Text>
        );
    },

};

var styles = StyleSheet.create({
    navContainer: {
        flex: 1,
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    navBarButtonText: {
        color: '#57B9A3',
        fontSize: 17,
        fontWeight: '400',
    },
    navBar: {
        backgroundColor: 'white',
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarTitleText: {
        fontWeight: '500',
        marginVertical: 9,
        width: 200,
        height: 20,
        overflow: "hidden",
        textAlign: "center",
        fontFamily: 'helvetica neue'
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
    },
});



