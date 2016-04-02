'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    TouchableOpacity,
    Navigator,
    WebView
} from 'react-native';

//import WebViewBridge from 'react-native-webview-bridge';

class ApiInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {navigator, route} = this.props;
        var apiPath = route.passProps.apiPath;
        console.log(apiPath);
        //apiPath = encodeURIComponent(apiPath);
        return (
            <View style={styles.container}>
                <WebView
                    ref='webview'
                    automaticallyAdjustContentInsets={false}
                    source={{uri:apiPath}}
                    javaScriptEnabled={true}
                    startInLoadingState={true}
                    style={styles.webView}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62
    },
    webView: {}

});

export default ApiInfo;
