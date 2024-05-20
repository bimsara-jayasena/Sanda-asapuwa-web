import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Create this file for custom styles

const ImageCarousel = ({ images,slidshow }) => {
  const settings = {    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidshow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplayDirection: 'ltr'
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;