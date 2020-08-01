import React from 'react';
import { Link } from 'react-router-dom'
import AwesomeComponent from '../components/Loading'



function About(){
    let link = 'https://images.unsplash.com/photo-1572461134662-82a5ebf0fd24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80'
        
    return (
        
        <div className='episodeContent'>
            

        <div className='episodeTitle'>
        <h1 className='episodeName'>Just two latin american guys</h1>
        </div>
        
        <div>     

        <img className='aboutImg' src={link} />       
        <p className='episodeInfo' >Fun thread alert</p>
        <p className='episodeInfo' >
        Caixaz is a personal podcast realized by Ivan Zichtl and Thiago Zichtl, short talks about brazillian life style, art and places.
        </p>
        </div>
        
        </div>

        
    );
}

export default About;
