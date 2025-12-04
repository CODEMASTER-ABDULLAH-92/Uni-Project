"use client";
import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { FilterSidebar } from '@/app/Components/FilterSidebar';
import { ProductCard } from '@/app/Components/ProductCard';
import { ViewToggle } from '@/app/Components/viewToggle';
import { useParams } from 'next/navigation';

// Types
interface Product {
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

type ViewMode = 'grid' | 'list';

// Category metadata for dynamic content
const categoryMetadata: Record<string, { title: string; description: string }> = {
  electronics: {
    title: "Electronics & Gadgets",
    description: "Discover the latest tech gadgets, smartphones, laptops, and cutting-edge electronics"
  },
  fashion: {
    title: "Fashion & Apparel",
    description: "Explore trendy clothing, accessories, and stylish fashion items"
  },
  "home-kitchen": {
    title: "Home & Kitchen",
    description: "Upgrade your living space with smart home devices and kitchen essentials"
  },
  beauty: {
    title: "Beauty & Personal Care",
    description: "Find premium beauty products, skincare, and personal care items"
  },
  "sports-outdoors": {
    title: "Sports & Outdoors",
    description: "Gear up for your next adventure with quality sports and outdoor equipment"
  },
  jewelry: {
    title: "Jewelry & Accessories",
    description: "Discover beautiful jewelry pieces and fashion accessories"
  }
};

const CategoryPage: React.FC = () => {
  const params = useParams();
  const categoryType = params.categoryType as string;
  
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOption, setSortOption] = useState<string>('popularity');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/store/getAllProduct');
        
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error loading products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get category-specific products and brands
  const { categoryProducts, categoryBrands } = useMemo(() => {
    if (!categoryType) {
      return { categoryProducts: [], categoryBrands: [] };
    }

    const filteredProducts = products.filter(product => 
      product.category.toLowerCase() === categoryType.toLowerCase()
    );
    
    const brands = Array.from(new Set(filteredProducts.flatMap(p => p.colors))).slice(0, 10);
    
    return {
      categoryProducts: filteredProducts,
      categoryBrands: brands
    };
  }, [products, categoryType]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedBrands.includes(color))
      );
    }

    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => {
          if (a.bestSeller && !b.bestSeller) return -1;
          if (!a.bestSeller && b.bestSeller) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [categoryProducts, selectedBrands, priceRange, sortOption]);

  const currentCategory = categoryMetadata[categoryType] || {
    title: categoryType?.charAt(0).toUpperCase() + categoryType?.slice(1) || 'Category',
    description: 'Discover amazing products in this category'
  };

  useEffect(() => {
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    setMinRating(0);
    setSortOption('popularity');
  }, [categoryType]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{currentCategory.title}</h1>
          <p className="text-gray-600 mt-2">{currentCategory.description}</p>
          
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
            <span>{categoryProducts.length} products available</span>
            <span>{categoryBrands.length} options</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              brands={categoryBrands}
              selectedBrands={selectedBrands}
              onBrandChange={setSelectedBrands}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="text-sm text-gray-600">
                Showing {filteredAndSortedProducts.length} of {categoryProducts.length} products
                {selectedBrands.length > 0 && ` in ${selectedBrands.length} selected options`}
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popularity">Sort by: Popularity</option>
                  <option value="price-low">Sort by: Price Low to High</option>
                  <option value="price-high">Sort by: Price High to Low</option>
                  <option value="newest">Sort by: Newest</option>
                </select>

                <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
              </div>
            </div>

            {/* Improved Products Layout */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4' // Reduced gap for list view
            }>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={{
                    id: product._id,
                    title: product.heading,
                    price: product.price,
                    originalPrice: product.price * 1.2,
                    rating: 4.5,
                    reviewCount: 0,
                    brand: product.colors[0] || 'Brand',
                    image: product.imag1[0] || '/api/placeholder/400/400',
                    category: product.category,
                    affiliateUrl: `/shop/${product._id}`,
                    isFeatured: product.bestSeller,
                    description: product.description, // Added description for list view
                  }}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  {categoryProducts.length === 0 
                    ? `No products available in ${currentCategory.title} category.`
                    : 'Try adjusting your filters to see more results.'
                  }
                </p>
                {categoryProducts.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedBrands([]);
                      setPriceRange([0, 1000]);
                      setMinRating(0);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;