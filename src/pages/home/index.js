import React, { useEffect } from 'react';
import Article from './components/Article';
import Topic from './components/Topic';
import { useSelector, useDispatch } from 'react-redux';
import { actions as homeActions } from '../../store/home';
import banner from '../../assets/statics/banner.jpg';

const Home = () => {
  const articles = useSelector((state) =>
    state.getIn(['article', 'articleList'])
  );
  const articlePage = useSelector((state) =>
    state.getIn(['article', 'articlePage'])
  );

  const topicList = useSelector((state) => state.getIn(['topic', 'topicList']));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.loadArticleList());
    dispatch(homeActions.loadTopics());
  }, [dispatch]);

  const handleClickMore = (articlePage) => {
    dispatch(homeActions.loadMoreArticle(articlePage));
  };

  return (
    <>
      <img className="banner-img" alt="Banner" src={banner} />
      <Topic topicList={topicList} />
      <Article
        articles={articles}
        articlePage={articlePage}
        handleClickMore={handleClickMore}
      />
    </>
  );
};

export default Home;
