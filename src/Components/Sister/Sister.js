import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div className='context'>
            <h3>Sister</h3>
            <h5>Money: {money}</h5>
            <button onClick={() => setMoney(money + 10000)}>Add</button>
        </div>
    );
};

export default Sister;