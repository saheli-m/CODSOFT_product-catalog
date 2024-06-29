import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      cart.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart([...cart]);
  };  
  
  const removeFromCart = (productId) => {
    const existingItemIndex = cart.findIndex((item) => item.id === productId);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
  
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
  
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };    

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartFromStorage);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCatalog addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/product-details/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;




