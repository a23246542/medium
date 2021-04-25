import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import api from '../api';
import { reducer as hotSearchReducer } from './modules/hotSearch';
import { actions as hotSearchActions } from './modules/hotSearch';

const initialState = fromJS({
  currentPage: 1,
  totalPages: 1,
  focused: false,
  mouseIn: false,
});

const actionTypes = {
  SET_CURRENT_PAGE: 'HEADER/SET_CURRENT_PAGE',
  SET_TOTAL_PAGES: 'HEADER/SET_TOTAL_PAGES',
  SET_MOUSE_ENTER: 'HEADER/SET_MOUSE_ENTER',
  SET_MOUSE_LEAVE: 'HEADER/SET_MOUSE_LEAVE',
  SET_SEARCH_FOCUS: 'HEADER/SET_SEARCH_FOCUS',
  SET_SEARCH_BLUR: 'HEADER/SET_SEARCH_BLUR',
};

// const headerReducer = (state = initialState, action) => {
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PAGE:
      return state.set('currentPage', action.currentPage);
    case actionTypes.SET_TOTAL_PAGES:
      return state.set('totalPages', action.totalPages);
    case actionTypes.SET_SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SET_SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.SET_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.SET_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    default:
      return state;
  }
};

// export const reducer = combineReducers({
//   hotSearch: hotSearchReducer,
//   // header: headerReducer,
// });

const setCurrentPage = (currentPage) => ({
  type: actionTypes.SET_CURRENT_PAGE,
  currentPage,
});

const setTotalPages = (totalPages) => ({
  type: actionTypes.SET_TOTAL_PAGES,
  totalPages,
});

// const setSearchFocus = () => ({
//   type: actionTypes.SET_SEARCH_FOCUS,
// });

// const setSearchBlur = () => ({
//   type: actionTypes.SET_SEARCH_BLUR,
// });

// const setMouseEnter = () => ({
//   type: actionTypes.SET_MOUSE_ENTER,
// });

// const setMouseLeave = () => ({
//   type: actionTypes.SET_MOUSE_LEAVE,
// });

export const actions = {
  loadHotSearchList: () => {
    return async (dispatch) => {
      dispatch(hotSearchActions.fetchHotSearchList());
      await api
        .getHotSearchList()
        .then((res) => {
          const hotSearchAry = res.data.data;
          const totalPages = Math.ceil(hotSearchAry.length / 10);
          dispatch(hotSearchActions.fetchHotSearchListSuccess(hotSearchAry));
          dispatch(setTotalPages(totalPages));
        })
        .catch((err) => {
          dispatch(hotSearchActions.fetchHotSearchListFail(err));
        })
        .finally(() => {
          dispatch(hotSearchActions.fetchHotSearchListRequested());
        });
    };
  },
  setCurrentPage: (currentPage) => ({
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage,
  }),
  setSearchFocus: () => ({
    type: actionTypes.SET_SEARCH_FOCUS,
  }),
  setSearchBlur: () => ({
    type: actionTypes.SET_SEARCH_BLUR,
  }),
  setMouseEnter: () => ({
    type: actionTypes.SET_MOUSE_ENTER,
  }),
  setMouseLeave: () => ({
    type: actionTypes.SET_MOUSE_LEAVE,
  }),
};
