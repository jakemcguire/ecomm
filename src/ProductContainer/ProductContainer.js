import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import './ProductContainer.css';

const products = [
  { id: '001', description: 'Product A', price: 19.99, stock: 10 },
  { id: '002', description: 'Product B', price: 25.49, stock: 0 },
  { id: '003', description: 'Product C', price: 99.99, stock: 1 },
  { id: '004', description: 'Product D', price: 39.99, stock: 5 },
  { id: '005', description: 'Product E', price: 14.98, stock: 0 }
];

class ProductContainer extends Component {
  render() {
    return (
    	<div className="product-list">
	      <ProductList products={ products } />
      </div>
    );
  }
}

export default ProductContainer;
