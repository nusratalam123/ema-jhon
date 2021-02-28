import React from 'react';

const Cart = (props) => {
    const cart=props.cart
   const total=cart.reduce((total,prod)=>total+prod.price,0)
    // 
    let shipping=0;
    if(total>35){
        shipping=15.99;
    }
    else if(total>15){
        shipping=4.99
    }
    else{
        shipping=0.00;
    }
    const tax=(total/10).toFixed(2);
    const grandTotal=(total+shipping+Number(tax)).toFixed(2)
    const intNumber=num=>{
        return Number(num)
    }
    return (
        <div>
           <h1>Order summery</h1> 
           <h3>Item order:{cart.length}</h3>
           <h3>product price:{intNumber(total)}</h3>
           <h3>shipping price:{shipping}</h3>
           <h3>tax:{tax}</h3>
           <h3>total price:{grandTotal}</h3>
        </div>
    );
};

export default Cart;