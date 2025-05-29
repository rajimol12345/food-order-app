import React from 'react';
import './Restaurants.css'; // External CSS file

// Dummy data for demonstration
const restaurantData = [
  {
    id: 1,
    name: 'Spice Garden',
    image: 'https://source.unsplash.com/400x250/?indian-food',
    cuisine: 'Indian',
    rating: 4.5,
    deliveryTime: '30 mins',
  },
  {
    id: 2,
    name: 'Sushi World',
    image: 'https://source.unsplash.com/400x250/?sushi',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: '25 mins',
  },
  {
    id: 3,
    name: 'Burger Hub',
    image: 'https://source.unsplash.com/400x250/?burger',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: '20 mins',
  },
  {
    id: 4,
    name: 'Vegan Delight',
    image: 'https://source.unsplash.com/400x250/?vegan,food',
    cuisine: 'Vegan',
    rating: 4.6,
    deliveryTime: '35 mins',
  },
];

function Restaurants() {
  return (
    <div className="restaurants-container">
      <h2 className="section-title">Available Restaurants</h2>
      <div className="restaurant-grid">
        {restaurantData.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-photo"
            />
            <h3 className="restaurant-name">{restaurant.name}</h3>
            <p className="restaurant-info">{restaurant.cuisine}</p>
            <p className="restaurant-meta">
              ⭐ {restaurant.rating} • {restaurant.deliveryTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
