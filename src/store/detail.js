import { fromJS } from 'immutable';
import api from '../api';

const initialState = fromJS({
  title: '',
  content: '',
  isLoading: false,
  error: '',
});

const actionTypes = {
  FETCH_ARTICLE_DETAIL: 'DETAIL/FETCH_ARTICLE_DETAIL',
  FETCH_ARTICLE_DETAIL_SUCCESS: 'DETAIL/FETCH_ARTICLE_DETAIL_SUCCESS',
  FETCH_ARTICLE_DETAIL_FAIL: 'DETAIL/FETCH_ARTICLE_DETAIL_FAIL',
  FETCH_ARTICLE_DETAIL_REQUESTED: 'DETAIL/FETCH_ARTICLE_LIST_REQUESTED',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLE_DETAIL:
      return state.set('isLoading', true);
    case actionTypes.FETCH_ARTICLE_DETAIL_SUCCESS:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    case actionTypes.FETCH_ARTICLE_DETAIL_FAIL:
      return state.set('error', action.error);
    case actionTypes.FETCH_ARTICLE_LIST_REQUESTED:
      return state.set('isLoading', false);
    default:
      return state;
  }
};

const fetchArticleDetail = () => ({
  type: actionTypes.FETCH_ARTICLE_DETAIL,
});

const fetchArticleDetailSuccess = ({ title, content }) => ({
  type: actionTypes.FETCH_ARTICLE_DETAIL_SUCCESS,
  title,
  content,
});

const fetchArticleDetailFail = (error) => ({
  type: actionTypes.FETCH_ARTICLE_DETAIL_FAIL,
  error,
});

const fetchArticleDetailRequested = () => ({
  type: actionTypes.FETCH_ARTICLE_DETAIL_REQUESTED,
});

export const actions = {
  loadArticleDetail: (id) => {
    return async (dispatch) => {
      dispatch(fetchArticleDetail());
      await api
        .getArticleDetail(id)
        .then((res) => {
          const result = res.data.data.detail;
          dispatch(fetchArticleDetailSuccess(result));
        })
        .catch((err) => {
          dispatch(fetchArticleDetailFail(err));
        })
        .finally(() => {
          dispatch(fetchArticleDetailRequested());
        });
    };
  },
};
