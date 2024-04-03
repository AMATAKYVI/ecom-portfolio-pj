import { FC } from 'react';
import Card from './Card';

interface ProductListProps {}
const products = [
  {
    id: 1,
    name: 'Product Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet gravida risus, sed sodales leo.',
    price: 100,
    image: 'pc-product.jpg',
  },
  {
    id: 2,
    name: 'Product Price',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet gravida risus, sed sodales leo.',
    price: 200,
    image: 'pc-product.jpg',
  },
];
const ProductList: FC<ProductListProps> = ({}) => {
  return (
    <div className="w-[70%] p-5 flex flex-wrap gap-10 bg-gray-200 overflow-y-auto">
      {products.map((item) => (
        <Card key={item.id} />
      ))}
      <Card />
    </div>
  );
};

export default ProductList;
