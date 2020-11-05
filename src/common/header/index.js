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
// 熱門搜索換頁功能實現
// 1.用pageList陣列展示第一頁
// 2.換一批 改成mosueIn Enter決定出現與否 顯用jsx函數測試123
// 接下來換改數據成功
// 測試流程先看console有了沒報錯 換檢查redux
// 接下來用資料狀態 來判斷顯示畫面
// 3.換一批 的換頁功能
//  1.寫完dispatch 到reducer 想到需要設定的數據
//  2.操作頁面邏輯寫再這邊 檢查要傳過去的數據
// key錯誤 注意getListArea一開始就會執行，改程獲取數據才做循環(數據改動就會再渲染)
// react的async await
// state.merge優化 性能更好 多set會返回多次


const Header = () => {
  
  // const [focused,setFocused] = useState(false);
  // const focused = useSelector((state) => state.header.focused);
  // const focused = useSelector((state) => state.header.get('focused'));
  const focused = useSelector((state) => state.getIn(['header','focused']));
  const list = useSelector((state) => state.getIn(['header','list']));
  
  // ==============================================
  const dispatch = useDispatch(); 
  const handleInputFocus = () => {
    // setFocused(true);
    dispatch(actionCreators.searchFocus());
    dispatch(actionCreators.getHotSearchList())
  }
  const handleInputBlur = () => {
    // setFocused(false);
    dispatch(actionCreators.searchBlur());
  }

  const getListArea = (isShow) => {
    if (isShow) {
      return (
        <SearchInfo>
        <SearchInfoTitle>
          熱門搜索
          <SearchInfoSwitch>換一換</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {list.map(item => (
            <SearchInfoItem key={item}>{item}</SearchInfoItem>    
          ))}
          {/* <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>簡書</SearchInfoItem>
          <SearchInfoItem>投稿</SearchInfoItem> */}
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
