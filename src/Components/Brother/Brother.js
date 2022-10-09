import React, { useContext } from 'react';
import { houseContext, moneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [house] = useContext(houseContext)
    const [money] = useContext(moneyContext)
    return (
        <div className='context'>
            <h3>Brother</h3>
            <h5>House: {house}</h5>
            <h5>Money: {money}</h5>
        </div>
    );
};

export default Brother;