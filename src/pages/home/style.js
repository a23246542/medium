import styled from 'styled-components/macro';

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
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topicItem__pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
    .title {
      font-size: 18px;
      line-height: 1.5;
      /* line-height: 27px; */
      font-weight: bold;
      color: #333;
    }

    .desc {
      line-height: 24px;
      font-size: 13px;
      color: #777;
    }
`


export const RecommendWrapper = styled.div`
	margin: 50px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
  border-radius: 15px;
  margin-bottom: 20px;
	background: url(${(props)=>props.imgUrl});
	background-size: contain;
`;


export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
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
`
export const BackTop = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 100;
  width: 70px;
  height:50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  border-radius:10px;
  border: 1px solid #ccc;
  cursor: pointer;
  /* background-color: #ccc; */
`
