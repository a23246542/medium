import React, { memo, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';

// const usePage = () => {
function usePage() {
  const articlePage = useSelector((state) =>
    state.getIn(['home', 'articlePage'])
  );

  return articlePage;
}

const Article = ({ articles, articlePage, handleClickMore }) => {
  return (
    <div>
      {articles.size > 0 &&
        articles.map((item) => {
          return (
            <Link to={`/home/detail?id=${item.get('id')}`} key={item.get('id')}>
              <ListItem>
                {/* // <ListItem key={index}> */}
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
              {/* // <LoadMore onClick={}>加載更多</LoadMore> %% */}
            </Link>
          );
        })}
      <LoadMore onClick={() => handleClickMore(articlePage)}>更多文章</LoadMore>
    </div>
  );
};

export default memo(Article);
