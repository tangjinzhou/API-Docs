import React, {
    StyleSheet,
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as dashActions from '../actions/dashActions';
import { connect } from 'react-redux';

import MyDocs from './myDocs';
import ResultPage from '../components/resultPage';
import SearchText from './searchText';
import queryDB from './queryDB';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.state.showResultPage !== nextProps.state.showResultPage;
    }
    render() {
        const { state, actions} = this.props;
        var showResultPage = state.showResultPage;
        return (
            <View style={styles.container}>
                {!showResultPage && <TouchableOpacity
                    onPress={()=>this.showSearchApiPage()}
                >
                    <View>
                        <SearchText
                            editable={false}
                        />
                    </View>
                </TouchableOpacity>}
                <MyDocs {...this.props}
                />
                {showResultPage && <ResultPage
                    {...this.props}
                    actionPage={'startPage'}
                />}
            </View>
        );
    }

    showSearchApiPage() {
        this.props.actions.dispatchShowResultPage('startPage');
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

function getState(state) {
    state = Object.assign({}, state.search);
    return {state: state}
}
export default connect(getState,
    (dispatch) => ({
        actions: bindActionCreators(dashActions, dispatch)
    })
)(StartPage);
