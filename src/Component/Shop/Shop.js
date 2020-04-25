import React from 'react';
import fakeData from '../../fakeData/';
import {useState} from 'react';
import './Shop.css'
import Product from '../Proudect/Product';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    return (
        <div className="shop-ontainer">
            <div className="product-container">
                {
                    products.map(prod => <Product product={prod}></Product>)
                }
            </div>
            <div cart-container>
                <h2>This is cart</h2>

            </div>


        </div>

        
    );
};

export default Shop;