import styles from "./index.css";
import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty: 1,
            img: ""
        }
    }
    render (){
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img className="image"></img>
                </div>
                <div className="right-block">
                    <div> {title} </div>
                    <div>Rs {price} </div>
                    <div> {qty} </div>
                    <div className="cart-item-actions">
                        <img alt="Increase" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1640700228~hmac=ced93ff4fe9b29e4388c7028f1580c4b" className="action-icons" />
                        <img alt="Decrease" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1640700158~hmac=22179246ea7964fc3628e45aabf12082" className="action-icons" />
                        <img alt="Delete" src="https://cdn-icons.flaticon.com/png/512/2782/premium/2782988.png?token=exp=1640700407~hmac=1bdda28a489878c8319bee2caf5ea342" className="action-icons" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;