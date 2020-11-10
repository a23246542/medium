import React from 'react';
import {useSelector} from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';

const Topic = () => {

  const topicList = useSelector((state)=>state.getIn(['home','topicList']));

  return (
    <TopicWrapper>
      {topicList.map((item)=>(
        <TopicItem key={item.get('id')}>
          <img
            className="topicItem__pic"
            src={item.get('imgUrl')}
            alt=""
        />
        {item.get('title')}
        </TopicItem>
      ))}
    </TopicWrapper>
  )
}

export default Topic

