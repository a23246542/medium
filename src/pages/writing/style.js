import styled from 'styled-components/macro';
import img from '../../assets/writing/web-construction.png';
import { Link } from 'react-router-dom';

export const WebConstruction = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const WebConstructionImgWrap = styled.div`
  width: 500px;
  height: auto;
  img {
    max-width: 100%;
  }
`;

export const WebConstructionContent = styled.div`
  padding-top: 130px;
  margin-right: 80px;
  .title {
    font-size: 40px;
    color: #423f64;
    font-weight: bold;
  }
`;

export const GoBackHomeLink = styled(Link)`
  display: block;
  margin: 35px 0 0;
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #1ad7e1;
  text-decoration: none;
  letter-spacing: 1.5px;
  border-radius: 30px;
`;
