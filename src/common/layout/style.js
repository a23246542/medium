import styled from 'styled-components/macro';

const textLight = '#969696';
const aColor = '#333';

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 30px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const Main = styled.main`
  float: left;
  width: 700px;

  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const Aside = styled.div`
  position: sticky;
  top: 56px;
  width: calc(100% - 700px);
  float: left;
  padding-left: 35px;
  box-sizing: border-box;
`;

export const RecommendWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 10px;
  background: url(${(props) => props.imgUrl});
  /* background: url("../../images/recommed/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"); */
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  /* border: 1px solid #dcdcdc; */
  border-radius: 3px;
  text-align: center;

  .title {
    text-align: left;
    font-size: 14px;
    color: ${textLight};
  }
`;

export const WriterList = styled.ul`
  overflow: hidden;
  width: 100%;
  margin: 0 0 20px;
  text-align: left;
`;

export const WriterItem = styled.li`
  overflow: hidden;
  margin-top: 12px;

  .avatar {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .follow {
    display: block;
    float: right;
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }

  .fa-plus {
    margin-right: 5px;
    font-size: 10px;
  }

  .name {
    /* margin-left: 60px; */
    padding-top: 5px;
    font-size: 14px;
    color: ${aColor};
  }

  p {
    margin-top: 5px;
    font-size: 12px;
    color: ${textLight};
  }
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 60px;
  right: 50%;
  transform: translate(500px);
  z-index: 100;
  width: 70px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  /* background-color: #ccc; */
`;
