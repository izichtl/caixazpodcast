import { set } from 'express/lib/application';
import React, { useEffect, useState } from 'react';
import Episode from '../components/Episode'
import HomeFixedContent from '../components/HomeFixedContent'
import { useAxiosGet } from '../Hooks/HttpRequests'




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
