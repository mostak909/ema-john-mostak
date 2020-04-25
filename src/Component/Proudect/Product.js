import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product.name);
    const { img, name, price, seller, stock } = props.product;

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-detil">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <h3>${price}</h3>
                <br />
                <p><small>Only {stock} left in stock</small></p>
                <button className="main-button"><FontAwesomeIcon icon="faCoffee" /> add to cart</button>
            </div>


        </div>
    );
};

export default Product;