import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused:false,
})
//純函數
export default (state=defaultState,action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:{
      // return {
      //   focused:true,
      // }
      return state.set('focused',true);
    }
    case actionTypes.SEARCH_BLUR:{
      // return {
      //   focused:false,
      // }
      return state.set('focused',false);
    }
    default:
      return state;
  }
}