import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actions as writerActions } from '../../store/modules/writer';
import { Wrapper, Main, Aside } from './style';

const Layout = ({ children }) => {
  //mapState
  const writerList = useSelector((state) =>
    state.getIn(['writer', 'writerList'])
  );
  const isLoading = useSelector((state) =>
    state.getIn(['writer', 'isLoading'])
  );
  const error = useSelector((state) => state.getIn(['writer', 'error']));

  useEffect(() => {
    loadWriters().then(() => {
      console.log('推薦作者加載完畢');
    });
  }, []);

  //mapDispatch
  const dispatch = useDispatch();

  const loadWriters = async () => {
    await dispatch(writerActions.loadWriters());
  };

  return (
    <Wrapper>
      <Main>{children}</Main>
      <Aside>
        <Recommend />
        <Writer writerList={writerList} />
      </Aside>
    </Wrapper>
  );
};

export default Layout;
