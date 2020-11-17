import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { Route, NavLink, Switch, withRouter } from "react-router-dom";
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Detail from '../detail';
import PropTypes from 'prop-types';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

const Home = (props) => {
  const showScroll = useSelector((state) => state.getIn(['home','showScroll']));
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', changeScrollTopShow)
    return () => {
      window.removeEventListener('scroll',changeScrollTopShow);
    }
  },[])

  const changeScrollTopShow = () => {
    if(document.documentElement.scrollTop > 500) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }

  const handleScrollTop = () => {
    // window.scrollTo(0,0);
    window.scrollTo({
      top:0,
      behavior:'smooth', //@@
    })
  }
  console.log(props);
  return (
    <HomeWrapper>
      <HomeLeft>
        {/* <img className="banner-img" alt="Banner" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic/> */}
        {/* <Switch>
          <Route
            path={props.match.path}
            render={(props) => {
              // console.log(props);
              // 以目前需求簡化成如下判斷式
              if (props.location.pathname === "/home") {
                return <Article/>;
              // } else if (props.location.pathname === "/home/detail") {
              } else {
                return <Detail/>;
              }
            }}
          />
        </Switch> */}
        {props.children}
        {/* <Article/> */}
      </HomeLeft>
      <HomeRight>
        <Recommend/>
        <Writer/>
      </HomeRight>
      { showScroll? (<BackTop onClick = {handleScrollTop} >回到上方</BackTop>) : null }
    </HomeWrapper>
  );
}

// Home.propTypes = {
//   'match':PropTypes.object,
//   // 'match.url': PropTypes.string,
//   'location': PropTypes.object,
//   // 'location.pathname': PropTypes.string
// }

export default withRouter(Home);
