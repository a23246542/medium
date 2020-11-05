import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import * as actionCreators from './store/actionCreators';
import {actionCreators} from './store';
// import PropTypes from 'prop-types';
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
  Button
} from './style';

// const {} = actionCreators



const Header = () => {
  
  // const [focused,setFocused] = useState(false);
  // const focused = useSelector((state) => state.header.focused);
  // const focused = useSelector((state) => state.header.get('focused'));
  const focused = useSelector((state) => state.getIn(['header','focused']));

  
  // ==============================================
  const dispatch = useDispatch(); 
  const handleInputFocus = () => {
    // setFocused(true);
    dispatch(actionCreators.searchFocus());
  }
  const handleInputBlur = () => {
    // setFocused(false);
    dispatch(actionCreators.searchBlur());
  }

  const getListArea = (show) => {
    if (show) {
      return (
        <SearchInfo>
        <SearchInfoTitle>
          熱門搜索
          <SearchInfoSwitch>換一換</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>簡書</SearchInfoItem>
          <SearchInfoItem>投稿</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
      )
    } else {
      return null;
    }
  }
  
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
          <SearchWrapper>
            {/* @@CSSTransition只能包一个如何影响到zoom */}
            <CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
              <NavSearch
                className={focused ? 'focused' :''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
              {/* <i className="iconfont"
                className={focused ? 'focused' :''} */}
            <i className={focused? 'focused iconfont zoom' :'iconfont zoom'}
            >&#xe614;</i>
            { getListArea(focused) }
          </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writing'>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};


// Header.propTypes = {

// };


export default Header;
