import api from '../../../api';
import * as actionTypes from './actionTypes';

const changeDetail = ({title,content}) => ({ //%%括號
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return ( dispatch ) => {
    api.getArticleDetail(id)
    .then((res) => {
      const result = res.data.data.detail;
      dispatch(changeDetail(result));
    })
  }
}
