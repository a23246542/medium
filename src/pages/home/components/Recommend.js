import React,{ memo } from 'react'
import { RecommendWrapper, RecommendItem } from '../style';

const Recommend = memo(() => {
  console.log('Recommend render');
  return (
    <RecommendWrapper>
      {/* <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"/>
      <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"/> */}
      <RecommendItem imgUrl="https://source.unsplash.com/random/280x50"/>
      <RecommendItem imgUrl="https://source.unsplash.com/random/280x49"/>
      {/* <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"/> */}
    </RecommendWrapper>
  )
})

export default Recommend

