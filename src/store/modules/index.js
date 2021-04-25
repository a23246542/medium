// import { combineReducers } from 'redux';
// import { reducer as writerReducer } from './writer';

// export const moduleReducers = combineReducers({
//   writer: writerReducer,
// });

import { reducer as writerReducer } from './writer';
import { reducer as topicReducer } from './topic';
import { reducer as articleReducer } from './article';
import { reducer as hotSearchReducer } from './hotSearch';

export { writerReducer, topicReducer, articleReducer, hotSearchReducer };
