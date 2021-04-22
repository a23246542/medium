import { fromJS, update } from 'immutable';
import api from '../../api';

const actionTypes = {
  FETCH_ARTICLE_LIST: 'ARTICLE/FETCH_ARTICLE_LIST',
  SET_ARTICLE_PAGE: 'ARTICLE/SET_ARTICLE_PAGE',
  ADD_ARTICLE_LIST: 'ARTICLE/ADD_ARTICLE_LIST',
};

const initialState = fromJS({
  articleList: [],
  articlePage: 1,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLE_LIST:
      return state.set('articleList', action.articleList);
    case actionTypes.SET_ARTICLE_PAGE:
      return state.set('articlePage', action.nextPage);
    case actionTypes.ADD_ARTICLE_LIST:
      // return state.get('articleList').concat(action.moreArticle);
      return state.set(
        'articleList',
        state.get('articleList').concat(action.moreArticle)
      );
    default:
      return state;
  }
};

const fetchArticleList = (data) => ({
  type: actionTypes.FETCH_ARTICLE_LIST,
  articleList: fromJS(data),
});

const updateArticlePage = (nextPage) => ({
  type: actionTypes.SET_ARTICLE_PAGE,
  nextPage,
});

const addArticleList = (data) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  moreArticle: fromJS(data),
});

//可以shorthand
// 只把非同步action導出去。而不直接碰資料
export const actions = {
  // updateArticlePage: (nextPage) => ({
  //   type: actionTypes.FETCH_ARTICLE_PAGE,
  //   nextPage,
  // }),
  loadArticleList: () => {
    return async (dispatch) => {
      await api.getArticleList().then((res) => {
        const result = res.data.data.articleList;
        dispatch(fetchArticleList(result));
      });
    };
  },
  loadMoreArticle: (page) => {
    return async (dispatch) => {
      dispatch(updateArticlePage(page + 1));
      await api.getArticleList(page + 1).then((res) => {
        const result = res.data.data.articleList;
        dispatch(addArticleList(result));
      });
    };
  },
};
