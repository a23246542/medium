import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
import api from '../../../api';

const changeListAction = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPages: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
});

// export const mouseIn = (isMouseIn) => {
//   if (isMouseIn) {
//     return {
//       type: actionTypes.MOUSE_ENTER
//     }
//   } else {
//     return {
//       type: actionTypes.MOUSE_LEAVE
//     }
//   }
// }

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
});

export const getHotSearchList = () => {
  return async (dispatch) => {
    // console.log(list);
    await api.getHotSearchList().then((res) => {
      dispatch(changeListAction(res.data.data));
      // console.log(res.data.data);
    });
  };
};

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page,
});
