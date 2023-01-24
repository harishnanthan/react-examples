import React from 'react';
import HomeHeader from './helpers/HomeHeader';
import ProjectList from './helpers/ProjectList';

import './Home.scss';

const Home = () => {
  return (
    <div className="homepage">
      <HomeHeader />
      <ProjectList />
    </div>
  );
}

export default Home;