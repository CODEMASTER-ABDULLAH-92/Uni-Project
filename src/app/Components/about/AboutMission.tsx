import React from 'react';
import { missionData } from '../../../../public/assets';

export const MissionStory: React.FC = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 px-6 sm:py-16 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          About ShopyGram
        </h1>
        <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Your trusted companion in the world of online shopping
        </p>
      </div>

      <div className="p-6 sm:p-8 md:p-12">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200">
            <div 
              className="text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4" 
              role="img" 
              aria-label="Mission target icon"
            >
              🎯
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {missionData.mission}
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-200">
            <div 
              className="text-purple-600 text-3xl sm:text-4xl mb-3 sm:mb-4" 
              role="img" 
              aria-label="Vision eye icon"
            >
              👁️
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {missionData.vision}
            </p>
          </div>
        </div>
        {/* Brand Story */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Our Story
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
            {missionData.story.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-base sm:text-lg leading-7 sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};