import React, { useContext } from 'react';
import { houseContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [house] = useContext(houseContext)

    return (
        <div className='context'>
            <h3>Uncle</h3>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Uncle;