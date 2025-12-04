import React from 'react';
import { values } from '../../../../public/assets';

export const Values: React.FC = () => {
  return (
    <div className="bg-white py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at ShopyGram
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="text-3xl flex-shrink-0">{value.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};