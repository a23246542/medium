import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as loginActions } from '../../store/login';
import { CSSTransition } from 'react-transition-group';
import { Link, useHistory } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  HeaderContainer,
  HeaderFixed,
  HeaderHigh,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';
import { actions as headerActions } from '../../store/header';

const Header = () => {
  const focused = useSelector((state) => state.getIn(['header', 'focused']));
  const mouseIn = useSelector((state) => state.getIn(['header', 'mouseIn']));

  const hotSearchList = useSelector((state) =>
    state.getIn(['hotSearch', 'hotSearchList'])
  );
  const totalPages = useSelector((state) =>
    state.getIn(['header', 'totalPages'])
  );
  const currentPage = useSelector((state) =>
    state.getIn(['header', 'currentPage'])
  );

  const isLogin = useSelector((state) => state.getIn(['login', 'isLogin']));

  const history = useHistory();
  // ==============================================
  const dispatch = useDispatch();

  const loadHotSearchList = useCallback(() => {
    dispatch(headerActions.loadHotSearchList());
  }, [dispatch]);

  useEffect(() => {
    loadHotSearchList();
  }, [loadHotSearchList]);

  const handleInputFocus = async () => {
    hotSearchList.size === 0 &&
      (await dispatch(headerActions.loadHotSearchList()));
    dispatch(headerActions.setSearchFocus());
  };
  const handleInputBlur = () => {
    dispatch(headerActions.setSearchBlur());
  };

  const handleMouseEnter = () => {
    dispatch(headerActions.setMouseEnter());
  };

  const handleMouseLeave = () => {
    dispatch(headerActions.setMouseLeave());
  };

  const handlePageChange = () => {
    if (currentPage < totalPages) {
      dispatch(headerActions.setCurrentPage(currentPage + 1));
    } else {
      dispatch(headerActions.setCurrentPage(1));
    }
  };

  const getListArea = () => {
    const JsList = hotSearchList.toJS();
    const pageList = [];

    if (JsList.length) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        // 第一頁0~小於10 第二頁10~小於20
        pageList.push(
          <SearchInfoItem key={JsList[i]}>{JsList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            熱門搜索
            <SearchInfoSwitch onClick={handlePageChange}>
              換一換
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  const logout = () => {
    dispatch(loginActions.logout());
  };

  const login = () => {
    history.push('/login');
  };

  const goToWritingPage = () => {
    if (isLogin) {
      history.push('/writing');
    } else {
      history.push('/login?url=writing');
    }
  };

  return (
    <HeaderWrapper>
      <HeaderFixed>
        <HeaderContainer>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem to="/" className="left">
              首頁
            </NavItem>
            <NavItem to="/" className="left">
              下載APP
            </NavItem>
            <NavItem className="right" to="/">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i
                className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
              >
                &#xe614;
              </i>
              {getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="writing" onClick={goToWritingPage}>
              寫文章
            </Button>
            {isLogin ? (
              <Button className="reg" onClick={logout}>
                退出
              </Button>
            ) : (
              <Button className="reg" onClick={login}>
                登入
              </Button>
            )}
          </Addition>
        </HeaderContainer>
      </HeaderFixed>
      <HeaderHigh />
    </HeaderWrapper>
  );
};

export default Header;
