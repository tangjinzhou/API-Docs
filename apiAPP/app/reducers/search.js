import * as types from '../actions/actionTypes';

const initialState = {
    showResultPage: false,
    myDocsNameList: [],
};

export default function search(state = initialState, action = {}) {
    if (action.page === 'startPage') {
        switch (action.type) {
            case types.SHOWRESULTPAGE:
                return {
                    ...state,
                    showResultPage: true,
                    searchText: '',
                    searchIndex: []
                }
            case types.HIDERESULTPAGE:
                return {
                    ...state,
                    showResultPage: false,
                    searchText: '',
                    searchIndex: []
                }
            case types.MYDOCSUPDATE:
                return {
                    ...state,
                    myDocsNameList: action.value
                }
            case types.ONEDOCAPIUPDATE:
                return {
                    ...state,
                    oneDocApiList: action.value
                }
            default:
                return state;
        }
    } else {
        return state;
    }
}
