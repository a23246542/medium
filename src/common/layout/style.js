import styled from 'styled-components/macro';

const textLight = '#969696';
const aColor = '#333';

export const Wrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const Main = styled.main`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;

  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const Aside = styled.div`
  width: 280px;
  box-sizing: border-box;
  float: right;
`;

export const RecommendWrapper = styled.div`
  margin: 40px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 10px;
  background: url(${(props) => props.imgUrl});
  /* background: url("../../images/recommed/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"); */
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
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
