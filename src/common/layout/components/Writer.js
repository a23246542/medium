import React, { memo } from 'react';
import { WriterWrapper, WriterList, WriterItem } from '../style';

const Writer = ({ writerList }) => {
  return (
    <WriterWrapper>
      <div className="title">推薦作者</div>
      <WriterList>
        {writerList &&
          writerList.map((author, key) => {
            return (
              <WriterItem key={key}>
                <span className="avatar">
                  <img src={author.get('avatar')} alt="" />
                </span>
                <span className="follow">
                  <i className="fas fa-plus"></i>關注
                </span>
                <h4 className="name">{author.get('name')}</h4>
                <p>
                  寫了{author.get('word')}k字。{author.get('like')}k喜歡
                </p>
              </WriterItem>
            );
          })}
      </WriterList>
    </WriterWrapper>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.writerList.size === nextProps.writerList.size;
};

export default memo(Writer, areEqual);
