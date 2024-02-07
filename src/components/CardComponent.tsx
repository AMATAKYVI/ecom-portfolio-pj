'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import { Card, Typography, Tag } from 'antd';

const { Meta } = Card;
const { Text } = Typography;
interface CardProps {
  item: ProductType;
}
interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categories: Array<string>;
}
const CardComponent: FunctionComponent<CardProps> = ({ item }) => {
  return (
    <Card hoverable className="max-w-sm" style={{ width: '100%' }}>
      {/* <img alt={item.name} src={item.images[0]} className="w-full" /> */}
      <div className="px-6 py-4">
        <Meta title={item.name} description={item.description} />
        <div className="mt-4">
          <div className="flex items-center">
            <Text strong>Price: </Text>
            <Text>${item.price}</Text>
          </div>
          <div className="flex items-center mt-2">
            <Text strong>Stock Quantity: </Text>
            <Text>{item.stockQuantity}</Text>
          </div>
          <div className="flex flex-wrap items-center mt-2">
            <Text strong>Categories: </Text>
            {item.categories.map((category) => (
              <Tag key={category} className="mr-2 mt-1">
                {category}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
