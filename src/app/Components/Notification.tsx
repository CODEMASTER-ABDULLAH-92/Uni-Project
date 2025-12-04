"use client";
import React from 'react';
import { NotificationPreference } from '../types/engagment';

interface NotificationPreferencesProps {
  preferences: NotificationPreference[];
  onPreferenceChange: (id: string, enabled: boolean) => void;
}

export const NotificationPreferences: React.FC<NotificationPreferencesProps> = ({
  preferences,
  onPreferenceChange
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Notification Preferences</h2>
      <p className="text-gray-600 mb-6">Choose how you want to receive updates and deals</p>

      <div className="space-y-4">
        {preferences.map((preference) => (
          <div key={preference.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{preference.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{preference.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preference.enabled}
                onChange={(e) => onPreferenceChange(preference.id, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter Signup</h3>
        <p className="text-gray-600 mb-4">Get weekly deals and product updates delivered to your inbox</p>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};