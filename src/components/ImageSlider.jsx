import  { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImage1 from '../assets/carrusel/a.png';
import heroImage2 from '../assets/carrusel/b.png';
import heroImage3 from '../assets/carrusel/c.png';
import heroImage4 from '../assets/carrusel/d.png';
import heroImage5 from '../assets/carrusel//e.png';
import heroImage6 from '../assets/carrusel/f.png';
import heroImage7 from '../assets/carrusel/g.png';
import heroImage8 from '../assets/carrusel/h.png';
import heroImage9 from '../assets/carrusel/i.png';

const ImageSlider = () => {
  const [currentIndex, ] = useState(0);

  const images = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
    heroImage7,
    heroImage8,
    heroImage9,
  ];

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        selectedItem={currentIndex}
        interval={5000} 
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
