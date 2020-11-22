import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { DetailWrapper, Header, Content } from './style';

const Detail = (props) => {

  const title = useSelector((state) => state.getIn(['detail','title']));
  const content = useSelector((state => state.getIn(['detail','content'])));
  const dispatch = useDispatch();

  useEffect(() => {
    getDetail();
  },[])

  const getDetail = () => {
    dispatch(actionCreators.getDetail())
  }

  return (
    <DetailWrapper>
      <Header>
        {title}
      </Header>
      <Content dangerouslySetInnerHTML={{
        __html:content
      }}/>
    </DetailWrapper>
  );
}

export default Detail;
