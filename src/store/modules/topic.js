import { fromJS } from 'immutable';

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

export const actions = {
  fetchTopicList: () => ({
    type: actionTypes.FETCH_TOPIC_LIST,
  }),
  fetchTopicListSuccess: (topicAry) => ({
    type: actionTypes.FETCH_TOPIC_LIST_SUCCESS,
    topicList: fromJS(topicAry),
  }),
  fetchTopicListFailed: (error) => ({
    type: actionTypes.FETCH_TOPIC_LIST_FAIL,
    error,
  }),
  fetchTopicListRequested: () => ({
    type: actionTypes.FETCH_TOPIC_LIST_REQUESTED,
  }),
};
