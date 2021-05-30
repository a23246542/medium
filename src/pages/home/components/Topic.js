import React, { memo } from 'react';
import { TopicWrapper, TopicItem, TopicIcon } from '../style';

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
  return prevProps.topicList.size === nextProps.topicList.size;
};

export default memo(Topic, areEqual);
