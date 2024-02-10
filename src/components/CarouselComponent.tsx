/* eslint-disable @next/next/no-img-element */
'use client';
import { FunctionComponent, useEffect, useState } from 'react';
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
import Image from 'next/image';

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent: FunctionComponent<CarouselComponentProps> = ({
  images,
}) => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <div className="relative">
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
              className="mySwiper rounded-md h-[350px] w-[100%] mx-auto mb-5 xl:w-[70%]   "
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
              <SwiperSlide>
                {' '}
                <Image
                  src="https://via.placeholder.com/300x300"
                  width={300}
                  height={300}
                  alt="Some Image"
                  className="w-full h-full object-cover object-center"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <Image
                  src="https://via.placeholder.com/300x300"
                  width={300}
                  height={300}
                  alt="Some Image"
                  className="w-full h-full object-cover object-center"
                ></Image>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
      {!isDesktopOrLaptop && (
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
            className="mySwiper rounded-md h-[250px] w-[90%] mx-auto mb-2"
          >
            <SwiperSlide>
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
      )}
    </>
  );
};

export default CarouselComponent;
