import { combineReducers } from 'redux-immutable';
// import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
// import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as detailReducer } from './detail';
import { reducer as headerReducer } from './header';
// import { reducer as loginReducer } from '../pages/login/store';
import { reducer as loginReducer } from './login';
import { reducer as appReducer } from './app';
import {
  writerReducer,
  topicReducer,
  articleReducer,
  hotSearchReducer,
} from './modules';
const reducer = combineReducers({
  // header: headerReducer,
  app: appReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
  writer: writerReducer,
  topic: topicReducer,
  article: articleReducer,
  hotSearch: hotSearchReducer,
  header: headerReducer,
});

export default reducer;
