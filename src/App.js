import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import ProductContainer from './ProductContainer/ProductContainer';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
