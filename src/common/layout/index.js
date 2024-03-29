import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import BackTop from './components/backTop';
import { actions as layoutActions } from '../../store/layout';
import { actions as appActions } from '../../store/app';
import { Wrapper, Main, Aside } from './style';

const Layout = ({ children }) => {
  const writerList = useSelector((state) =>
    state.getIn(['writer', 'writerList'])
  );
  const isLoading = useSelector((state) =>
    state.getIn(['writer', 'isLoading'])
  );
  const error = useSelector((state) => state.getIn(['writer', 'error']));
  const isShowBackTop = useSelector((state) =>
    state.getIn(['app', 'isShowBackTop'])
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const loadWriters = async () => {
      await dispatch(layoutActions.loadWriters());
    };
    loadWriters().then(() => {
      // console.log('推薦作者加載完畢');
    });
  }, [dispatch]);

  useEffect(() => {
    const changeScrollTopShow = () => {
      if (document.documentElement.scrollTop > 500) {
        dispatch(appActions.toggleTopShow(true));
      } else {
        dispatch(appActions.toggleTopShow(false));
      }
    };
    window.addEventListener('scroll', changeScrollTopShow);
    return () => {
      window.removeEventListener('scroll', changeScrollTopShow);
    };
  }, [dispatch]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <Main>{children}</Main>
      <Aside>
        <Recommend />
        <Writer writerList={writerList} />
      </Aside>
      <BackTop
        isShowBackTop={isShowBackTop}
        handleScrollTop={handleScrollTop}
      />
    </Wrapper>
  );
};

export default Layout;
