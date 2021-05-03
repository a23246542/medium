import { fromJS, update } from 'immutable';
import api from '../../api';

const initialState = fromJS({
  articleList: [],
  articlePage: 1,
  isLoading: false,
  error: '',
  hasFetching: false,
});

const actionTypes = {
  FETCH_ARTICLE_LIST: 'ARTICLE/FETCH_ARTICLE_LIST',
  FETCH_ARTICLE_LIST_SUCCESS: 'ARTICLE/FETCH_ARTICLE_LIST_SUCCESS',
  FETCH_ARTICLE_LIST_FAIL: 'ARTICLE/FETCH_ARTICLE_LIST_FAIL',
  FETCH_ARTICLE_LIST_REQUESTED: 'ARTICLE/FETCH_ARTICLE_LIST_FAIL_REQUESTED',
  SET_ARTICLE_PAGE: 'ARTICLE/SET_ARTICLE_PAGE',
  ADD_ARTICLE_LIST: 'ARTICLE/ADD_ARTICLE_LIST',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLE_LIST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_ARTICLE_LIST_SUCCESS:
      return state.set('articleList', action.articleList);
    // .set('isFetching', true);
    case actionTypes.FETCH_ARTICLE_LIST_FAIL:
      return state.set('articleList', action.error);
    case actionTypes.FETCH_ARTICLE_LIST_REQUESTED:
      return state.set('isLoading', false);
    case actionTypes.SET_ARTICLE_PAGE:
      return state.merge({
        articlePage: action.nextPage,
        isLoading: true,
      });
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.moreArticle),
        hasFetching: true,
        isLoading: false,
      });
    default:
      return state;
  }
};

const fetchArticleList = () => ({
  type: actionTypes.FETCH_ARTICLE_LIST,
});

const fetchArticleListSuccess = (articleAry) => ({
  type: actionTypes.FETCH_ARTICLE_LIST_SUCCESS,
  articleList: fromJS(articleAry),
});

const fetchArticleListFail = (error) => ({
  type: actionTypes.FETCH_ARTICLE_LIST_FAIL,
  error,
});

const fetchArticleListRequested = () => ({
  type: actionTypes.FETCH_ARTICLE_LIST_REQUESTED,
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
      dispatch(fetchArticleList());
      await api
        .getArticleList()
        .then((res) => {
          const result = res.data.data.articleList;
          dispatch(fetchArticleListSuccess(result));
        })
        .catch((err) => {
          dispatch(fetchArticleListFail(err));
        })
        .finally(() => {
          dispatch(fetchArticleListRequested());
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
