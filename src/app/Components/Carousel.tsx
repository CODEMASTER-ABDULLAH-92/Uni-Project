// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion"; // 👈 for animations
// import p1 from "../../../public/p1.jpeg";
// import p2 from "../../../public/p2.jpeg";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   originalPrice?: string;
//   rating: number;
//   image: any;
//   category: string;
//   bgColor: string;
//   reviews: number;
// }

// const TrendingProductsCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const trendingProducts: Product[] = [
//     {
//       id: 1,
//       name: "Wireless Bluetooth Headphones",
//       price: "$89.99",
//       originalPrice: "$129.99",
//       rating: 4.5,
//       image: p1,
//       category: "Electronics",
//       bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
//       reviews: 124,
//     },
//     {
//       id: 2,
//       name: "Smart Fitness Watch",
//       price: "$199.99",
//       originalPrice: "$249.99",
//       rating: 4.8,
//       image: p2,
//       category: "Electronics",
//       bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
//       reviews: 89,
//     },
//     {
//       id: 3,
//       name: "Wireless Bluetooth Headphones",
//       price: "$89.99",
//       originalPrice: "$129.99",
//       rating: 4.5,
//       image: p1,
//       category: "Electronics",
//       bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
//       reviews: 124,
//     },
//     {
//       id: 4,
//       name: "Smart Fitness Watch",
//       price: "$199.99",
//       originalPrice: "$249.99",
//       rating: 4.8,
//       image: p2,
//       category: "Electronics",
//       bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
//       reviews: 89,
//     },
//     {
//       id: 5,
//       name: "Wireless Bluetooth Headphones",
//       price: "$89.99",
//       originalPrice: "$129.99",
//       rating: 4.5,
//       image: p1,
//       category: "Electronics",
//       bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
//       reviews: 124,
//     },
//     {
//       id: 6,
//       name: "Smart Fitness Watch",
//       price: "$199.99",
//       originalPrice: "$249.99",
//       rating: 4.8,
//       image: p2,
//       category: "Electronics",
//       bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
//       reviews: 89,
//     },
//   ];

//   const productsPerPage = 4;
//   const totalPages = Math.ceil(trendingProducts.length / productsPerPage);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
//   };

//   const currentProducts = trendingProducts.slice(
//     currentIndex * productsPerPage,
//     (currentIndex + 1) * productsPerPage
//   );

//   const StarRating = ({ rating }: { rating: number }) => {
//     return (
//       <div className="flex items-center gap-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <svg
//             key={star}
//             className={`w-4 h-4 ${
//               star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//         <span className="text-sm text-gray-600 ml-1">({rating})</span>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8">
//       {/* Header with Navigation */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             🔥 Trending Products
//           </h2>
//           <p className="text-gray-600">
//             Discover what everyone is loving right now
//           </p>
//         </div>

//         {/* Carousel Controls */}
//         <div className="flex gap-2">
//           <button
//             onClick={prevSlide}
//             className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
//           >
//             <svg
//               className="w-6 h-6 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={nextSlide}
//             className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
//           >
//             <svg
//               className="w-6 h-6 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Products Carousel with Animation */}
//       <div className="relative overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }} // start position
//             animate={{ opacity: 1, x: 0 }} // animate into place
//             exit={{ opacity: 0, x: -100 }} // exit animation
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           >
//             {currentProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 whileHover={{ scale: 1.05 }}
//                 className={`group ${product.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50 hover:border-white/80 overflow-hidden`}
//               >
//                 {/* Product Image Container */}
//                 <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
//                   <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/30 to-black/10"></div>

//                   <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       className="object-cover"
//                       sizes="128px"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
//                   </div>

//                   {product.originalPrice && (
//                     <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
//                       SALE
//                     </div>
//                   )}
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-5 text-center bg-white/80 backdrop-blur-sm border-t border-white/50">
//                   <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-gray-600 mb-2">
//                     {product.category}
//                   </span>

//                   <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200 text-lg mb-2 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center justify-center mb-3">
//                     <StarRating rating={product.rating} />
//                   </div>

//                   <div className="flex items-center justify-center gap-2 mb-3">
//                     <span className="text-2xl font-bold text-gray-800">
//                       {product.price}
//                     </span>
//                     {product.originalPrice && (
//                       <span className="text-lg text-gray-500 line-through">
//                         {product.originalPrice}
//                       </span>
//                     )}
//                   </div>

//                   <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
//                     Add to Cart
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Carousel Indicators */}
//       <div className="flex justify-center mt-8 gap-2">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-blue-600 scale-125"
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center mt-12">
//         <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//           View All Trending Products
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrendingProductsCarousel;


import React from 'react'

const Carousel = () => {
  return (
    <div>
      
    </div>
  )
}

export default Carousel
