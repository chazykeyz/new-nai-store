import { sizeList } from "./custom";

export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  images: Array<string>;
  description: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  addedAt: string;
}

export type ThemeType = {
  backgroundColor: string;
};

export interface IUser {
  id: number;
  phone_number: string;
  is_active: boolean;
}

export type Price = Pick<Product, "price" | "discount">;

export type Size = (typeof sizeList)[number];

export interface Order {
  orderId: string;
  items: CartItem[];
  orderType: string;
  totalAmount: number;
  orderDate: string;
  status: string;
  shippingAddress: string;
}
