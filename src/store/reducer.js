import { combineReducers } from 'redux-immutable';
import { reducer as detailReducer } from './detail';
import { reducer as headerReducer } from './header';
import { reducer as loginReducer } from './login';
import { reducer as appReducer } from './app';
import {
  writerReducer,
  topicReducer,
  articleReducer,
  hotSearchReducer,
} from './modules';
const reducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  detail: detailReducer,
  writer: writerReducer,
  topic: topicReducer,
  article: articleReducer,
  hotSearch: hotSearchReducer,
  header: headerReducer,
});

export default reducer;
