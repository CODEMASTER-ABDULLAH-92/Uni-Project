// app/deals/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { mockDeals } from '../../../public/assets';
import { DealsSection } from '@/app/Components/DealsSection';

export default function DealsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Deals' },
    { id: 'flash', name: 'Flash Deals' },
    { id: 'daily', name: "Today's Deals" },
    { id: 'promotion', name: 'Special Promotions' },
    { id: 'bundle', name: 'Bundle Offers' },
    { id: 'clearance', name: 'Clearance' },
  ];

  const filteredDeals = useMemo(() => {
    if (activeCategory === 'all') return mockDeals;
    return mockDeals.filter(deal => deal.type === activeCategory);
  }, [activeCategory]);

  const flashDeals = mockDeals.filter(deal => deal.type === 'flash');
  const dailyDeals = mockDeals.filter(deal => deal.type === 'daily');
  const promotionDeals = mockDeals.filter(deal => deal.type === 'promotion');
  const bundleDeals = mockDeals.filter(deal => deal.type === 'bundle');
  const clearanceDeals = mockDeals.filter(deal => deal.type === 'clearance');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Deals & Discounts</h1>
            <p className="text-xl opacity-90">
              Don`t miss out on these amazing offers! Limited time deals waiting for you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* All Deals View */}
        {activeCategory === 'all' ? (
          <div>
            {/* Flash Deals */}
            {flashDeals.length > 0 && (
              <DealsSection
                title="⚡ Flash Deals"
                subtitle="Limited time offers - Act fast before they're gone!"
                deals={flashDeals}
                variant="large"
                columns={2}
              />
            )}

            {/* Today's Deals */}
            {dailyDeals.length > 0 && (
              <DealsSection
                title="🔥 Today's Deals"
                subtitle="Fresh deals updated daily"
                deals={dailyDeals}
                columns={3}
              />
            )}

            {/* Special Promotions */}
            {promotionDeals.length > 0 && (
              <DealsSection
                title="🎁 Special Promotions"
                subtitle="Exclusive offers and seasonal discounts"
                deals={promotionDeals}
                columns={3}
              />
            )}

            {/* Bundle Offers */}
            {bundleDeals.length > 0 && (
              <DealsSection
                title="📦 Bundle Offers"
                subtitle="Save more when you buy together"
                deals={bundleDeals}
                columns={2}
              />
            )}

            {/* Clearance Section */}
            {clearanceDeals.length > 0 && (
              <DealsSection
                title="🧹 Clearance Section"
                subtitle="Last chance to grab these amazing products"
                deals={clearanceDeals}
                columns={4}
              />
            )}
          </div>
        ) : (
          /* Category-specific View */
          <DealsSection
            title={categories.find(c => c.id === activeCategory)?.name || 'Deals'}
            deals={filteredDeals}
            columns={activeCategory === 'flash' ? 2 : 4}
            variant={activeCategory === 'flash' ? 'large' : 'default'}
          />
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-2">Never Miss a Deal!</h2>
          <p className="mb-6 opacity-90">Subscribe to get notified about flash sales and exclusive offers</p>
          <div className="max-w-md mx-auto flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}