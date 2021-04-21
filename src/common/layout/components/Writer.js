import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WriterWrapper, WriterList, WriterItem } from '../style';
import * as actionCreators from '../store/actionCreators';

const Writer = () => {
  const writerList = useSelector((state) =>
    state.getIn(['home', 'writerList'])
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getWriter().then(() => {});
  }, []);

  // console.log(writerList);
  // console.log('writer render');

  const getWriter = async () => {
    await dispatch(actionCreators.getWriters());
  };

  return (
    <WriterWrapper>
      <div className="title">推薦作者</div>
      <WriterList>
        {writerList.map((author, key) => {
          return (
            <WriterItem key={key}>
              {/* <span className="avatar"><img src={author.avatar} alt=""/></span>
                  <span className="follow">
                    <i className="fas fa-plus"></i>關注
                  </span>
                  <h4 className="name">{author.name}</h4>
                  <p>寫了{author.word}k字。{author.like}k喜歡</p> */}
              <span className="avatar">
                <img src={author.get('avatar')} alt="" />
              </span>
              <span className="follow">
                <i className="fas fa-plus"></i>關注
              </span>
              <h4 className="name">{author.get('name')}</h4>
              <p>
                寫了{author.get('word')}k字。{author.get('list')}k喜歡
              </p>
            </WriterItem>
          );
        })}
      </WriterList>
    </WriterWrapper>
  );
};

export default memo(Writer);
