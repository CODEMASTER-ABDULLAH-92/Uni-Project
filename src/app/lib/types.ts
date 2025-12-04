import { StaticImageData } from "next/image";

// types.ts
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  brand: string;
  image: string | StaticImageData;
  category: string;
  affiliateUrl: string;
  isFeatured?: boolean;
}

export type SortOption = 'popularity' | 'price-low' | 'price-high' | 'rating' | 'newest';
export type ViewMode = 'grid' | 'list';