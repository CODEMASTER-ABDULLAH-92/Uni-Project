import { Product } from "../lib/types";

export interface WishlistItem {
  id: string;
  addedAt: string;
  product: {
    title: string;
    brand: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount?: number;
    affiliateUrl: string;
  };
}


export interface RecentlyViewed {
  id: string;
  product: Product;
  viewedAt: string;
}

export interface Comparison {
  id: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
}

export interface NotificationPreference {
  id: string;
  type: 'email' | 'push' | 'browser';
  name: string;
  description: string;
  enabled: boolean;
}