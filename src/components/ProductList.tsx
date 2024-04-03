import { FC } from 'react';

interface ProductListProps {}

const ProductList: FC<ProductListProps> = ({}) => {
  return (
    <div className="w-[70%] bg-gray-200" content="product">
      <div>Product list here</div>
    </div>
  );
};

export default ProductList;
