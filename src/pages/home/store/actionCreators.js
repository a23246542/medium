import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';
import api from '../../../api';

const changeTopicList = (data) => ({
  type:actionTypes.CHANGE_LIST,
  topics:fromJS(data)
})

export const getTopicList = () => {
  return async (dispatch) => {
    await api.getTopicList().then((res)=>{
      // console.log('res',res.data.data);
        dispatch(changeTopicList(res.data.data.topicList))
    })
  }
}
