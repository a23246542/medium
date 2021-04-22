import { fromJS } from 'immutable';
import api from '../../api';

const initialState = fromJS({
  topicList: [],
});

const actionTypes = {
  FETCH_TOPIC_LIST: 'TOPIC/FETCH_TOPIC_LIST',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOPIC_LIST:
      return state.set('topicList', action.topicList);

    default:
      return state;
  }
};

const fetchTopicList = (topicAry) => ({
  type: actionTypes.FETCH_TOPIC_LIST,
  topicList: fromJS(topicAry),
});

export const actions = {
  loadTopics: () => {
    return async (dispatch) => {
      await api.getTopicList().then((res) => {
        const result = res.data.data.topicList;
        dispatch(fetchTopicList(result));
      });
    };
  },
};
