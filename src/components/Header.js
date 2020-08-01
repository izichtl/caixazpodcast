import React from 'react';
import { Link } from 'react-router-dom'


function Header() {

    let b = () => {
        return null
    }
    return (
        <div className='header'>
            <span className='logo'>
            <Link 
                to='/'
                className='links'
                onClick={b}
                >
            caixaz </Link></span>
            
            <div className='nav'>
                <li>
                    <Link
                        to='/episodepage'
                        className='links'
                        onClick={b}
                    >Episodes</Link>
                </li>
                <li>
                    <Link
                        to='/about'
                        className='links'
                        onClick={b}
                    >About</Link>
                </li>
            </div>


        </div>
    );
}

export default Header;
