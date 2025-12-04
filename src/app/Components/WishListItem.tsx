import React from 'react';
import Image from 'next/image';
import { WishlistItem as WishlistItemType } from '../types/engagment';

interface WishlistItemProps {
  item: WishlistItemType;
  onRemove: (id: string) => void;
  onMoveToCart?: (id: string) => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  item,
  onRemove,
  onMoveToCart,
}) => {
  const renderStars = (rating: number) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
      {item.product.reviewCount && (
        <span className="text-sm text-gray-600 ml-1">
          ({item.product.reviewCount})
        </span>
      )}
    </div>
  );

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex space-x-4">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            fill
            src={item.product.image}
            alt={item.product.title}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                <a
                  href={item.product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.product.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {item.product.brand}
              </p>
              {renderStars(item.product.rating)}
            </div>

            <div className="text-right ml-4">
              <div className="flex items-baseline space-x-2">
                {item.product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(item.product.originalPrice)}
                  </span>
                )}
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(item.product.price)}
                </span>
              </div>
              {item.product.originalPrice && (
                <span className="text-sm text-green-600 font-medium">
                  Save{' '}
                  {Math.round(
                    (1 -
                      item.product.price / item.product.originalPrice) *
                      100
                  )}
                  %
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">
              Added {new Date(item.addedAt).toLocaleDateString()}
            </span>

            <div className="flex space-x-2">
              {onMoveToCart && (
                <button
                  onClick={() => onMoveToCart(item.id)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  Buy Now
                </button>
              )}
              <button
                aria-label="Remove from wishlist"
                onClick={() => onRemove(item.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove from wishlist"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
