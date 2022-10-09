import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const houseContext = createContext('context')//create context
export const moneyContext = createContext('context2')

const Grandpa = () => {

    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(10000)
    return (
        <houseContext.Provider value={[house, setHouse]}>
            <moneyContext.Provider value={[money, setMoney]}>
                <div className='context'>
                    <h3>Grandpa</h3>
                    <section className='flex'>
                        <Father></Father>
                        <Mother></Mother>
                        <Uncle></Uncle>
                    </section>
                </div>
            </moneyContext.Provider>

        </houseContext.Provider>
    );
};

export default Grandpa;