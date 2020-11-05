import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused:false,
  list: [],
  page:1,
  totalPages:1
})
//純函數
export default (state=defaultState,action) => {

  // const { type , payload } = action;

  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // return {
      //   focused:true,
      // }
      return state.set('focused', true);//!return代替break
    case actionTypes.SEARCH_BLUR:
      // return {
      //   focused:false,
      // }
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data)
      .set('totalPages', action.totalPages);
    default:
      return state;
  }
}