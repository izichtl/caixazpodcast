import React from 'react';
import { Link } from 'react-router-dom'
import Episode from '../components/Episode'
import HomeFixedContent from '../components/HomeFixedContent'
import ReactPlayer from "react-player"



function Home(){

        
    return (
        <div className='homeContent'>
          <HomeFixedContent/>
          <Episode/>
        </div>
    );
}

export default Home;
