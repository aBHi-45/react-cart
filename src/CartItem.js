import styles from "./index.css";
import React from "react";

class CartItem extends React.Component {
    render (){
        return (
            <div className="cart-item">
                <div className="left-block">
                <img className="image"></img>
                </div>
                <div className="right-block">
                    <div> Phone </div>
                    <div> Rs 999 </div>
                    <div> Qty: 1 </div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;