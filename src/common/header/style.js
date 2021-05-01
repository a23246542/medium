import styled from 'styled-components/macro';
import logoPic from '../../statics/logo.png';

//padding-right70px可以推擠float
// NavSearch如何擺放在中間
// transition重包

const border = 'border:1px solid #ccc';

export const HeaderWrapper = styled.header`
  width: 100%;
`;

export const HeaderFixed = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
`;

export const HeaderContainer = styled.div`
  display: flex;
  min-width: 1000px;
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
`;

export const HeaderHigh = styled.div`
  display: block;
  height: 56px;
`;

// export const Logo = styled.a.attrs({
//   href:'/'
// })`
export const Logo = styled.div`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  position: relative;
  width: 960px;
  height: 100%;
  margin: 0 auto;
  /* ${border}; */
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;

  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }

  &.active {
    color: #ea6f5a;
  }
`;

// @@js zoom没有block依然能宽高
// !!css 包外面靠父曾做法
export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .zoom {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  color: #666;

  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }

  &.slide-enter {
    transition: all 0.2s ease-out;
  }

  &.slide-enter-active {
    width: 240px;
  }

  &.slide-exit {
    transition: all 0.2s ease-out;
  }

  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.2);
  ${border};
  background-color: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block; /*寬高*/
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const Addition = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  /* float: right; !!css 不一定要flex 不加换div占满宽 */
  /* margin-top: 9px; */
  margin-right: 20px;
  /* padding: 0 20px; */
  height: 38px;
  line-height: 38px;
  text-align: center;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    width: 70px;
    color: #ec6149;
  }
  &.writing {
    width: 84px;
    color: #fff;
    background: #ec6149;
  }
`;
