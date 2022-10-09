import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css'

const Home = () => {
    const shirts = useLoaderData();

    const [cart, setCart] = useState([])
    let handleBtn = shirt => {
        let exist = cart.find(st => st._id === shirt._id);
        if (exist) {
            alert('already added to the list')
        }
        else {
            let newCart = [...cart, shirt]
            setCart(newCart)
        }
    }

    const removeBtn = st => {

        let remain = cart.filter(rm => rm._id !== st._id);
        setCart(remain)
    }
    return (
        <div className='container'>
            <div className='catagory'>
                <h3>Shop Catagories {shirts.length}</h3>
                <div className='cards'>
                    {
                        shirts.map(shirt => <Shirt key={shirt._id} shirt={shirt} handleBtn={handleBtn}></Shirt>)
                    }
                </div>
            </div>
            <div >
                <Cart removeBtn={removeBtn} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;