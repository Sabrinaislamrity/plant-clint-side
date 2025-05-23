import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import wateringImg from '../assets/watering.jpg';
import sunlightImg from '../assets/sunlight.jpg';
import varietiesImg from '../assets/varieties.jpg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full mx-auto p-4">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={wateringImg}
            alt="Watering Tips"
            className="w-full h-64 sm:h-96 md:h-[650px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-7 rounded-xl max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Watering Tips
            </h2>
            <p className="text-sm sm:text-lg md:text-xl">
              Water your plants early in the morning or late in the afternoon to prevent evaporation.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={sunlightImg}
            alt="Sunlight Needs"
            className="w-full h-64 sm:h-96 md:h-[650px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-7 rounded-xl max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Sunlight Needs
            </h2>
            <p className="text-sm sm:text-lg md:text-xl">
              Most indoor plants need bright, indirect sunlight for 4–6 hours a day.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={varietiesImg}
            alt="Plant Varieties"
            className="w-full h-64 sm:h-96 md:h-[650px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-7 rounded-xl max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Plant Varieties
            </h2>
            <p className="text-sm sm:text-lg md:text-xl">
              Explore ferns, succulents, and flowering plants that thrive indoors.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
