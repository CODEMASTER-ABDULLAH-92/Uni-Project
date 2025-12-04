import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-red-950 text-white px-6 md:px-12 lg:px-20 py-12">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        
        {/* Brand */}
        <div>
          <Link 
            href="/" 
            className="text-3xl font-bold tracking-wide hover:text-gray-300 transition"
          >
            Shopygram
          </Link>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Modern clothing for everyday style. Quality, comfort & confidence.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/category/men" className="hover:text-white">Men</Link></li>
            <li><Link href="/category/women" className="hover:text-white">Women</Link></li>
            <li><Link href="/category/kids" className="hover:text-white">Kids</Link></li>
            <li><Link href="/category/accessories" className="hover:text-white">Accessories</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        
        <p>© {new Date().getFullYear()} Shopygram Clothing. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Pinterest</a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
