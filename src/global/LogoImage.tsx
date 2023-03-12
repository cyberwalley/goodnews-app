import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from '../components/elements/Section';
import Heading from '../components/elements/Heading';
import { Link } from 'react-router-dom';

interface LogoImageProps {
  title?: string;
}

const LogoImage: FC<LogoImageProps> = ({ title }) => {
  //Slider from react slick: https://react-slick.neostack.com/docs/get-started/

  /* const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 9,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  }; */

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
      link: '/vendors/amazon'
    },
    {
      id: 2,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 3,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 4,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 5,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 6,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 7,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 8,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 9,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
    {
      id: 10,
      image:
        'https://sgi.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h60.w100.flpad.v967.bffffff.png',
      alt: 'logo 1',
    },
  ];

  return (
    <Section>
      <Heading>{title}</Heading>
      <div className="px-8 m-auto max-w-[60rem] mb-6 border-2 shadow-3xl border-black bg-white py-6">
        {/* <Slider {...settings}>
          {slides.map((slide, index) => (
            <div data-index={slide.id} key={slide.id}>
              <img
                alt={slide.alt}
                src={slide.image}
                className="text-black px-1 py-1 bg-white border-[1px] border-black"
              />
            </div>
          ))}
        </Slider> */}
        <Slider {...settings}>
          {slides.map(({ id, ...slides }) => (
            <div key={id} className="p-2">
              {/* @ts-ignore */}
              <Link to={slides.link}>
                <img
                  src={slides.image}
                  alt={slides.alt}
                  className="object-contain w-full h-full"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

LogoImage.displayName = 'LogoImage';

export default LogoImage;
