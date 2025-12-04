import React from 'react';
import { Comparison } from '../types/engagment';
import Image from 'next/image';

interface ComparisonSectionProps {
  comparisons: Comparison[];
  onDeleteComparison: (id: string) => void;
  onNewComparison: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  comparisons,
  onDeleteComparison,
  onNewComparison
}) => {
  if (comparisons.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <div className="text-gray-400 text-6xl mb-4">⚖️</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No product comparisons</h3>
        <p className="text-gray-600 mb-6">Compare products side by side to make better decisions</p>
        <button 
          onClick={onNewComparison}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Start Comparing
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Product Comparisons</h2>
          <p className="text-gray-600 mt-1">Compare products side by side</p>
        </div>
        <button 
          onClick={onNewComparison}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          New Comparison
        </button>
      </div>

      <div className="space-y-6">
        {comparisons.map((comparison) => (
          <div key={comparison.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Comparison {new Date(comparison.createdAt).toLocaleDateString()}
              </h3>
              <button
                onClick={() => onDeleteComparison(comparison.id)}
                className="text-red-500 hover:text-red-700 transition-colors text-sm"
              >
                Delete
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparison.products.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">{product.title}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold">${product.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand:</span>
                      <span>{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span>{product.rating}/5</span>
                    </div>
                  </div>
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors block mt-3 text-sm"
                  >
                    View Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};