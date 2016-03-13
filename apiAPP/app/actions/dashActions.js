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

export function dispatchShowResultPage(page) {
    return {
        page: page,
        type: types.SHOWRESULTPAGE
    }
}

export function dispatchHideResultPage(page) {
    return {
        page: page,
        type: types.HIDERESULTPAGE
    }
}

export function dispatchSearchIndexUpdate(value) {
    console.log(value);
    return {
        type: types.SEARCHINDEXUPDATE,
        value: value
    }
}

export function dispatchMydocsUpdate(value) {
    return {
        type: types.MYDOCSUPDATE,
        value: value
    }
}

export function dispatchOneDocApiUpdate(value) {
    return {
        type: types.ONEDOCAPIUPDATE,
        value: value
    }
}
