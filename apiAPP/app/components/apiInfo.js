'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    TouchableOpacity,
    Navigator,
    WebView
} from 'react-native';

import WebViewBridge from 'react-native-webview-bridge';

const injectScript = `
  function webViewBridgeReady(cb) {
    //checks whether WebViewBirdge exists in global scope.
    if (window.WebViewBridge) {
      cb(window.WebViewBridge);
      return;
    }

    function handler() {
      //remove the handler from listener since we don't need it anymore
      document.removeEventListener('WebViewBridge', handler, false);
      //pass the WebViewBridge object to the callback
      cb(window.WebViewBridge);
    }

    //if WebViewBridge doesn't exist in global scope attach itself to document
    //event system. Once the code is being injected by extension, the handler will
    //be called.
    document.addEventListener('WebViewBridge', handler, false);
  }

  webViewBridgeReady(function (webViewBridge) {
    webViewBridge.onMessage = function (message) {
      location.href = message;
      webViewBridge.send("message from webview");
    };
  });
`;

var ApiInfo = React.createClass({
    getInitialState: function () {
        return {}
    },
    onBridgeMessage: function (message) {
    },
    onLoadEnd: function (message) {
        this.refs.webviewbridge.sendToBridge(message);
    },
    render: function () {
        var {navigator, route} = this.props;
        var apiPath = route.passProps.apiPath;
        var temp = apiPath;
        return (
            <View style={styles.container}>
                <WebViewBridge
                    ref='webviewbridge'
                    onBridgeMessage={this.onBridgeMessage}
                    automaticallyAdjustContentInsets={false}
                    source={{uri:apiPath.split('#')[0]}}
                    injectedJavaScript={injectScript}
                    javaScriptEnabled={true}
                    startInLoadingState={true}
                    style={styles.webView}
                    onLoadEnd={()=>this.onLoadEnd(apiPath)}
                />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62
    },
    webView: {}

});

export default ApiInfo;
