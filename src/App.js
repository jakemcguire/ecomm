import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import Footer from './Footer/Footer';

const products = [
  { id: '001', description: 'Product A', price: 19.99, stock: 10 },
  { id: '002', description: 'Product B', price: 25.00, stock: 0 },
  { id: '003', description: 'Product C', price: 100.00, stock: 1 },
  { id: '004', description: 'Product D', price: 39.99, stock: 5 },
  { id: '005', description: 'Product E', price: 1.99, stock: 0 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductList products={products} />
        <Footer />
      </div>
    );
  }
}

export default App;
