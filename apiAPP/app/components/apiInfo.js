'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    TouchableOpacity,
    Navigator,
    WebView
} from 'react-native';

class ApiInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {navigator} = this.props;
        var url = 'http://www.sogou.com';
        return (
            <View style={styles.container}>
                <WebView
                    ref='webview'
                    automaticallyAdjustContentInsets={false}
                    url={url}
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
