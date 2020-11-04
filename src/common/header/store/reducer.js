import * as actionTypes from './actionTypes';
const defaultState = {
  focused:false,
}
//純函數
export default (state=defaultState,action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:{
      return {
        focused:true,
      }
    }
    case actionTypes.SEARCH_BLUR:{
      return {
        focused:false,
      }
    }
  }
  return state;
}