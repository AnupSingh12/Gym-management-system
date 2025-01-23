import React,{useState} from "react";

function Cart(){

    const [cart,setCart] = useState([]);

    function checkout(){
        alert("Purchase Successfull! ");
        setCart([]);
    };

    return(
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item,index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            {cart.length > 0 && <button onClick={checkout} >Checkout</button>}
        </div>
    );

};

export default Cart;