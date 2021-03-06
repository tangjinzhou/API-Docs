import React, {
    Navigator,
    NavigatorIOS,
    StyleSheet,
    Component,
    View,
    Text,
    PixelRatio,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import SettingsPage from './settingsPage';
import StartPage from './startPage';
import DownloadPage from './downloadPage';


export default class Dash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showResultPage, actions } = this.props;
        var containerStyles = showResultPage ? [styles.container, styles.showResultPage] : styles.container;
        return (
            <View style={containerStyles}>
            <Navigator
                style={styles.navContainer}
                initialRoute={{
                    title: 'Docsets',
                    name: "home",
                    index: 0,
                    component: StartPage,
                    params: {
                        level: 0
                    }
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component) {
                        return <Component route={route} {...this.props} navigator={navigator} />
                    }
                }}
                configureScene={(route) => {
                    if(route.configureScene) {
                        return route.configureScene;
                    }
                    return Navigator.SceneConfigs.FloatFromRight
                }}
                navigationBar={<Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                    />
                 }
            />

            </View>
        );
    }
}

var NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {

        if (index === 0) {
            return (
                <TouchableOpacity
                    onPress={() => navigator.push({
                        name: 'Download',
                        title: 'Download',
                        leftTitle: 'Done',
                        component: DownloadPage,
                        configureScene: Navigator.SceneConfigs.FloatFromBottom
                        }
                    )}
                    style={styles.navBarButton}>
                    <Text style={[styles.navBarText, styles.navBarButtonText]}>
                        {"Download"}
                    </Text>
                </TouchableOpacity>
            );
        }

        var previousRoute = navState.routeStack[index - 1];
        var title = route.leftTitle || route.title;

        return (
            <TouchableOpacity
                onPress={function(){
                    if(route.passProps && route.passProps.popCallback){
                        route.passProps.popCallback()
                    };
                    navigator.pop();}
                }
                style={styles.navBarButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function (route, navigator, index, navState) {
        /*if (index === 0) {
            return (
                <TouchableOpacity
                    onPress={() => navigator.pop()}
                    style={styles.navBarButton}>
                    <Text style={[styles.navBarText, styles.navBarButtonText, styles.navBarRightButton]}>
                        {"Edit"}
                    </Text>
                </TouchableOpacity>
            );
         }*/

    },

    Title: function (route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]} numberOfLines={1}>
                {route.title}
            </Text>
        );
    },

};
var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
    },

    navContainer: {
        justifyContent: 'space-between',
    },
    showResultPage: {
        //position: 'relative',
        //top: -65,
        //height: Dimensions.get('window').height + 65,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1.5 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    navBarButtonText: {
        color: '#57B9A3',
        fontSize: 17,
        fontWeight: '400',
    },
    navBar: {
        //height: 0,
        backgroundColor: 'white',
        borderBottomWidth: 1.5 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    navBarText: {
        flex: 1,
        fontSize: 16,
        marginVertical: 10,
        //height: 0,
    },
    navBarButton: {
        //height: 0,
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarTitleText: {
        fontWeight: '500',
        overflow: "hidden",
        textAlign: "center",
        fontFamily: 'helvetica neue'
    },
});



