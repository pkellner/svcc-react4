import React from 'react';
import HomeHeader from './HomeHeader';
import HomeContainer from './HomeContainer';
import Test from './Test';

export default function Home() {
  return (
    <div>
      <Test/>
      <HomeHeader />
      <HomeContainer />
    </div>
  );
}
