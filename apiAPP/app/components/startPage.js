import React, {
    StyleSheet,
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import MyDocs from './myDocs';
import ResultPage from '../components/resultPage';
import SearchText from './searchText';
import queryDB from './queryDB';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        queryDB.getMyDocsNameList(this.props);
    }

    render() {
        //const {state, actions} = this.props;
        const { showResultPage,navigator} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.showSearchApiPage(navigator)}
                >
                    <View>
                        {!showResultPage && <SearchText
                            editable={false}
                        />}
                    </View>
                </TouchableOpacity>
                <MyDocs {...this.props}
                />
                {showResultPage && <ResultPage
                    {...this.props}
                />}
            </View>
        );
    }

    showSearchApiPage(navigator) {
        this.props.dispatchShowResultPage();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    searchTextInput: {
        height: 30,
    }
});
