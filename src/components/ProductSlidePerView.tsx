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
        // direction="horizontal"
        slidesPerView={3}
        spaceBetween={20}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, A11y, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {data &&
          data?.map((item: ProductType) => {
            return (
              <SwiperSlide key={item._id}>
                <CardComponent item={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
export default ProductSlidePerView;
