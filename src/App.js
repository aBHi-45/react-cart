import CartItem from "./CartItem";
import Cart from "./Cart";
import styles from "./index.css";
import Navbar from "./Navbar";
import React from "react";
import db from './firebaseConfig';
import {addDoc, collection, deleteDoc, doc, getDocs, increment, onSnapshot, updateDoc} from 'firebase/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
};

componentDidMount() {
  const colRef = collection(db, 'products');

  onSnapshot(colRef, (snapshot) => {
    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    })

    this.setState({
      products,
      loading: false
    });
  })
}

handleIncreaseQuantity = (product) => {
    const docRef = doc(db, 'products', product.id);
    updateDoc(docRef, {
      qty: product.qty + 1,
    });
}

handleDecreaseQuantity = (product) => {
  const docRef = doc(db, 'products', product.id);
  if(product.qty === 0) return;
  updateDoc(docRef, {
    qty: product.qty - 1,
  });
}

handleDeleteProduct = (id) => {
    const docRef = doc(db, 'products', id);
    deleteDoc(docRef);
}

getCartCount = () =>{
  const {products} = this.state;

  let count = 0;
  products.forEach((product) => {
    console.log(count);
    console.log(product.qty);
    count = count + product.qty;
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

addProduct(){
  const colRef = collection(db, 'products');
  addDoc(colRef, {
    img: '',
    qty: 3,
    price: 5999,
    title: 'Watch'
  });
}

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{ fontSize: 20, padding: 20}}>Add a new product</button>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}/>
        {this.state.loading && <h1>Loading..</h1>}
        <div style={{fontSize: 20, padding: 10}}>Total Price: Rs {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
