import styled from 'styled-components/macro';

export const LoginWrapper = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  font-size: 14px;
  background-color: #f1f1f1;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

export const LoginBox = styled.div`
  display: inline-block;
  width: 400px;
  margin: -30px auto 0; /* !! */
  padding: 50px 50px 30px;
  vertical-align: middle;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Input = styled.div`
  position: relative;
  padding: 10px 20px 10px 50px;

  /* border-radius: 4px; */
  border: 1px solid #c8c8c8;
  background: #f7f7f7;

  > i {
    position: absolute;
    top: 50%;
    left: 20px; /* !!!沒有left會被padding推到 */
    font-size: 20px;
    transform: translateY(-50%);
  }

  > input {
    width: 100%; /* !!!不會破版 */
    height: 30px;
    border: none;
    font-size: 20px;
    background: none;

    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 20px auto 0;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
