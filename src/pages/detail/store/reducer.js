import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
import { CHANGE_ARTICLE_PAGE } from '../../home/store/actionTypes';

const defaultStatus = fromJS({
  title:'衡水中学...',
  content:'文章載入中'
})

export default ( state = defaultStatus, action) => {
  // return state;
  switch ( action.type ) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
