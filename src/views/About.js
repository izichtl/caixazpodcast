import React from 'react';
import { Link } from 'react-router-dom'
import AwesomeComponent from '../components/Loading'



function About(){
    let link = 'https://images.unsplash.com/photo-1572461134662-82a5ebf0fd24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80'
        
    return (
        
        <div className='aboutContent'>
            

        <div className='aboutTitle'>
        <div className='aboutName'> 
        <h1 >Just two latin american guys</h1>
        </div>
        
        <div className='aboutImg' >     

        <img src={link} className='aboutImg1' />       
        <p className='aboutInfo' >Fun thread alert</p>
        <p className='aboutInfo' >
        Caixaz is a personal podcast realized by Ivan Zichtl and Thiago Zichtl, short talks about brazillian life style, art and places.
        </p>
        <p className='aboutInfo' >
        This project uses example images from unsplash!
        </p>
        
        </div>
        
        </div>

    </div>
    );
}

export default About;
