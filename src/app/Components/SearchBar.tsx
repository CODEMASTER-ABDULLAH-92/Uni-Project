"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";

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
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  // ✅ Fetch all products from backend
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/store/getAllProduct");
        if (response.data.success) {
          setAllProducts(response.data.products);
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

    fetchAllProducts();
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Filter search results
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const filteredResults = allProducts.filter(
      (product) =>
        product.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.colors.some((color) => color.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setSearchResults(filteredResults);
    setIsSearchOpen(true);
  }, [searchQuery, allProducts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  const handleResultClick = (product: Product) => {
    window.location.href = `/shop/${product._id}`;
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <div
      ref={searchRef}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-[9999]"
    >
      <form onSubmit={(e) => e.preventDefault()} className="relative">
        {/* Input Field */}
        <div className="relative top-32">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for products, brands, and categories..."
            className="w-full px-6 py-4 pl-12 pr-4 text-lg bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all duration-200"
            disabled={loading}
          />

          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            {loading ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            ) : (
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </div>

          {/* Clear Button */}
          {searchQuery && !loading && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Search Results (Static height & visible above all) */}
        {isSearchOpen && searchResults.length > 0 && (
          <div className="absolute top-60 left-0 right-0 mt-3 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl z-[9999] max-h-[400px] overflow-y-auto">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Search Results ({searchResults.length})
              </h3>

              <div className="space-y-3">
                {searchResults.map((product) => (
                  <div
                    key={product._id}
                    onClick={() => handleResultClick(product)}
                    className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer flex justify-between items-center border border-transparent hover:border-gray-200 transition-all duration-200"
                  >
                    <div className="flex-1 pr-3">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">
                        {product.heading}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {product.category}
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    {product.imag1?.[0] && (
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image
                          src={product.imag1[0]}
                          alt={product.heading}
                          fill
                          className="rounded-lg object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {isSearchOpen && searchQuery && searchResults.length === 0 && !loading && (
          <div className="absolute top-60 left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl z-[9999] p-6 text-center">
            <svg
              className="w-12 h-12 text-gray-300 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-sm font-semibold text-gray-600 mb-1">
              No products found
            </h3>
            <p className="text-xs text-gray-500">
              Try different keywords or browse categories
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-red-50 border border-red-200 rounded-2xl shadow-2xl z-[9999] p-4">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
