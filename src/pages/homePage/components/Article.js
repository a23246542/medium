import React, { memo, useRef, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import '../style';

// const usePage = () => {
function usePage() {
  const articlePage = useSelector((state) =>
    state.getIn(['home', 'articlePage'])
  );

  return articlePage;
}

const Article = ({ articles, articlePage, handleClickMore }) => {
  const fixCSSTransitionNode = useRef(null);
  return (
    <section>
      <TransitionGroup component="ul" appear>
        {articles.size > 0 &&
          articles.map((item, index) => {
            return (
              <CSSTransition
                key={item.get('id')}
                classNames="fade"
                timeout={300}
                unmountOnExit
                // onEntered={(el) => (el.style.color = 'blue')}
                // nodeRef={fixCSSTransitionNode}
              >
                <ListItem
                  key={item.get('id')}
                  style={{
                    transitionDelay: `${index * 0.3}s`,
                  }}
                >
                  <img className="pic" src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <Link
                      to={`/home/detail?id=${item.get('id')}`}
                      className="title"
                    >
                      <h3>{item.get('title')}</h3>
                    </Link>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </CSSTransition>
            );
          })}
        <LoadMore onClick={() => handleClickMore(articlePage)}>
          更多文章
        </LoadMore>
      </TransitionGroup>
    </section>
  );
};

export default memo(Article);
