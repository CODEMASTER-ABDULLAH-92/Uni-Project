export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'in stock' | 'low stock' | 'out of stock';
  image: string;
  description: string;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  items: number;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft';
  category: string;
  image: string;
  views: number;
  likes: number;
}

export interface Stats {
  totalRevenue: number;
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  revenueChange: number;
  usersChange: number;
  ordersChange: number;
  productsChange: number;
}