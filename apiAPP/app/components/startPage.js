import React, {
    StyleSheet,
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import MyDocs from './myDocs';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const {state, actions} = this.props;
        return (
            <View style={styles.container}>
                <MyDocs {...this.props}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchTextInput: {
        height: 30,
    },
});
