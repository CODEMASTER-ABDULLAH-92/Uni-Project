import React from 'react';
import WishlistItem from '@/app/Components/WishListItem'; // ✅ Component import
import { WishlistItem as WishlistItemType } from '../types/engagment'; // ✅ Type import

interface WishlistSectionProps {
  items: WishlistItemType[];
  onRemoveItem: (id: string) => void;
  onMoveToCart: (id: string) => void;
}

export const WishlistSection: React.FC<WishlistSectionProps> = ({
  items,
  onRemoveItem,
  onMoveToCart,
}) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <div className="text-gray-400 text-6xl mb-4">❤️</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Your wishlist is empty
        </h3>
        <p className="text-gray-600 mb-6">
          Start saving your favorite products for later!
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
          <p className="text-gray-600 mt-1">{items.length} items saved</p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm">
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            onRemove={onRemoveItem}
            onMoveToCart={onMoveToCart}
          />
        ))}
      </div>
    </div>
  );
};
