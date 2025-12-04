import React from 'react';
import { trustFactors } from '../../../../public/assets';

export const TrustFactors: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ShopyGram?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We`re building the most trusted shopping platform by putting your needs first
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{factor.icon}</div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{factor.title}</h3>
                    {factor.stat && (
                      <span className="text-2xl font-bold text-blue-600">{factor.stat}</span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <p className="text-gray-600">Products Reviewed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Trusted Brands</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600">Daily Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};