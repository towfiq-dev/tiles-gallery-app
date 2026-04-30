"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Banner = () => {
  const slides = [
    "https://asterbykyra.sg//image/cache/catalog/4.%20Show%20Room/Show%20Room%201-767x600.jpg",
    "https://static01.nyt.com/images/2024/10/31/multimedia/00Peranakan-gfhb/00Peranakan-gfhb-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://www.shutterstock.com/shutterstock/photos/1201496101/display_1500/stock-photo-wall-tiles-design-simple-modern-1201496101.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznLfJVIn5ZsFhBjfJ8vQRmehwT-kW4_wc1g&s"
  ];

  return (
    <div className="mt-3 overflow-hidden rounded-xl">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper h-[500px] md:h-[600px] lg:h-screen"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero h-full w-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="hero-overlay bg-black/50"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl px-4">
                  <h1 className="mb-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                    Discover Your <span className="text-blue-500">Perfect Aesthetic</span>
                  </h1>
                  <p className="mb-8 text-lg md:text-xl opacity-90">
                    Explore our premium collection of exquisite tiles designed to transform your spaces. 
                    From classic ceramics to modern geometric patterns, find the inspiration you need.
                  </p>
                  <Link href={'/allNavs/allTiles'}>
                    <button className="btn btn-primary btn-lg px-10 rounded-full hover:scale-105 transition-transform">
                      Browse Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;