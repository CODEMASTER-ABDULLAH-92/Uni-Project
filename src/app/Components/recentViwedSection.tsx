import React from 'react';
import { RecentlyViewed as RecentlyViewedType } from '../types/engagment';
import Image from 'next/image';

interface RecentlyViewedSectionProps {
  items: RecentlyViewedType[];
  onClear: () => void;
  onRemoveItem: (id: string) => void;
}

export const RecentlyViewedSection: React.FC<RecentlyViewedSectionProps> = ({
  items,
  onClear,
  onRemoveItem
}) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <div className="text-gray-400 text-6xl mb-4">👀</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No recently viewed items</h3>
        <p className="text-gray-600">Products you view will appear here</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
          <p className="text-gray-600 mt-1">Your browsing history</p>
        </div>
        <button
          onClick={onClear}
          className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 6).map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="relative">
              <Image
                src={item.product.image}
                alt={item.product.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <button
                onClick={() => onRemoveItem(item.id)}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              <a href={item.product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                {item.product.title}
              </a>
            </h3>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">${item.product.price}</span>
              <span className="text-sm text-gray-500">
                {new Date(item.viewedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};