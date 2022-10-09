import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <div className='title'>
                <h3>Shoopeezoo</h3>
            </div>
            <div className='link'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/orders'}>Order</NavLink>
                <NavLink to={'/grandpa'}>Grandpa</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;