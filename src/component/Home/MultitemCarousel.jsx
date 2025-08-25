import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { topMeels } from "./topMeels";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

const MultitemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
  };
  return (
    <div>
        <Slider {...settings}>
            {topMeels.map((item) => (
                <CarouselItem 
                key={item.title} 
                image={item.image} 
                title={item.title} />
            ))}
        </Slider>
    </div>
  )
}

export default MultitemCarousel