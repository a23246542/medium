import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TopicWrapper, TopicItem, TopicIcon } from '../style';
import { actionCreators } from '../store';

const Topic = ({ topicList }) => {
  return (
    <TopicWrapper>
      {topicList.size > 0 &&
        topicList.map((item) => (
          <TopicItem key={item.get('id')}>
            <TopicIcon
              icon={item.get('icon')}
              img="../../../assets/topic/topic-issue.png"
            />
            {item.get('title')}
          </TopicItem>
        ))}
    </TopicWrapper>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.topicList.size === nextProps.topicList.size ? true : false;
};

export default memo(Topic, areEqual);
