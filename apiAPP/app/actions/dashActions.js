import * as types from './actionTypes';

export function dispatchSearchTextChange(value) {
    return {
        type: types.SEARCHTEXTCHANGE,
        value: value
    };
}

export function dispatchSearchTypeChange(value) {
  return {
      type: types.SEARCHTYPECHANGE,
      value: value
  }
}

export function dispatchShowResultPage() {
    return {
        type: types.SHOWRESULTPAGE
    }
}

export function dispatchHideResultPage() {
    return {
        type: types.HIDERESULTPAGE
    }
}

