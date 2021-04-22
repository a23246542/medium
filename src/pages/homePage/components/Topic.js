import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

const Topic = ({ topicList }) => {
  return (
    <TopicWrapper>
      {topicList.size > 0 &&
        topicList.map((item) => (
          <TopicItem key={item.get('id')}>
            <img className="topicItem__pic" src={item.get('imgUrl')} alt="" />
            {item.get('title')}
          </TopicItem>
        ))}
      {/* {count} */}
    </TopicWrapper>
  );
};
// });

export default memo(Topic);
