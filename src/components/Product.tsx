'use client';
import axios from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import Card from './CardComponent';
import { signOut } from 'next-auth/react';
interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categories: Array<string>;
}
interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
  const [data, setData] = useState<ProductType[]>();
  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('/api/products');
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);
  return (
    <div className="">
      <div className="flex flex-wrap justify-center gap-2">
        {data?.map((item: ProductType) => {
          return <Card item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
