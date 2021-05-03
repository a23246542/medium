import React, { memo } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import boardImg1 from '../../../assets/recommend/recommend-member.png';
import boardImg2 from '../../../assets/recommend/recommend-column.png';
import boardImg3 from '../../../assets/recommend/recommend-publishing.png';
import boardImg4 from '../../../assets/recommend/recommend-serialization.png';

const Recommend = () => {
  console.log('Recommend render');
  return (
    <RecommendWrapper>
      <RecommendItem imgUrl={boardImg1} />
      <RecommendItem imgUrl={boardImg2} />
      <RecommendItem imgUrl={boardImg3} />
      <RecommendItem imgUrl={boardImg4} />
    </RecommendWrapper>
  );
};

export default memo(Recommend);
