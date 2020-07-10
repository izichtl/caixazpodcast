import React from 'react'
import { Link } from 'react-router-dom'


function Card() {
    return (
        <div className='div1'>



            <img className='cardImg' src={require('../img/01.jpg')} />






            <div className='cardInfo' >
                <h3 className='cardTitle'>Finibus Bonorum et Malorum</h3>
                <h4>Seção 1.10.32,escrita por Cícero em 45 AC
                </h4>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            </div>


        </div>
    )
}

export default Card;