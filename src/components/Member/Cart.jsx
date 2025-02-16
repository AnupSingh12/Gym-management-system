import React,{useState} from "react";

function Cart(){

    const [cart,setCart] = useState([]);

    function checkout(){
        alert("Purchase Successfull! ");
        setCart([]);
    };

    return(
        <div className="cart" >
            <h2>Cart</h2>
            <ul>
                {cart.map((item,index) => (
                    <li key={index} className="cart-item" >
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            {cart.length > 0 && <button className="checkout-button" onClick={checkout} >Checkout</button>}
        </div>
    );

};

export default Cart;