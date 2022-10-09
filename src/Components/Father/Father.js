import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { houseContext } from '../Grandpa/Grandpa';
import Sister from '../Sister/Sister';

const Father = () => {
    const [house, setHouse] = useContext(houseContext)
    return (
        <div className='context'>
            <h3>father</h3>
            <h5>House:{house}</h5>
            <button onClick={() => setHouse(house + 1)}>Add</button>
            <section className='flex'>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;