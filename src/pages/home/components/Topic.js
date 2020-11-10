import React from 'react';
import {TopicWrapper, TopicItem} from '../style';

const Topic = () => {
  return (
    <TopicWrapper>
      <TopicItem>
        <img
          className="topicItem__pic"
          src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          alt=""
        />
        社会热点
      </TopicItem>
      <TopicItem>
        <img
          className="topicItem__pic"
          src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          alt=""
        />
        社会热点
      </TopicItem>
    </TopicWrapper>
  )
}

export default Topic

