import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.scss';

import Img1 from './sale.jpg';
import Img2 from './freeshipping.jpg';
import Img3 from './satisfaction.jpg';

const items = [
  {
    src: Img1,
    altText: 'Slide 1',
    caption: 'only in TechStore',
    header: 'best prices',
    key: '1'
  },
  {
    src: Img2,
    altText: 'Slide 2',
    caption: 'only in TechStore',
    header: 'free shipping',
    key: '2'
  },
  {
    src: Img3,
    altText: 'Slide 3',
    caption: 'only in TechStore',
    header: 'satisfaction',
    key: '3'
  }
];

const TopCarousel = () => <UncontrolledCarousel className="carousel" items={items} />;

export default TopCarousel;