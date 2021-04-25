import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { CSSTransition } from 'react-transition-group';
// import * as actionCreators from './store/actionCreators';
import { actionCreators } from './store';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';
import { actions as hotSearchActions } from '../../store/modules/hotSearch';
import { actions as headerActions } from '../../store/header';

const Header = () => {
  // const [focused, setFocused] = useState(false);
  // const [mouseIn, setMouseIn] = useState(false);
  // const focused = useSelector((state) => state.header.focused);
  // const focused = useSelector((state) => state.header.get('focused'));
  const focused = useSelector((state) => state.getIn(['header', 'focused']));
  const mouseIn = useSelector((state) => state.getIn(['header', 'mouseIn']));

  // const list = useSelector((state) => state.getIn(['header', 'list']));
  // const thisPage = useSelector((state) => state.getIn(['header', 'thisPage']));
  // const totalPages = useSelector((state) =>
  //   state.getIn(['header', 'totalPages'])
  // );
  // const list = useSelector((state) => state.getIn(['header', 'list']));
  // const thisPage = useSelector((state) => state.getIn(['header', 'thisPage']));
  // const totalPages = useSelector((state) =>
  //   state.getIn(['header', 'totalPages'])
  // );
  const hotSearchList = useSelector((state) =>
    state.getIn(['hotSearch', 'hotSearchList'])
  );
  const totalPages = useSelector((state) =>
    // state.getIn(['hotSearch', 'totalPages'])
    state.getIn(['header', 'totalPages'])
  );
  const currentPage = useSelector((state) =>
    // state.getIn(['hotSearch', 'currentPage'])
    state.getIn(['header', 'currentPage'])
  );

  const login = useSelector((state) => state.getIn(['login', 'isLogin']));

  // ==============================================
  const dispatch = useDispatch();

  useEffect(() => {
    loadHotSearchList();
  }, []);

  const loadHotSearchList = async () => {
    // await dispatch(hotSearchActions.loadHotSearchList());
    await dispatch(headerActions.loadHotSearchList());
  };
  // @@為何這邊也要async await
  const handleInputFocus = async () => {
    // setFocused(true);
    // list.size === 0 && (await dispatch(actionCreators.getHotSearchList(list)));
    // setFocused(true);
    headerActions.size === 0 &&
      (await dispatch(headerActions.loadHotSearchList()));
    dispatch(headerActions.setSearchFocus());
  };
  const handleInputBlur = () => {
    dispatch(headerActions.setSearchBlur());
    // setFocused(false);
  };

  const handleMouseEnter = () => {
    // dispatch(headerActions.mouseIn(true));
    dispatch(headerActions.setMouseEnter());
    // dispatch(actionCreators.mouseEnter());
    // setMouseIn(true);
  };

  const handleMouseLeave = () => {
    // dispatch(headerActions.mouseIn(false));
    dispatch(headerActions.setMouseLeave());
    // dispatch(actionCreators.mouseLeave());
    // setMouseIn(false);
  };

  const handlePageChange = () => {
    // %%放在getListArea後面好像會找不到
    // if (thisPage!==totalPages){
    if (currentPage < totalPages) {
      dispatch(headerActions.setCurrentPage(currentPage + 1));
    } else {
      dispatch(headerActions.setCurrentPage(1));
    }
  };

  const getListArea = () => {
    //渲染狀態focused mouseIn list
    //eslint-disabled-next-line
    // if ('aa') return; // eslint-disable-line
    const JsList = hotSearchList.toJS(); // %%不可更改 list.toJs is not a function
    const pageList = [];

    if (JsList.length) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        // 第一頁0~小於10 第二頁10~小於20
        pageList.push(
          <SearchInfoItem key={JsList[i]}>{JsList[i]}</SearchInfoItem> //JsList才能[i]
        );
      }
    }
    // console.log(mouseIn);//!!一開始進來渲染一次 接著fouced改變渲染一次 等list資料回來又渲染一次

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
          <SearchInfoList>
            {pageList}
            {/* {list.map(item => (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>
            ))} */}
            {/* <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>簡書</SearchInfoItem>
            <SearchInfoItem>投稿</SearchInfoItem> */}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  const logout = () => {
    dispatch(loginActionCreators.logout());
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          {/* @@CSSTransition只能包一个如何影响到zoom */}
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => {
                handleInputFocus();
              }}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          {/* <i className="iconfont"
                className={focused ? 'focused' :''} */}
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
            &#xe614;
          </i>
          {getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writing">写文章</Button>
        {login ? (
          <Button className="reg" onClick={logout}>
            退出
          </Button>
        ) : (
          <Link to="/login">
            <Button className="reg">登陸</Button>
          </Link>
        )}
        {/* <Button className='reg'>登陸</Button> */}
      </Addition>
    </HeaderWrapper>
  );
};

// Header.propTypes = {

// };

export default Header;
