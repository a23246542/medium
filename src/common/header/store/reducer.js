import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused:false,
  list: [],
})
//純函數
export default (state=defaultState,action) => {

  const { type , payload } = action;

  switch (type) {
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
      return state.set('list', payload)
    default:
      return state;
  }
}