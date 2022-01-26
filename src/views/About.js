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
        <div className='aboutInfo' >
        <h2>Desenvolvido por Ivan Zichtl</h2>
        <p className='aboutInfo'>
        Caixa Z podcast é um projeto de estudo, o objetivo foi realizar uma pagina de postagens com faixa de audio, 
        utilizando dados disponiveis de forma pública, como faixa de áudio, texto e imagens. Desenvolvido em react e hospedado na vercel. 
        </p>
        <p  className='aboutInfo'>
        Este projeto utiliza imagens from unsplash, audios from soundcloud e json from jsonbin.io
        </p>
        </div>       
        
        </div>
        
        </div>

    </div>
    );
}

export default About;
