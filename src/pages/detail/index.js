import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { DetailWrapper, Header, Content } from './style';
import { useRouteMatch, useLocation, withRouter } from 'react-router-dom';
import { actions as detailActions } from '../../store/detail';

const Detail = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get('id');
  const title = useSelector((state) => state.getIn(['detail', 'title']));
  const content = useSelector((state) => state.getIn(['detail', 'content']));
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    const loadArticleDetail = async () => {
      // dispatch(actionCreators.getDetail(id));
      await dispatch(detailActions.loadArticleDetail(id));
    };
    loadArticleDetail();
  }, [id, dispatch]);

  return (
    <DetailWrapper>
      <Header>{title && title}</Header>
      <Content
        dangerouslySetInnerHTML={{
          __html: content && content,
        }}
      />
    </DetailWrapper>
  );
};

export default withRouter(Detail);
// export default Detail;
