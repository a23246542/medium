import { fromJS } from 'immutable';
import api from '../../api';

const initialState = fromJS({
  hotSearchList: [],
  isLoading: false,
  error: '',
});

const actionTypes = {
  FETCH_HOT_SEARCH_LIST: 'HOT_SEARCH/FETCH_HOT_SEARCH_LIST',
  FETCH_HOT_SEARCH_LIST_SUCCESS: 'HOT_SEARCH/FETCH_HOT_SEARCH_LIST_SUCCESS',
  FETCH_HOT_SEARCH_LIST_FAIL: 'HOT_SEARCH/FETCH_HOT_SEARCH_LIST',
  FETCH_HOT_SEARCH_LIST_REQUESTED: 'HOT_SEARCH/FETCH_HOT_SEARCH_LIST_REQUESTED',
  SET_CURRENT_PAGE: 'HOT_SEARCH/SET_CURRENT_PAGE',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOT_SEARCH_LIST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_HOT_SEARCH_LIST_SUCCESS:
      console.log(
        '2.test reducer獲取 hotSearchList 去set',
        action.hotSearchList
      );
      return state.set('hotSearchList', action.hotSearchList);
    case actionTypes.FETCH_HOT_SEARCH_LIST_FAIL:
      return state.set('error', action.error);
    case actionTypes.FETCH_HOT_SEARCH_LIST_REQUESTED:
      return state.set('isLoading', false);
    case actionTypes.SET_CURRENT_PAGE:
      return state.set('currentPage', action.currentPage);
    default:
      return state;
  }
};

export const actions = {
  fetchHotSearchList: () => ({
    type: actionTypes.FETCH_HOT_SEARCH_LIST,
  }),
  fetchHotSearchListSuccess: (hotSearchAry) => ({
    type: actionTypes.FETCH_HOT_SEARCH_LIST_SUCCESS,
    hotSearchList: fromJS(hotSearchAry),
  }),
  fetchHotSearchListFail: (error) => ({
    type: actionTypes.FETCH_HOT_SEARCH_LIST_FAIL,
    error,
  }),
  fetchHotSearchListRequested: () => ({
    type: actionTypes.FETCH_HOT_SEARCH_LIST_REQUESTED,
  }),
};
