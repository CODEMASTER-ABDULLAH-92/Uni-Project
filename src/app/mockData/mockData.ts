import { User, Product, Order, Blog, Stats } from '@/app/types/dashElement';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-01-15',
    avatar: '/avatars/1.jpg'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'active',
    joinDate: '2023-02-20',
    avatar: '/avatars/2.jpg'
  },
  // Add more mock users...
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    stock: 45,
    status: 'in stock',
    image: '/products/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: '2',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 299.99,
    stock: 5,
    status: 'low stock',
    image: '/products/watch.jpg',
    description: 'Feature-rich smartwatch with health monitoring'
  },
  // Add more mock products...
];

export const mockOrders: Order[] = [
  {
    id: '1',
    customer: 'John Doe',
    date: '2024-01-15',
    amount: 299.99,
    status: 'completed',
    items: 2
  },
  {
    id: '2',
    customer: 'Jane Smith',
    date: '2024-01-14',
    amount: 199.99,
    status: 'pending',
    items: 1
  },
  // Add more mock orders...
];

export const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    content: 'Full blog content here...',
    author: 'John Doe',
    publishDate: '2024-01-15',
    status: 'published',
    category: 'Technology',
    image: '/blogs/nextjs.jpg',
    views: 1245,
    likes: 89
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    excerpt: 'Advanced techniques for using Tailwind CSS in your projects',
    content: 'Full blog content here...',
    author: 'Jane Smith',
    publishDate: '2024-01-10',
    status: 'draft',
    category: 'Web Development',
    image: '/blogs/tailwind.jpg',
    views: 0,
    likes: 0
  },
  // Add more mock blogs...
];

export const mockStats: Stats = {
  totalRevenue: 45236.89,
  totalUsers: 1245,
  totalOrders: 367,
  totalProducts: 89,
  revenueChange: 12.5,
  usersChange: 8.2,
  ordersChange: -3.4,
  productsChange: 5.7
};