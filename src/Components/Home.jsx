import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Import local images
import img1 from './img/img1.webp';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpg';

function Home() {
  return (
    <main className="container my-5">
      <h1 className="home-title text-center mb-4">Welcome to FoodExpress</h1>
      <p className="lead text-center mb-5">
        Discover the best restaurants and order your favorite food online.
      </p>

      <section className="featured-restaurants">
        <h2 className="section-heading mb-4">Featured Restaurants</h2>

        <div id="featuredRestaurantsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* Item 1 */}
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                  <h3>Pizza Heaven</h3>
                  <p>Delicious wood-fired pizzas and more.</p>
                </div>
                <div className="col-md-6 text-center">
                  <img src={img1} alt="Pizza Place" className="restaurant-img rounded" />
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                  <h3>Sushi World</h3>
                  <p>Fresh and authentic Japanese sushi.</p>
                </div>
                <div className="col-md-6 text-center">
                  <img src={img2} alt="Sushi Bar" className="restaurant-img rounded" />
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                  <h3>Burger Hub</h3>
                  <p>Juicy burgers with premium ingredients.</p>
                </div>
                <div className="col-md-6 text-center">
                  <img src={img3} alt="Burger Joint" className="restaurant-img rounded" />
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#featuredRestaurantsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#featuredRestaurantsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
