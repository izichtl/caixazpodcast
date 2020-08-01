import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player"


function Card(props) {
    return (
        <div className='CardConteiner'>
            <img className='cardImg' src={props.item.image} />
            <div className='cardInfo' >
                <p className='cardTitle'>{props.item.title}</p>
                <p>{props.item.subtitle}
                </p>
                <p className='cardText'>{props.item.description}</p>
            </div>
            

        </div>
    )
}

export default Card;