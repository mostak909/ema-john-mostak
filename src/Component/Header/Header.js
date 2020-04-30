import React from 'react';
import logo from '../../images/logo1.png'
import menu from '../../images/menu.png'
import lan from '../../images/lan.png'
import cart from '../../images/cart.png'

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-main1">
                <div className="header-sub1">
                    <img src={menu} alt="Logo"/>
                </div>
                <div className="header-sub2">
                     <img src={logo} alt="Logo"/>
                </div>
                <div className="header-sub3">
                    <input type="search" name="" id="" placeholder="Search your Product"/>
               </div>
               <div className="header-sub4">
                    <img src={lan} alt="Logo"/>
               </div>
               <div className="header-sub5">
                    <p>Hello, Sign in<br/><span>Account & List</span></p>
                   
               </div>
               <div className="header-sub6">
                   <p>Returns <br/><span>& Orders</span></p>
               </div>
               <div className="header-sub7">
                     <img src={cart} alt="Logo"/>
               </div>
            </div>
            <div className="header-main2">
                <div className="header-sub2-1">
                    <p>Delivar To</p>
                </div>
                <div className="header-sub2-2">
                    <nav>
                       <a href="/shop">Shop</a>
                       <a href="/review">Review</a>
                       <a href="/inventory">Manage Inventory</a>
                    </nav>
                </div>
                <div className="header-sub2-3">
                    <p>Emajon's  Add response to COVIDE-19</p>
                </div>
            </div>
            

           
        </div>
    );
};

export default Header;