import * as types from '../actions/actionTypes';

const initialState = {
    searchIndex: [],
};

export default function res(state = initialState, action = {}) {
    switch (action.type) {
        case types.SEARCHINDEXUPDATE:
            return {
                ...state,
                searchIndex: action.value
            }
        default:
            return state;
    }
}
