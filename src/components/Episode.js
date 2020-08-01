import React from 'react';
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player"



function Episodes(){

        
    return (
        <div className='episodeContent'>
        <div className='episodeTitle'>
        <h1 className='episodeName'>Maker's Place</h1>
        <button className='episodeButton' type="button" onClick={null}>Random</button>
        </div>
        <ReactPlayer 
        width='80%'
        height='60px'
        controls={true}
        url='https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3' />
        
        <div className='episodeInfo' >            
            <p className='episodeInfo' >Titulo do Post</p>
            <p className='episodeInfo' >Volutpat est velit egestas dui. Velit egestas dui id ornare arcu odio ut sem. 
            Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.
            </p>
        </div>
        
        </div>
    );
}

export default Episodes;
