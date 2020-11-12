import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';
import api from '../../../api';

const changeTopicList = (data) => ({
  type:actionTypes.CHANGE_TOPIC_LIST,
  topics:fromJS(data)
})

const changeArticleList = (data) => ({
  type:actionTypes.CHANGE_ARTICLE_LIST,
  articles:fromJS(data),

})

export const getTopicList = () => {
  return async (dispatch) => {
    await api.getTopicList().then((res)=>{
      // console.log('res',res.data.data);
        dispatch(changeTopicList(res.data.data.topicList))
    })
  }
}

export const getArticleList = () => {
  return async (dispatch) => {
    await api.getArticleList().then((res)=>{
      dispatch(changeArticleList(res.data.data.articleList))
    })
  }
}
