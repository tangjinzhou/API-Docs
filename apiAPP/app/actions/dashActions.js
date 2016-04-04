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

export function dispatchShowResultPage(opt) {
    return {
        page: opt.page,
        type: types.SHOWRESULTPAGE
    }
}

export function dispatchHideResultPage(opt) {
    return {
        page: opt.page,
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

export function dispatchMydocsUpdate(opt) {
    console.log(opt);
    return {
        page: opt.page,
        type: types.MYDOCSUPDATE,
        value: opt.value
    }
}

export function dispatchOneDocApiUpdate(value) {
    return {
        type: types.ONEDOCAPIUPDATE,
        value: value
    }
}
