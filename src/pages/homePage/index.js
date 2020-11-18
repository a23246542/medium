import React,{ Fragment } from 'react'
import Article from './components/Article';
import Topic from './components/Topic';

const HomePage = () => {
  return (
    <Fragment>
      <img className="banner-img" alt="Banner" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
      <Topic/>
      <Article/>
    </Fragment>
  )
}

export default HomePage;
