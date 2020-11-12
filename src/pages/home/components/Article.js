import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import api from '../../../api';
import { actionCreators } from '../store';
import { ListItem, ListInfo } from '../style';

const Article = () => {
  const articles = useSelector((state) => state.getIn(['home','articleList']));
  const dispatch = useDispatch();

  useEffect(()=>{
    // api.getArticleList().then((res) =>{ console.log(res);})
    dispatch(actionCreators.getArticleList())
  },[])

  return (
    <div>
      {
        articles.map((item) => {
          return (
            <ListItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt=""/>
              <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })
      }
    </div>
  )
}

export default Article;
