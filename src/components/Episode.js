/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState} from 'react';
import { useAxiosGet } from '../Hooks/HttpRequests'




function Episodes(props){
  const [gat, setGat] = useState(0)
  const [data, setData] = useState({
      description: 'descrição',
      iframe: "iframe",
      image: "image",
      subtitle: "subtitle",
      title: "Title",
  })
  const url = `https://api.jsonbin.io/b/5f07ca805d4af74b01299012/23`
  let itens = useAxiosGet(url)
  let dataArray = itens.data;
  
    useEffect(()=>{
      if(dataArray) {
        const base = Math.random() * 10
        const factor = parseInt(base.toPrecision(1))
        if (typeof factor === 'number') {
          console.log('int')
        }
        console.log(typeof factor);
        setData(dataArray[factor])
      }
    }, [dataArray, gat])
    const handleClick = () => {
        setGat(Math.random())
    }
    return (
        <div className='episodeContent'>
        <div className='episodeTitle'>
        <h1 className='episodeName'> { data.title } </h1>
        <button type="submit" onClick={handleClick}>NOVO EPISÓDIO</button>
        </div>
        <img 
          src={data.image}
          atl='decorative'
          className='imageHome' 
        />
        <div className='episodeInfo' >            
            <p className='episodeInfo' >{ data.subtitle}</p>
            <p className='episodeInfo' >{ data.description }</p>
        <iframe
          width="100%" 
          height="166" 
          scrolling="no" 
          frameborder="no" 
          allow="autoplay" 
          src={data.iframe}
          >
                </iframe>
        
          <p className='episodeInfo' >{ data.description }</p>
        </div>
          <br />
          <br />
          <br />
        </div>
    );
}

export default Episodes;
