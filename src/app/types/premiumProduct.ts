export interface PremiumProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: 'gadgets' | 'fashion' | 'home-decor';
  categoryLabel: string;
  images: string[];
  brand: string;
  features: string[];
  rating: number;
  reviewCount: number;
  affiliateLink: string;
  isFeatured: boolean;
  tags: string[];
  specifications: Record<string, string>;
}

export interface ProductCategory {
  key: 'all' | 'gadgets' | 'fashion' | 'home-decor';
  label: string;
  icon: string;
  description: string;
}