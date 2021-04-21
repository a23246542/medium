import { fromJS } from 'immutable';
// import { CHANGE_LIST } from '../../../common/header/store/actionTypes';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1,
  showScroll: false,
});
//純函數
export default (state = defaultState, action) => {
  // const { type , payload } = action;

  switch (action.type) {
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.set('topicList', action.topics);
    case actionTypes.CHANGE_ARTICLE_LIST:
      return state.set('articleList', action.articles);
    // case actionTypes.CHANGE_ARTICLE_PAGE
    case actionTypes.CHANGE_ARTICLE_PAGE:
      return state.set('articlePage', action.nextPage);
    case actionTypes.ADD_ARTICLE_LIST:
      // return state.merge({ %%說沒有unique "key" 原來是沒有concact
      //   articleList:action.moreList,
      //   // articlePage:action.nextPage
      // })

      // return state.set('articleList', action.moreList);
      // return state.get('articleList').concat(action.moreList); //%%這個不行
      return state.set(
        'articleList',
        state.get('articleList').concat(action.moreList)
      );

    // return state.merge({ //%%key要字串
    //   'articleList': state.get('articleList').concat(action.moreList),
    //   // articleList: state.get('articleList'), %%除錯用
    // });
    // console.log(action.moreList);
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.isShow);

    default:
      return state;
  }
  // return state;
};
