// components/DealCard.tsx
import React from 'react';
import { Deal } from '../types/deals';
import { CountdownTimer } from './CountdownTimer';
import Image from 'next/image';

interface DealCardProps {
  deal: Deal;
  variant?: 'default' | 'large';
}

export const DealCard: React.FC<DealCardProps> = ({ deal, variant = 'default' }) => {
  const renderStars = (rating: number) => {
    return (
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
      </div>
    );
  };

  if (variant === 'large') {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <Image
            src={deal.image}
            alt={deal.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {deal.discount}% OFF
            </span>
          </div>
          {deal.type === 'flash' && deal.endTime && (
            <div className="absolute bottom-3 left-3 right-3">
              <CountdownTimer endTime={deal.endTime} />
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 flex-1">{deal.title}</h3>
            {deal.type === 'bundle' && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">
                {deal.items} items
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">{deal.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">${deal.price}</span>
              <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
            </div>
            {deal.rating && (
              <div className="flex items-center space-x-1">
                {renderStars(deal.rating)}
                <span className="text-sm text-gray-600">({deal.reviewCount})</span>
              </div>
            )}
          </div>
          
          <a
            href={deal.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 block"
          >
            Shop Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <Image
          src={deal.image}
          alt={deal.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            {deal.discount}% OFF
          </span>
        </div>
        {deal.type === 'bundle' && (
          <div className="absolute top-2 right-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
              Bundle
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{deal.title}</h3>
        
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-lg font-bold text-gray-900">${deal.price}</span>
          <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
        </div>
        
        {deal.type === 'flash' && deal.endTime && (
          <div className="mb-3">
            <CountdownTimer endTime={deal.endTime} />
          </div>
        )}
        
        <a
          href={deal.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-red-500 text-white text-center py-2 px-4 rounded-md hover:bg-red-600 transition-colors block text-sm font-medium"
        >
          Get Deal
        </a>
      </div>
    </div>
  );
};