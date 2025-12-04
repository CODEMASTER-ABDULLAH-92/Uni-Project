## Shopygram - Modern E-Commerce Platform
A modern, full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB. Shopygram offers a seamless shopping experience with advanced features for both customers and administrators.

🚀 Live Demo
Coming Soon...

✨ Features
- 🛍️ Customer Features
- 🛒 Product Catalog - Browse thousands of products across multiple categories
- 🔍 Smart Search - Real-time search with instant suggestions and filters
- ⭐ Best Sellers - Curated collection of top-selling products
🆕-  New Arrivals - Latest products with new item badges
- 📱 Responsive Design - Optimized experience across all devices
- 🛒 Shopping Cart - Persistent cart functionality
- ❤️ Wishlist - Save favorite products for later
- 📄 Product Details - Comprehensive pages with image galleries and specifications
- 🏷️ Category Filtering - Easy navigation by product categories

## 👨‍💼 Admin Features
- 📊 Dashboard - Comprehensive admin panel with analytics
- 🛍️ Product Management - Full CRUD operations for products
- 📦 Inventory Management - Real-time stock tracking and updates
- 🏷️ Category Management - Dynamic category organization
- ⭐ Product Flags - Mark products as Best Seller or New Arrival
- 🖼️ Image Management - Multiple image uploads and management
- 📈 Sales Analytics - Track product performance and sales data

## 🛠️ Technical Features
- ⚡ Next.js 15 - Latest App Router with React 18 and Server Components
- 🔒 TypeScript - Full type safety across the entire application
- 🗄️ MongoDB - NoSQL database with Mongoose ODM
- 🎨 Tailwind CSS - Modern utility-first CSS framework
- 🔄 Axios - Promise-based HTTP client for API calls
- 🖼️ Image Optimization - Next.js Image component with CDN support
- 📱 PWA Ready - Progressive Web App capabilities
- 🔍 SEO Optimized - Search engine optimized pages and metadata
## 📦 Project Structure
```
shopygram/
├── app/
│   ├── admin/                 # Admin dashboard pages
│   │   └── dashboard/         # Main admin dashboard
│   ├── api/                   # API routes
│   │   └── store/             # Store-related APIs
│   │       ├── addProduct/    # Add new products
│   │       ├── getAllProduct/ # Fetch all products
│   │       ├── getProduct/    # Get single product
│   │       └── updateProduct/ # Update product details
│   ├── Components/            # Reusable React components
│   │   ├── admin/             # Admin-specific components
│   │   │   ├── ProductManagment.tsx
│   │   │   └── UserManagment.tsx
│   │   ├── Card/              # Product card components
│   │   ├── Navigation/        # Header & navigation components
│   │   ├── FilterSidebar/     # Product filtering
│   │   └── SearchBar/         # Search functionality
│   ├── lib/                   # Utility functions and configurations
│   │   ├── db.connect.ts      # Database connection
│   │   └── feature/           # Redux store and slices
│   ├── models/                # MongoDB models
│   │   └── product.model.ts   # Product schema
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🚀 Getting Started
- Prerequisites
- Node.js 15+
- MongoDB database
---

## Environment Setup
Create a .env.local file in the root directory:
env
- MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
- NEXTAUTH_SECRET=your-secret-key
- NEXTAUTH_URL=http://localhost:3000
Run the development server


🛠️ Technology Stack
## Frontend
- Next.js 15 - React framework with App Router
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client for API requests
- Lucide React - Beautiful icons

## Backend
- Next.js API Routes - Serverless API endpoints
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling
- NextAuth.js - Authentication (planned)

## Deployment
- Vercel - Recommended for Next.js applications
- MongoDB Atlas - Cloud database
- Cloudinary - Image CDN (planned)

## 📱 API Endpoints
Product Management
- GET /api/store/getAllProduct - Fetch all products
- GET /api/store/getProduct/[id] - Get single product
- POST /api/store/addProduct - Create new product
- PUT /api/store/updateProduct/[id] - Update product
- DELETE /api/store/removeProduct/[id] - Delete product

## 🎨 Key Components
Product Management
typescript
```interface Product {
  _id: string;
  imag1: string[];
  heading: string;
  description: string;
  price: number;
  category: string;
  colors: string[];
  sizes: string[];
  materialCare: string;
  bestSeller: boolean;
  newItem: boolean;
  createdAt: string;
  updatedAt: string;
}
```

## Admin Dashboard
- Real-time product statistics
- Quick actions for product management
- Sales analytics and insights
- Inventory overview
- Search & Filtering
- Real-time search with debouncing
- Category-based filtering
- Price range filters
- Color and size filters

## 🚀 Deployment
- Vercel Deployment
- Push your code to GitHub
- Connect your repository to Vercel
- Add environment variables in Vercel dashboard

Deploy with one click

Environment Variables for Production
```
MONGODB_URI=your-production-mongodb-uri
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.vercel.app
```

## 👥 Team
Abdullah Peerzada - Lead Developer & Project Maintainer

🆘 Support
If you have any questions or need help, please:
Check the documentation
Search existing issues

## 🚀 Features
- Modern product catalog with filtering
- Real-time search functionality  
- Admin panel for product management
- Best sellers & new arrivals sections
- Responsive design for all devices
- Type-safe with TypeScript

## 🛠️ Tech Stack
- Frontend: Next.js 15, TypeScript, Tailwind CSS
- Backend: Next.js API Routes, MongoDB, Mongoose
- Deployment: Vercel, MongoDB Atlas

## 📦 Quick Start
1. Clone repo: `https://github.com/CODEMASTER-ABDULLAH-92/shopygram2`
2. Install: `npm install`
3. Setup env variables
4. Run: `npm run dev`
5. Open: http://localhost:3000

## 🤝 Contributing
Contributions welcome! Please read our contributing guidelines before submitting PRs.

<div align="center">
Built with ❤️ using Next.js and TypeScript

Report Bug · Request Feature

</div>