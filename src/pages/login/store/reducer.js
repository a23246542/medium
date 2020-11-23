import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
  isLogin: false,
})

export default ( state = defaultState, action ) => {
  switch ( action.type ) {
    case actionTypes.LOGIN:
      return state.set('isLogin', true);
    default:
      return state;
  }
  // return state;
}
