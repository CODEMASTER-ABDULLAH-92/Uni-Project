"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import p1 from "../../../public/p1.jpeg";
import p2 from "../../../public/p2.jpeg";

interface Category {
  id: number;
  name: string;
  productImage: string | StaticImageData;
  productCount: number;
  bgColor: string;
}

const Categories = () => {
  const categoryNames = [
    "Electronics",
    "Clothes",
    "Jewelry",
    "Watches",
    "Home",
    "Kitchen",
    "Beauty",
    "Sports",
    "Outdoors",
    "Books",
    "Toys",
    "Games",
    "Automotive",
    "Computers",
    "Arts",
    "Automotive",
    "Baby",
    "Beauty",
    "Women",
    "Boys",
    "Girls",
    "Mens",
    "Health",
    "Home",
    "Industrial",
    "Scientific",
    "Luggage",
    "Movies",
    "Pet",
    "Software",
    "Sports",
    "Outdoors",
    "Tools",
    "Toys",
    "Games",
  ];

  const bgColors = [
    "bg-gradient-to-br from-blue-50 to-indigo-100",
    "bg-gradient-to-br from-pink-50 to-rose-100",
    "bg-gradient-to-br from-amber-50 to-orange-100",
    "bg-gradient-to-br from-purple-50 to-fuchsia-100",
    "bg-gradient-to-br from-green-50 to-emerald-100",
    "bg-gradient-to-br from-cyan-50 to-sky-100",
    "bg-gradient-to-br from-red-50 to-pink-100",
    "bg-gradient-to-br from-violet-50 to-purple-100",
    "bg-gradient-to-br from-gray-50 to-slate-100",
    "bg-gradient-to-br from-teal-50 to-cyan-100",
    "bg-gradient-to-br from-lime-50 to-green-100",
    "bg-gradient-to-br from-yellow-50 to-amber-100",
  ];

  // Generate categories dynamically using alternating images and random product counts
  const categories: Category[] = categoryNames.map((name, index) => ({
    id: index + 1,
    name,
    productImage: index % 2 === 0 ? p1 : p2,
    productCount: Math.floor(Math.random() * 1200) + 100, // random product count
    bgColor: bgColors[index % bgColors.length],
  }));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Quick Links → Categories
        </h2>
        <p className="text-gray-600">Browse products by category</p>
      </div>

      {/* Categories Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`group ${category.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50 hover:border-white/80 overflow-hidden`}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/30 to-black/10"></div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                <Image
                  src={category.productImage}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-full" />
              </div>


            </div>

            {/* Category Info */}
            <div className="p-5 text-center bg-white/80 backdrop-blur-sm border-t border-white/50">
              <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200 text-lg">
                {category.name}
              </h3>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full pb-4 overflow-scroll">
        <div className="grid grid-rows-3 grid-flow-col gap-4 px-4">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Image
                  src={category.productImage}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
