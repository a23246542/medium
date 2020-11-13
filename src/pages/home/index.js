import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

const Home = () => {
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

  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" alt="Banner" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic/>
        <Article/>
      </HomeLeft>
      <HomeRight>
        <Recommend/>
        <Writer/>
      </HomeRight>
      { showScroll? (<BackTop onClick = {handleScrollTop} >回到上方</BackTop>) : null }
    </HomeWrapper>
  );
}

export default Home;
