import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = (props) => {
    const {name,img,seller,price,stock}=props.product
    return (
        <div className="product" >
           <div>
               <img src={img} alt=""/>
           </div>
           <div>
               <h3 className="product-name">{name}</h3>
               <br/>
               <p><small>By:{seller}</small></p>
               <br/>
               <p>${price}</p>
               <br/>
               <p>Only{stock}left in stock-order soon</p>
               <button className="button" onClick={() =>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to card</button>

           </div>
           
        </div>
    );
};

export default Product;