// import React from 'react';
// import {  ViewMode } from '../lib/types';
// import { Product } from '../lib/types';
// import Image from 'next/image';
// interface ProductCardProps {
//   product: Product;
//   viewMode: ViewMode;
// }

// export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
//   const renderStars = (rating: number) => {
//     return (
//       <div className="flex items-center space-x-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             className={`text-sm ${
//               star <= rating ? 'text-yellow-400' : 'text-gray-300'
//             }`}
//           >
//             ★
//           </span>
//         ))}
//         <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
//       </div>
//     );
//   };

//   if (viewMode === 'list') {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
//         <div className="flex space-x-4">
//           <div className="flex-shrink-0">
//             <Image
//             fill
//               src={product.image}
//               alt={product.title}
//               className="w-32 h-32 object-cover rounded-lg"
//             />
//           </div>
//           <div className="flex-1 min-w-0">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 truncate">
//                   {product.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
//               </div>
//               <div className="text-right">
//                 <div className="flex items-baseline space-x-2">
//                   {product.originalPrice && (
//                     <span className="text-sm text-gray-500 line-through">
//                       ${product.originalPrice}
//                     </span>
//                   )}
//                   <span className="text-xl font-bold text-gray-900">
//                     ${product.price}
//                   </span>
//                 </div>
//                 {renderStars(product.rating)}
//               </div>
//             </div>
//             <p className="text-gray-700 mt-2 line-clamp-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
//             </p>
//             <div className="mt-4 flex space-x-3">
//               <a
//                 href={product.affiliateUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//               >
//                 View Details
//               </a>
//               <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//                 ♡
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Grid View
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
//       <div className="relative">
//         <Image
//         fill
//           src={product.image}
//           alt={product.title}
//           className="w-full h-48 object-cover rounded-lg mb-4"
//         />
//         {product.isFeatured && (
//           <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//             Featured
//           </span>
//         )}
//       </div>
      
//       <div className="space-y-2">
//         <p className="text-sm text-gray-600">{product.brand}</p>
//         <h3 className="font-semibold text-gray-900 line-clamp-2">
//           {product.title}
//         </h3>
        
//         {renderStars(product.rating)}
        
//         <div className="flex items-baseline space-x-2">
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through">
//               ${product.originalPrice}
//             </span>
//           )}
//           <span className="text-xl font-bold text-gray-900">
//             ${product.price}
//           </span>
//         </div>
        
//         <a
//           href={product.affiliateUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-full bg-blue-600 text-white text-center block py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           View Details
//         </a>
//       </div>
//     </div>
//   );
// };


"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  brand: string;
  image: string;
  category: string;
  affiliateUrl: string;
  isFeatured?: boolean;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Toggle wishlist
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Render stars for rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <Link href={product.affiliateUrl}>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/4 lg:w-1/5 relative">
              <div className="aspect-square relative bg-gray-100">
                {!imageError ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isFeatured && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  {discountPercentage > 0 && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      -{discountPercentage}%
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={toggleWishlist}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                    isWishlisted 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                  }`}
                >
                  <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-sm text-blue-600 font-medium mb-1 block">
                        {product.brand}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {product.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  )}

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {discountPercentage > 0 && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium">
                      <ShoppingBag size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link href={product.affiliateUrl}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
        {/* Image Container */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isFeatured && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500 opacity-0 group-hover:opacity-100'
            }`}
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium text-sm">
              <ShoppingBag size={16} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-sm text-blue-600 font-medium">
              {product.brand}
            </span>
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.title}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};