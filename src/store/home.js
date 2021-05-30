import api from '../api';
import { actions as articleActions } from './modules/article';
import { actions as topicActions } from './modules/topic';

export const actions = {
  loadTopics: () => {
    return async (dispatch) => {
      dispatch(topicActions.fetchTopicList());
      await api
        .getTopicList()
        .then((res) => {
          const result = res.data.data.topicList;
          dispatch(topicActions.fetchTopicListSuccess(result));
        })
        .catch((err) => {
          dispatch(topicActions.fetchTopicListFailed(err));
        })
        .finally(() => {
          dispatch(topicActions.fetchTopicListRequested());
        });
    };
  },
  loadArticleList: () => {
    return async (dispatch) => {
      dispatch(articleActions.fetchArticleList());
      await api
        .getArticleList()
        .then((res) => {
          const result = res.data.data.articleList;
          dispatch(articleActions.fetchArticleListSuccess(result));
        })
        .catch((err) => {
          dispatch(articleActions.fetchArticleListFail(err));
        })
        .finally(() => {
          dispatch(articleActions.fetchArticleListRequested());
        });
    };
  },
  loadMoreArticle: (page) => {
    return async (dispatch) => {
      dispatch(articleActions.updateArticlePage(page + 1));
      await api.getArticleList(page + 1).then((res) => {
        const result = res.data.data.articleList;
        dispatch(articleActions.addArticleList(result));
      });
    };
  },
};
