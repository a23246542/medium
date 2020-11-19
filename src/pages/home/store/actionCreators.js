import * as actionTypes from './actionTypes';
import {fromJS, List} from 'immutable';
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

const changeArticlePage = (nextPage) => ({
  type:actionTypes.CHANGE_ARTICLE_PAGE,
  nextPage //
  // nextPage:fromJS(nextPage)//@@數字是否需要
})

const addArticleList = (list) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  moreList: fromJS(list),
  // moreList: List(list),
  // nextPage: fromJS(nextPage)
})

const changeWriterList = (writeAry) => ({
  type:actionTypes.CHANGE_WRITER_LIST,
  writerList: fromJS(writeAry),
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
    await api.getArticleList()
    .then((res)=>{
      dispatch(changeArticleList(res.data.data.articleList))
    })
  }
}

// export const getMoreList = () => { %%
export const getMoreList = (page) => {
  return (dispatch) => {
    dispatch(changeArticlePage(page + 1));
    api.getArticleList(page + 1)
    .then((res) => {
      // const result = res.data.data;%%印出來才發現是物件
      const result = res.data.data.articleList;
      // dispatch(addArticleList(res.data.data, page + 1 ))
      dispatch(addArticleList(result))
    });
  }
}


export const toggleTopShow = (isShow) => ({
  type:actionTypes.TOGGLE_TOP_SHOW,
  isShow
})

export const getWriters = () => {
  return async (dispatch) => {
    await api.getWriterList()
    .then((res) => {
      const result = res.data.data.writerList;
      dispatch(changeWriterList(result))
    })
  }
}




