import FeaturesTiles from '@/components/homepage/featuresTiles/FeaturesTiles';
import Banner from '@/components/shared/banner/Banner';
import Marqueee from '@/components/homepage/marquee/Marqueee'
import React from 'react';

const Home = () => {
  
  return (
    <div>
      <Banner/>
      <Marqueee/>
      <FeaturesTiles/>
    </div>
  );
};

export default Home;