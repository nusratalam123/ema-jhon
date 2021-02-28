import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css'


const Shops = () => {
const first10=fakeData.slice(0,10);
const [products,setProducts]=useState(first10);
const [cart,setcart]=useState([]);

const handleAddProduct=(product)=>{
    console.log("product click")
      const newCart= [...cart,product]
      setcart(newCart)
}
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    products.map(pd=><Product product={pd}
                    handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </ul>
            </div>
           <div className="card-container">
               <Cart cart={cart}></Cart>
              
           </div>
        </div>
    );
};

export default Shops;