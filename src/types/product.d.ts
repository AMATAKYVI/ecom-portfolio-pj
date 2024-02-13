export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categories: Array<string>;
}
