import React, { useEffect } from 'react';
import Article from './components/Article';
import Topic from './components/Topic';
import { useSelector, useDispatch } from 'react-redux';
import { actions as articleAction } from '../../store/modules/article';
import { actions as topicAction } from '../../store/modules/topic';
import banner from '../../assets/statics/banner.jpg';

const HomePage = () => {
  const articles = useSelector((state) =>
    state.getIn(['article', 'articleList'])
  );
  const articlePage = useSelector((state) =>
    state.getIn(['article', 'articlePage'])
  );

  const topicList = useSelector((state) => state.getIn(['topic', 'topicList']));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleAction.loadArticleList());
    dispatch(topicAction.loadTopics());
  }, [dispatch]);

  const handleClickMore = (articlePage) => {
    dispatch(articleAction.loadMoreArticle(articlePage));
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

export default HomePage;
