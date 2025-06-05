import React from 'react';
import img1 from './img/pizza.avif';
import img2 from './img/burger.avif';
import img3 from './img/dessert.avif';
const Home = () => {

  return (
    <div>
      <main class="flex-grow-1 container-fluid my-6 px-6">
      <div class="row align-items-center">
       <div class="col-md-6 mb-4 mb-md-0">
        <div id="foodCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="Pizza" height="450" width="400" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Delicious Pizza</h5>
                <p>Hot, cheesy, and delivered fast to your door.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="Burger" height="450" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Juicy Burgers</h5>
                <p>Loaded with flavor and grilled to perfection.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="Desserts" height="450" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Sweet Desserts</h5>
                <p>Finish your meal with a delightful dessert.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm">
          <h2 class="text-danger fw-bold mb-3">
            Welcome to <span class="text-dark">EatYoWay</span>
          </h2>
          <p class="lead text-secondary">
            At <strong>EatYoWay</strong>, we bring mouthwatering dishes right to your doorstep. Whether you're craving a cheesy pizza, a juicy burger, or a sweet dessert to top off your meal, we’ve got you covered.
          </p>
          <p class="text-muted">
            Browse our <strong>Menu</strong> to explore a variety of delicious options. Place your order in just a few clicks and enjoy fast, reliable delivery from our kitchen to your table.
          </p>
          <p class="text-muted">
            Join thousands of happy customers and make your next meal unforgettable with <strong>EatYoWay</strong>.
          </p>
        </div>
      </div>
      </div>
      </main>
    </div>
  );
};

export default Home;
