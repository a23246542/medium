import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';
import api from '../../../api';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  payload: fromJS(data)
})


export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getHotSearchList = () => {
  return (dispatch) => {
    api.getHotSearchList().then((res) => {
      dispatch(changeList(res.data.data))
      console.log(res.data.data);
    })
  }
}