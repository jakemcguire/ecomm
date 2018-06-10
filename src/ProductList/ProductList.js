import React, { Component } from 'react';
import './ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <table>
      	<thead>
	      	<tr>
	      		<th>Product Description</th>
	      		<th>Price</th>
	      		<th>Stock</th>
	      	</tr>
      	</thead>
      	<tbody>
      	{ this.props.products.map((product) => 
      			<tr key={ product.id }>
      				<td>{ product.description }</td>
		      		<td>{ product.price }</td>
		      		<td>{ product.stock }</td>
      			</tr>
      	)}
      	</tbody>
      </table>
    );
  }
}

export default ProductList;
