import { fromJS } from 'immutable';
import api from '../../api';

const initialState = fromJS({
  topicList: [],
  isLoading: true,
  error: '',
});

const actionTypes = {
  FETCH_TOPIC_LIST: 'TOPIC/FETCH_TOPIC_LIST',
  FETCH_TOPIC_LIST_SUCCESS: 'TOPIC/FETCH_TOPIC_LIST_SUCCESS',
  FETCH_TOPIC_LIST_FAIL: 'TOPIC/FETCH_TOPIC_LIST_FAIL',
  FETCH_TOPIC_LIST_REQUESTED: 'TOPIC/FETCH_TOPIC_LIST_REQUESTED',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOPIC_LIST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_TOPIC_LIST_SUCCESS:
      return state.set('topicList', action.topicList);
    case actionTypes.FETCH_TOPIC_LIST_FAIL:
      return state.set('error', action.error);
    case actionTypes.FETCH_TOPIC_LIST_REQUESTED:
      return state.set('isLoading', false);
    default:
      return state;
  }
};

const fetchTopicList = (topicAry) => ({
  type: actionTypes.FETCH_TOPIC_LIST,
});

const fetchTopicListSuccess = (topicAry) => ({
  type: actionTypes.FETCH_TOPIC_LIST_SUCCESS,
  topicList: fromJS(topicAry),
});

const fetchTopicListFailed = (error) => ({
  type: actionTypes.FETCH_TOPIC_LIST_FAIL,
  error,
});

const fetchTopicListRequested = () => ({
  type: actionTypes.FETCH_TOPIC_LIST_REQUESTED,
});

export const actions = {
  loadTopics: () => {
    return async (dispatch) => {
      dispatch(fetchTopicList());
      await api
        .getTopicList()
        .then((res) => {
          const result = res.data.data.topicList;
          dispatch(fetchTopicListSuccess(result));
        })
        .catch((err) => {
          dispatch(fetchTopicListFailed(err));
        })
        .finally(() => {
          dispatch(fetchTopicListRequested());
        });
    };
  },
};
