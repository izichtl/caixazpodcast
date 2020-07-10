import React from 'react';
import { Link } from 'react-router-dom'


function Header() {

    let b = () => {
        return null
    }
    return (
        <div className='header'>
            <span className='logo'>acaixaz</span>
            <div className='nav'>
                
                <li>
                    <Link
                        to='/'
                        className='links'
                        onClick={b}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        to='/about'
                        className='links'
                        onClick={b}
                    >About</Link>
                </li>
                <li>
                    <Link
                        to='/contact'
                        className='links'
                        onClick={b}
                    >Contato</Link>
                </li>
            </div>


        </div>
    );
}

export default Header;
