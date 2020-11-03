import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


//padding-right70px可以推擠float
// NavSearch如何擺放在中間
// transition重包
export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href:'/'
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;