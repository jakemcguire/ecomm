import React, { Component } from 'react';
import './ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <table>
      	<tr>
      		<th>Product Description</th>
      		<th>Price</th>
      		<th>Stock</th>
      	</tr>
      	{ this.props.products.map((product) => 
      			<tr>
      				<td>{ product.description }</td>
		      		<td>{ product.price }</td>
		      		<td>{ product.stock }</td>
      			</tr>
      	)}
      </table>
    );
  }
}

export default ProductList;
