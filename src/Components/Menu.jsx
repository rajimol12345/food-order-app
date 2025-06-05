import React from 'react';

const Menu = () => {
  return (
    <div>
    <section class="menu-section">
    <h2>Our Menu</h2>
    <div class="menu-grid">
      <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1604908553725-236f91ba6769" alt="Pizza"/>
        <div class="info">
          <h3>Cheese Pizza</h3>
          <p>Classic cheesy delight</p>
          <div class="price">$10.99</div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1605478371323-b91c5d542ff5" alt="Burger"/>
        <div class="info">
          <h3>Beef Burger</h3>
          <p>Grilled and juicy</p>
          <div class="price">$8.49</div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1613145998135-67e8a79b9ed1" alt="Dessert"/>
        <div class="info">
          <h3>Chocolate Cake</h3>
          <p>Rich and moist</p>
          <div class="price">$6.99</div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90" alt="Pasta"/>
        <div class="info">
          <h3>Spaghetti</h3>
          <p>With creamy Alfredo sauce</p>
          <div class="price">$9.99</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </section>

    </div>
  );
};

export default Menu;
