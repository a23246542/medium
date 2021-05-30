import { fromJS } from 'immutable';
import api from '../../api';

const initialState = fromJS({
  writerList: [],
  isLoading: false,
  error: '',
});

const actionTypes = {
  FETCH_WRITER_LIST: 'WRITER/FETCH_WRITER_LIST',
  FETCH_WRITER_LIST_SUCCESS: 'WRITER/FETCH_WRITER_LIST_SUCCESS',
  FETCH_WRITER_LIST_FAIL: 'WRITER/FETCH_WRITERFETCH_WRITER_LIST',
  FETCH_WRITER_LIST_REQUESTED: 'WRITER/FETCH_WRITER_LIST_REQUESTED',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WRITER_LIST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_WRITER_LIST_SUCCESS:
      return state.set('writerList', action.writerList).set('isLoading', false);
    case actionTypes.FETCH_WRITER_LIST_FAIL:
      return state.set('error', action.error);
    case actionTypes.FETCH_WRITER_LIST_REQUESTED:
      return state.set('isLoading', false);
    default:
      return state;
  }
};

export const actions = {
  fetchWriterList: () => ({
    type: actionTypes.FETCH_WRITER_LIST,
  }),
  fetchWriterListSuccess: (writerAry) => ({
    type: actionTypes.FETCH_WRITER_LIST_SUCCESS,
    writerList: fromJS(writerAry),
  }),
  fetchWriterListFail: (error) => ({
    type: actionTypes.FETCH_WRITER_LIST_FAIL,
    error,
  }),
  fetchWriterListRequested: () => ({
    type: actionTypes.FETCH_WRITER_LIST_REQUESTED,
  }),
};
