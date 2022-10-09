import React from 'react';
import './Shirt.css'

const Shirt = ({ shirt, handleBtn }) => {
    const { picture, price, name } = shirt
    return (
        <div className='card'>
            <img src={picture} alt="img thumb" />
            <h4>{name}</h4>
            <h5>Price:{price}</h5>
            <button className='btn' onClick={() => handleBtn(shirt)}>Add to Cart</button>
        </div>
    );
};

export default Shirt;