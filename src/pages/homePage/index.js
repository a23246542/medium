import React, { useEffect } from 'react';
import Article from './components/Article';
import Topic from './components/Topic';
import { userSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
      <img
        className="banner-img"
        alt="Banner"
        // src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        src={banner}
      />
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
