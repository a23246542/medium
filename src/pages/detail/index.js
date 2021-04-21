import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { DetailWrapper, Header, Content } from './style';
import { useRouteMatch, useLocation, withRouter } from 'react-router-dom';

const Detail = (props) => {
  let match = useRouteMatch();
  let { search } = useLocation();
  console.log('detail', match);
  // console.log(props);!!
  // console.log(search);
  const query = new URLSearchParams(search);
  // console.log(query.get('id'));
  const id = query.get('id');
  const title = useSelector((state) => state.getIn(['detail', 'title']));
  const content = useSelector((state) => state.getIn(['detail', 'content']));
  const dispatch = useDispatch();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    dispatch(actionCreators.getDetail(id));
  };

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </DetailWrapper>
  );
};

export default withRouter(Detail);
// export default Detail;
