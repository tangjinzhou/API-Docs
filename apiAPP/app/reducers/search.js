import * as types from '../actions/actionTypes';

const initialState = {
    searchText: '',
    searchType: 'API',
    showResultPage: false
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
                showResultPage: true
            }
        case types.HIDERESULTPAGE:
            return {
                ...state,
                showResultPage: false
            }
        default:
            return state;
    }
}
