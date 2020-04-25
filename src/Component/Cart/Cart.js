import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price , 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;   
    }
    const tax = total /20;

    let shipping =0;
    if (total > 35) {
        shipping = 0 ;   
    }
    else if (total > 15) {
        shipping = 4.99;
        
    } else if (total >0) {
        shipping = 12.99   
    }

    // const numberFormate = (num) => {
    //     const dec = num.toFixed(2);
    //     return Number(dec);
    // }

    const grandTotal = total + tax + shipping;

    return (
        <div className="cart-item">
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p> <small>Shipping cost: {shipping.toFixed(2)}</small> </p>
            <p> <small>Tax 5% : {tax.toFixed(2)}</small> </p>
            <p>Total Price : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;