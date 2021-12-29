import styles from "./index.css";
import React from "react";

const CartItem = (props) => {
    // constructor(){
    //     super();
    //     this.state = {
    //         price : 999,
    //         title : 'Phone',
    //         qty: 1,
    //         img: ""
    //     }
    // }
    // IncreaseQuantity = ()=>{
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty +1
    //         }
    //     }); 
    // }
    // DecreaseQuantity = () =>{
    //     if(this.state.qty > 0){
    //         this.setState((prevState) => {
    //             return{
    //                 qty: prevState.qty -1
    //             }
    //         });
    //     }
    // }
    // DeleteQuantity = () =>{
    //     this.setState({
    //         qty: 0
    //     });
    // }
    const { price, title, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img className="image" src={product.img}></img>
            </div>
            <div className="right-block">
                <div> {title} </div>
                <div>Rs {price} </div>
                <div> {qty} </div>
                <div className="cart-item-actions">
                    <img
                        alt="Increase"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                        className="action-icons"
                        onClick={() => onIncreaseQuantity(props.product)} />
                    <img
                        alt="Decrease"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        className="action-icons"
                        onClick={() => onDecreaseQuantity(props.product)} />
                    <img
                        alt="Delete"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        className="action-icons"
                        onClick={() => onDeleteProduct(product.id)} />
                </div>
            </div>
        </div>
    );
}

export default CartItem;