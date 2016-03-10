import * as types from '../actions/actionTypes';

const initialState = {
    searchText: '',
    searchType: 'API',
    showResultPage: false,
    myDocsNameList: [],
    oneDocApiList: [],
};

export default function search(state = initialState, action = {}) {
    switch (action.type) {
        case types.SEARCHTEXTCHANGE:
            return {
                ...state,
                searchText: action.value
            }
        case types.SEARCHTYPECHANGE:
            return {
                ...state,
                searchText: action.searchType === state.searchType ? state.searchText : '',
                searchType: action.value
            }
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
}
