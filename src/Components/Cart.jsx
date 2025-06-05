import React, { useState } from 'react';
import cheesePizzaImg from './img/cheese-piza.avif';
import beefburger from './img/beef burger.avif';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Cheese Pizza',
      description: 'Classic delight with extra cheese',
      price: 10.99,
      quantity: 1,
      image: cheesePizzaImg,
    },
    {
      id: 2,
      name: 'Beef Burger',
      description: 'Juicy grilled beef patty',
      price: 8.49,
      quantity: 2,
      image: beefburger,
    },
  ]);
  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>

      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
          <div className="item-quantity">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </div>
          <div className="item-price">${item.price.toFixed(2)}</div>
          <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}

      <div className="summary">
        <h3>Total: ${calculateTotal()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
