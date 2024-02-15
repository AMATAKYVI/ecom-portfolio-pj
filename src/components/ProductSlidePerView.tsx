'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { ProductType } from '@/types/product';
import axios from 'axios';
import CardComponent from './CardComponent';

import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface ProductSlidePerViewProps {}

const ProductSlidePerView: React.FC<ProductSlidePerViewProps> = () => {
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('/api/products');
        setData(data?.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, A11y, Navigation]}
        className="relative border-t"
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        slidesOffsetBefore={50}
        // centeredSlides={true}
      >
        {data &&
          data?.map((item: ProductType) => {
            return (
              <SwiperSlide key={item._id}>
                <CardComponent item={item} />
              </SwiperSlide>
            );
          })}
        {/* Custom prev and next buttons */}
        <button className="absolute top-1/2 z-10 transform -translate-y-1/2 left-1  custom-prev bg-gray-600 rounded-lg text-white">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button className="absolute top-1/2 z-10 transform -translate-y-1/2 right-1  custom-next bg-gray-600 rounded-lg text-white">
          <ChevronRight className="w-7 h-7" />
        </button>
      </Swiper>
    </>
  );
};
export default ProductSlidePerView;
