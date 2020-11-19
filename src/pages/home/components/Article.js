import React,{ memo, useEffect, useRef, useMemo, useStore } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import api from '../../../api';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link, Route, Switch } from 'react-router-dom'

// const usePage = () => {
function usePage(){

  const articlePage =  useSelector((state) => state.getIn(['home','articlePage']));

  return articlePage;
}

const Article = memo((props) => {
  // const store = useStore();
  const articles = useSelector((state) => state.getIn(['home','articleList']));
  // let articlePage = usePage();// %%要用在最頂層
  // const articlePage =  useRef(useSelector((state) => state.getIn(['home','articlePage'])));
  const articlePage =  useSelector((state) => state.getIn(['home','articlePage']));
  // console.log('articlePage',articlePage);

  // const articlePage = useMemo(useSelector((state) => state.getIn(['home','articlePage'])),[])

  const dispatch = useDispatch();
  console.log('Article render');

  useEffect(()=>{
    // api.getArticleList().then((res) =>{ console.log(res);})
    dispatch(actionCreators.getArticleList())
  },[])

  const getMoreList = (articlePage) => {
    dispatch(actionCreators.getMoreList(articlePage));
    // articlePage = usePage();%%不能這邊用
    console.log('articlePage',articlePage);
  }

  return (
    // <Switch>
    //   <Route
    //     path={props.match.url}
    //     render={(props) => {
    //       if (props.location.pathname === '/home') {
    //         return
    //       }
    //     }}
    //   />
    // </Switch>
    <div>
      {
        articles.map((item)=> {
          return (
            <Link to="/home/detail" key={item.get('id')}>
              <ListItem>
              {/* // <ListItem key={index}> */}
                <img className="pic" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
              {/* // <LoadMore onClick={}>加載更多</LoadMore> %% */}
            </Link>
          )
        })
      }
      <LoadMore onClick={ () => getMoreList(articlePage) }>更多文章</LoadMore>
    </div>
  )
})

export default Article;
