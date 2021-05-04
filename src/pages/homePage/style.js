import styled from 'styled-components/macro';
import imgUrl from '../../assets/topic/topic-issue.png';

export const HomeWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 960px;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;

  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px;
  /* margin-left: -18px; */
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  /* margin-left: 18px; */
  margin-right: 25px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`;

const getAllPicByContext = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((imgUrl, index) => {
    images[imgUrl.replace('./', '')] = requireContext(imgUrl)['default'];
  });
  return images;
};
const imageObj = getAllPicByContext(
  // require.context('../../assets/topic', true, /^\.\/.*\.png$/)
  require.context('../../assets/topic', true, /\.png$/)
);

export const TopicIcon = styled.div`
  float: left;
  width: 32px;
  height: 32px;
  margin-right: 4px;
  background-image: ${(props) =>
    'url(' + imageObj['topic-' + props.icon + '.png'] + ')'};
  background-repeat: no-repeat;
  background-size: 60% 60%;
  background-position: 50% 50%;
`;

export const ListItem = styled.li`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;

  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }

  &.fade-enter,
  &.fade-appear {
    opacity: 0;
  }

  &.fade-enter-active,
  &.fade-appear-active {
    opacity: 1;
    transition: opacity 0.4s ease-in;
  }

  &.fade-enter-done {
    opacity: 1;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;

  .title {
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #777;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const NoMoreTxt = styled.p`
  margin: 30px 110px 50px 0;
  text-align: center;
  font-size: 15px;
`;
