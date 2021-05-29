import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ListItem, ListInfo, LoadMore, NoMoreTxt } from '../style';
import { Link } from 'react-router-dom';
import '../style';

const Article = ({ articles, articlePage, handleClickMore }) => {
  const fixCSSTransitionNode = useRef(null);
  const [isNoMoreArticle, setIsNoMoreArticle] = useState(false);
  const isLoading = useSelector((state) =>
    state.getIn(['article', 'isLoading'])
  );
  const hasFetching = useSelector((state) =>
    state.getIn(['article', 'hasFetching'])
  );
  let previousArticleLen = useRef(0);

  useEffect(() => {
    if (
      hasFetching &&
      !isLoading &&
      previousArticleLen.current === articles.size
    ) {
      setIsNoMoreArticle(true);
    } else {
      previousArticleLen.current = articles.size;
    }
  }, [articles.size, isLoading, hasFetching]);

  return (
    <section>
      <TransitionGroup component="ul" appear>
        {articles.size > 0 &&
          articles.map((item, index) => {
            const delaySeconds = (index % 5) * 0.3;
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
                    transitionDelay: `${delaySeconds}s`,
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
        {articles.size > 0 &&
          (isNoMoreArticle ? (
            <NoMoreTxt>已經到底部，沒有更多內容囉。</NoMoreTxt>
          ) : (
            <LoadMore onClick={() => handleClickMore(articlePage)}>
              更多文章
            </LoadMore>
          ))}
      </TransitionGroup>
    </section>
  );
};

export default Article;
