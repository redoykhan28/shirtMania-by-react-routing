import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeBtn }) => {
    console.log(cart)
    return (
        <div className={`cart ${cart.length === 0 ? 'grey' : 'coral'}`}>
            <h3>Order Cart</h3>
            <h3>Selected Items:{cart.length}</h3>
            <ol className='ol'>
                {
                    cart.map(st => <li key={st._id}>
                        {st.name}
                        <button onClick={() => removeBtn(st)} className='btn2'>X</button>
                    </li>)
                }

                {
                    cart.length === 0 ? <p style={{ textAlign: 'start' }}>Please select an item</p> : ''
                }
            </ol>
        </div>
    );
};

export default Cart;