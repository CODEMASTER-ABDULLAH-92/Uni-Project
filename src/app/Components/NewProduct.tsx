"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../Components/Card";
import BestSellerNav from "../Components/BestSellerNav";
import axios from "axios";

interface BestSellerProduct {
  _id: string;
  imag1: string[];
  heading: string;
  price: number;
  bestSeller: boolean;
  newItem: boolean;
  // Add other fields you need
}

const BestSeller = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [bestSeller, setBestSeller] = useState<BestSellerProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch products and filter for new items
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/store/getAllProduct");
        
        if (response.data.success) {
          // Filter products where newItem is true and take first 8
          const newProducts = response.data.products
            .filter((product: BestSellerProduct) => product.newItem === true)
            .slice(0, 8); // Get first 8 new items
            
          setBestSeller(newProducts);
        } else {
          setError("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  // ✅ Observe visibility of the BestSeller section
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">Loading new products...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      {/* ✅ Smooth sticky nav with animation */}
      <div
        className={`fixed top-32 left-0 w-full z-30 transition-all duration-500 ease-in-out ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <BestSellerNav />
      </div>

      {/* ✅ New Products Section */}
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
          <p className="text-gray-600 mt-2">Discover our latest products</p>
        </div>

        {bestSeller.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No new products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestSeller.map((item) => (
              <Card
                key={item._id}
                _id={item._id}
                heading={item.heading}
                imag1={
                  Array.isArray(item.imag1)
                    ? item.imag1
                    : item.imag1
                    ? [item.imag1]
                    : []
                }
                price={item.price}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default BestSeller;