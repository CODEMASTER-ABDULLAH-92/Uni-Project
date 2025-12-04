import { StaticImageData } from "next/image";

export interface ProductItem {
  _id: string;
  imag1: StaticImageData[] | string | null;
  heading: string;
  price: string;
  category: string;
  colors: string[];
  sizes: string[];
  discription: string;
  materialCare: string;
  bestSeller: boolean;
  newItem: boolean;
}
