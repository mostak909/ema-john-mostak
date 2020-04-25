import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="Logo"/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Review</a>
               <a href="/manage">Manage Inventory</a>
               <div>
                    <input type="search" name="" id="" placeholder="Search your Product"/>  
                    
               </div>
               
           </nav>
        </div>
    );
};

export default Header;