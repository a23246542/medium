import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import api from '../../../api';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

const Article = () => {
  const articles = useSelector((state) => state.getIn(['home','articleList']));
  const articlePage = useSelector((state) => state.getIn(['home','articlePage']));
  const dispatch = useDispatch();



  useEffect(()=>{
    // api.getArticleList().then((res) =>{ console.log(res);})
    dispatch(actionCreators.getArticleList())
  },[])

  const getMoreList = (articlePage) => {
    dispatch(actionCreators.getMoreList(articlePage));
  }

  return (
    <div>
      {
        articles.map((item)=> {
          return (
            <ListItem key={item.get('id')}>
            {/* // <ListItem key={index}> */}
              <img className="pic" src={item.get('imgUrl')} alt=""/>
              <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            // <LoadMore onClick={}>加載更多</LoadMore> %%
          )
        })
      }
      <LoadMore onClick={ () => getMoreList(articlePage) }>更多文章</LoadMore>
    </div>
  )
}

export default Article;
