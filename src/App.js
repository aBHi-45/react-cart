import CartItem from "./CartItem";
import Cart from "./Cart";
import styles from "./index.css";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 199,
                title: 'Watch',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1582150264904-e0bea5ef0ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
                id: 2
            },
            {
                price: 59999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                id: 3
            }
        ]
    }
};

handleIncreaseQuantity = (product) => {
    const {products} = this .state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products: products
    });
}

handleDecreaseQuantity = (product) => {
    const {products} = this .state;
    const index = products.indexOf(product);
    if(products[index].qty == 0) return;
    products[index].qty -= 1;
    this.setState({
        products: products
    });
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products:items
    });
}

getCartCount = () =>{
  const {products} = this.state;

  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let total = 0;

  products.map((product) => {
    total = total + product.qty*product.price;
  })

  return total;
} 

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}/>
        <div style={{fontSize: 20, padding: 10}}>Total Price: Rs {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
