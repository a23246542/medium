import styled from 'styled-components/macro';


export const LoginWrapper = styled.div`//%%jsx組件一定要大寫
  width: 100%;
  height: calc( 100% - 56px );
  font-size: 14px;
  background-color: #f1f1f1;
  &::before {
    content:'';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

export const LoginBox = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Input = styled.input``;

export const Button = styled.button``;