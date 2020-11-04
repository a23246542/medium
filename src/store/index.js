import {createStore, compose} from 'redux';
import reducer from './reducer';

//包裝函數 可傳遞多方法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers());

export default store;