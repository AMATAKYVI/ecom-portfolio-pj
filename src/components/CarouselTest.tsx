'use client';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';

interface CarouselTestingProps {
  images: string[];
}

const CarouselTesting: FunctionComponent<CarouselTestingProps> = ({
  images,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        keyboard={{ enabled: true }}
        modules={[Autoplay, Keyboard, Navigation, Scrollbar, A11y]}
        autoplay={{
          delay: 2500,
        }}
        className="px-10 mySwiper"
      >
        <SwiperSlide className="">
          <Image
            src="https://via.placeholder.com/300x300"
            width={300}
            height={300}
            alt="Some Image"
            className="w-full h-full object-cover object-center"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselTesting;
