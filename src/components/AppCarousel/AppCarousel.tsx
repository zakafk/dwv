import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AppCarouselItem } from './AppCarouselItem';
import src from './assets/mock_img.png';

import './appCarousel.scss';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "app-carousel",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const AppCarousel: FC = () => {
  const item = [src,src,src,src,src,src].map((item) => (
    <AppCarouselItem src={item} key={item} />
  ));

  return (
    <Slider {...settings}>
      {item}
    </Slider>
  );
}
