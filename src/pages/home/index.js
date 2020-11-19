import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import {  Switch, Route, NavLink, Link, useParams, useRouteMatch, withRouter } from "react-router-dom";
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Detail from '../detail';
import PropTypes from 'prop-types';
import HomePage from '../homePage';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

const Home = (props) => {
  const showScroll = useSelector((state) => state.getIn(['home','showScroll']));
  const dispatch = useDispatch();

  let { path,url } = useRouteMatch();

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
  // console.log(props);
  // console.log(path);
  return (
    <HomeWrapper>
      <HomeLeft>
        <Switch>
          {/* {props.children} */}
          <Route exact path={path} render={()=><HomePage/>}/>
          <Route path={`${path}/detail/:id`} render={()=><Detail/>}/>
        </Switch>
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
