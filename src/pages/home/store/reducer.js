import { fromJS } from 'immutable';
// import { CHANGE_LIST } from '../../../common/header/store/actionTypes';
import * as actionTypes from './actionTypes';


const defaultState = fromJS({
  topicList: []
  // topicList: [
  //   {
  //   "id": 1,
  //   "title": "社会热点",
  //   "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  //   },
  //   {
  //   "id": 2,
  //   "title": "手手绘",
  //   "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  //   },
  //   {
  //   "id": 3,
  //   "title": "社会热点",
  //   "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  //   },
  //   {
  //   "id": 4,
  //   "title": "手手绘",
  //   "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  //   },
  //   {
  //   "id": 5,
  //   "title": "社会热点",
  //   "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  //   },
  //   {
  //   "id": 6,
  //   "title": "手手绘",
  //   "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  //   },
  // ],
})
//純函數
export default (state = defaultState,action) => {

  // const { type , payload } = action;

  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      console.log('action',action.topics);
      return state.set('topicList', action.topics);
    default:
      return state
  }
  // return state;
}
