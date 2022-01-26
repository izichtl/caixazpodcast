import React from 'react';
import Episode from '../components/Episode'
import HomeFixedContent from '../components/HomeFixedContent'

function Home(){
  return (
    <div className='homeContent'>
          <HomeFixedContent/>
          <Episode
            />
        </div>
    );
}

export default Home;
