export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: 'review' | 'guide' | 'seasonal' | 'tips';
  categoryLabel: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  affiliateLink: string;
  features: string[];
}