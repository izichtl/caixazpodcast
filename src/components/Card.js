/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'


function Card(props) {
    return (
        <div className='CardConteiner'>
            <img className='cardImg' src={props.item.image} />
            <div className='cardInfo' >
                <h2 className='cardTitle'>{props.item.title}</h2>
                <h4>{props.item.subtitle}
                </h4>
                <p className='cardText'>{props.item.description}</p>
                <iframe
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameborder="no" 
                    allow="autoplay" 
                    src={props.item.iframe}
                  >
                </iframe>   
            </div>
            

        </div>
    )
}

export default Card;