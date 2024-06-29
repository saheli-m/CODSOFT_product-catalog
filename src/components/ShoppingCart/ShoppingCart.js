import React from 'react';
import './ShoppingCart.css';
import { useNavigate, Link } from 'react-router-dom';

function ShoppingCart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

  const navigate = useNavigate();

  return (
    <div className="shopping-cart mt-3">
      <Link to="/">
        <i className="fa-solid fa-house ps-3"></i>
      </Link>
      <div className='header'>
        <h2>Shopping Cart</h2>
      </div>
      {cart.length === 0 ? (
        <p className='text-center mt-3'>The cart is empty!</p>
      ) : (
        <div className='cart-items'>
          {cart.map((product) => (
            <div 
              key={product.id} 
              className='item' 
              role="button"
              tabIndex={0}
              onClick={() => {
                navigate(`/product-details/${product.id}`);
              }}
            >
              <img src={product.image} alt={product.name} /> 
              <p>{product.name}</p> 
              <p>${product.price}</p>
              <p id='quant'>Quantity: {product.quantity || 1}</p>           
              <button onClick={(event) => { event.stopPropagation(); removeFromCart(product.id) }} className='btn btn-danger'>Remove</button>
            </div>            
          ))}
        </div>
      )}
      <div className="footer">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default ShoppingCart;

