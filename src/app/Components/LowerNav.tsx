"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSearchBar } from "../lib/feature/datafeacture/dataSlice";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const LowerNav = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const dispatch = useDispatch();

  const changeVisibility = () => {
    dispatch(toggleSearchBar());
  };

  const clothingCategories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids & Babies",
    "Activewear",
    "Formal Wear",
    "Casual Wear",
    "Summer Collection",
    "Winter Collection",
    "T-Shirts & Tops",
    "Jeans & Pants",
    "Dresses & Skirts",
    "Jackets & Coats",
    "Sweaters & Hoodies",
    "Shorts & Swimwear",
    "Underwear & Lingerie",
    "Shoes & Footwear",
    "Accessories",
    "Traditional Wear",
    "Plus Size",
    "Maternity Wear"
  ];

  const clothingBrands = [
    "Nike",
    "Adidas",
    "Zara",
    "H&M",
    "Levi's",
    "Gucci",
    "Prada",
    "Uniqlo",
    "Forever 21",
    "Under Armour"
  ];

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center ">
        {/* Desktop Navigation */}
        <div className="hidden md:flex min-w-[70vw] gap-6 lg:gap-10 py-2 px-2 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg justify-between items-center">
          <div className="text-[#33383c] font-bold tracking-wide text-lg lg:text-xl">
Voen 
          </div>

          <nav>
            <ul className="flex text-[#33383c] justify-center items-center gap-4 lg:gap-6 font-medium text-sm lg:text-base">
              {/* Categories Dropdown */}
              <li
                className="relative cursor-pointer hover:text-black transition-colors"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <div className="flex items-center gap-1">
                  Shop Categories
                  <ChevronDown size={16} />
                </div>
                {categoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">
                      CLOTHING CATEGORIES
                    </div>
                    {clothingCategories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        <Link
                          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block w-full"
                        >
                          {category}
                        </Link>
                      </div>
                    ))}
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100 mt-2">
                      POPULAR BRANDS
                    </div>
                    {clothingBrands.map((brand, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        <Link
                          href={`/brand/${brand.toLowerCase()}`}
                          className="block w-full"
                        >
                          {brand}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>



              <li
                onClick={changeVisibility}
                className="cursor-pointer hover:text-black transition-colors flex items-center gap-1"
              >
                <Search size={16} />
                Search
              </li>

              <Link
                href={"/contact"}
                className="cursor-pointer hover:text-black transition-colors"
              >
                Support
              </Link>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden min-w-[70vw] py-2 px-2 bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg rounded-md">
          <div className="flex justify-between items-center">
            <div className="text-[#33383c] font-bold tracking-wide text-lg truncate">
              FashionStore
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-white/50 transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="mt-4 pb-2 border-t border-white/30 pt-4">
              <ul className="space-y-2 text-[#33383c] font-medium">
                {/* Mobile Categories Dropdown */}
                <li className="border-b border-gray-200/50 pb-2">
                  <button
                    onClick={() => toggleMobileDropdown("categories")}
                    className="flex items-center justify-between w-full py-2 hover:text-black transition-colors text-left"
                  >
                    <span className="font-medium">Shop Categories</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        mobileDropdown === "categories" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === "categories" && (
                    <div className="mt-2 space-y-1 bg-white/50 rounded-lg p-2 mx-1 max-h-60 overflow-y-auto">
                      <div className="text-xs font-semibold text-gray-500 px-2 py-1">
                        CLOTHING CATEGORIES
                      </div>
                      {clothingCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block py-2 px-3 text-sm hover:text-black hover:bg-white/70 transition-colors rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                      <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">
                        POPULAR BRANDS
                      </div>
                      {clothingBrands.map((brand, index) => (
                        <Link
                          key={index}
                          href={`/brand/${brand.toLowerCase()}`}
                          className="block py-2 px-3 text-sm hover:text-black hover:bg-white/70 transition-colors rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* Quick Links */}
                <li className="border-b border-gray-200/50 pb-2">
                  <Link
                    href={"/new-arrivals"}
                    className="block py-2 hover:text-black transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    New Arrivals
                  </Link>
                </li>

                <li className="border-b border-gray-200/50 pb-2">
                  <Link
                    href={"/sale"}
                    className="block py-2 text-red-600 font-semibold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sale
                  </Link>
                </li>

                <li className="border-b border-gray-200/50 pb-2">
                  <Link
                    href={"/trending"}
                    className="block py-2 hover:text-black transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Trending
                  </Link>
                </li>

                <li className="border-b border-gray-200/50 pb-2">
                  <button
                    onClick={() => {
                      changeVisibility();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 w-full py-2 hover:text-black transition-colors text-left font-medium"
                  >
                    <Search size={16} />
                    Search
                  </button>
                </li>

                <li>
                  <Link
                    href={"/contact"}
                    className="block py-2 hover:text-black transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowerNav;