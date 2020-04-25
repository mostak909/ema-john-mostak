import React from 'react';
import fakeData from '../../fakeData/';
import {useState} from 'react';
import './Shop.css'
import Product from '../Proudect/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handelAddProduct =(product) => {
        // console.log("product add", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-ontainer">
            <div className="product-container">
                {
                    products.map(prd => <Product
                        handelAddProduct ={handelAddProduct}
                         product={prd}
                         ></Product>)
                }
            </div>
            <div cart-container>
                <Cart cart={cart}></Cart>
            </div>


        </div>

        
    );
};

export default Shop;