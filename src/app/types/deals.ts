// types/deals.ts
export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  brand: string;
  category: string;
  affiliateUrl: string;
  type: 'flash' | 'daily' | 'promotion' | 'bundle' | 'clearance';
  endTime?: string; // For flash deals countdown
  items?: number; // For bundle offers
  rating?: number;
  reviewCount?: number;
}

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}