import React,{ memo } from 'react'
import { RecommendWrapper, RecommendItem } from '../style';
import boardImg1 from "../../../images/recommend/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png";
import boardImg2 from '../../../images/recommend/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png';
import boardImg3 from '../../../images/recommend/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png';
import boardImg4 from '../../../images/recommend/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png';

const Recommend = memo(() => {
  console.log('Recommend render');
  return (
    <RecommendWrapper>
      <RecommendItem imgUrl={boardImg1}/>
      <RecommendItem imgUrl={boardImg2}/>
      <RecommendItem imgUrl={boardImg3}/>
      <RecommendItem imgUrl={boardImg4}/>
    </RecommendWrapper>
  )
})

export default Recommend

