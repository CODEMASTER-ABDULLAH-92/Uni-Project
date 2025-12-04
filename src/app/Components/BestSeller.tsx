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
  // Add other fields you need
}

const BestSeller = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [bestSeller, setBestSeller] = useState<BestSellerProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch best seller products from backend
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/store/getAllProduct");
        
        if (response.data.success) {
          // Filter products where bestSeller is true
          const bestSellerProducts = response.data.products.filter(
            (product: BestSellerProduct) => product.bestSeller === true
          );
          setBestSeller(bestSellerProducts);
        } else {
          setError("Failed to fetch best sellers");
        }
      } catch (err) {
        console.error("Error fetching best sellers:", err);
        setError("Error loading best seller products");
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
        <div className="text-center">Loading best sellers...</div>
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

      {/* ✅ BestSeller Section */}
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {bestSeller.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No best seller products found.</p>
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