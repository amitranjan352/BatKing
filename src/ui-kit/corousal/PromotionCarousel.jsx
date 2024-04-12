import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PromotionCarousel.css'; // Import CSS for styling

const PromotionCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Promotion 1" />
          <p className="legend">Promotion 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Promotion 2" />
          <p className="legend">Promotion 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Promotion 3" />
          <p className="legend">Promotion 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default PromotionCarousel;
