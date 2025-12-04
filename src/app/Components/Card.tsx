"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface cardInfo {
  _id: string;
  imag1: string[];
  heading: string;
  price: number;
}

const Card = (info: cardInfo) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);

  return (
    <Link
      href={`/shop/${info._id}`}
      className="cursor-pointer w-full sm:w-[48%] md:w-[31%] lg:w-[90%] flex justify-center"
    >
      <div
        className="flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image Section */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
          {!imageError && info.imag1[0] ? (
            <>
              {/* Front Image */}
              <Image
                src={info.imag1[0]}
                alt={info.heading}
                fill
                // sizes="(max-width: 768px) 100vw,"
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hovered && info.imag1[1] ? "opacity-0" : "opacity-100"
                }`}
                onError={handleImageError}
              />
              {/* Back Image */}
              {info.imag1[1] && (
                <Image
                  src={info.imag1[1]}
                  alt={`${info.heading} back`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                  onError={handleImageError}
                />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
              No Image
            </div>
          )}

          {/* Subtle Zoom Effect */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-snug hover:text-blue-600 transition-colors duration-200">
            {info.heading}
          </h1>
          <p className="text-gray-700 font-semibold text-base sm:text-lg">
            ${info.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
