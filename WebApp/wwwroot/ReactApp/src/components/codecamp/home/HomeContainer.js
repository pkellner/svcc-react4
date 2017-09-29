import React from 'react';
import HomeSessionCount from './HomeSessionCount';
import HomeSessionFilter from './HomeSessionFilter';
import HomeFilterView from './HomeFilterView';
import HomeSessions from './HomeSessions';
import HomeSpeakersCarousel from './HomeSpeakersCarousel';

export default function HomeContainer() {
  return (
    <div className="container-main events">
      <div className="row">
        <div className="col-12">
          <HomeSessionCount />
          <HomeSessionFilter />
          <HomeFilterView />
          <HomeSessions />
          <HomeSpeakersCarousel />
        </div>
      </div>
    </div>
  );
}
