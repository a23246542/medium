import React from 'react';
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

const home = () => {
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
    </HomeWrapper>
  );
}

export default home;
