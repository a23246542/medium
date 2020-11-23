import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import(/*webpackChunkName:"detail"*/'./index.js'),
  loading() {
    return <div>正在加載</div>
  }
});

export default () => <LoadableComponent/>;//無狀態組件
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }