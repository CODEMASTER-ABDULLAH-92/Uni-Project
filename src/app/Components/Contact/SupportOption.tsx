"use client";
import React from 'react';
import { SupportOption } from '../../types/contact';

const supportOptions: SupportOption[] = [
  {
    id: 'email',
    title: 'Email Support',
    description: 'Send us an email and we\'ll get back to you within 24 hours',
    icon: '✉️',
    contact: 'support@shopygram.com',
    responseTime: 'Within 24 hours'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Chat',
    description: 'Quick chat support via WhatsApp for instant assistance',
    icon: '💬',
    contact: '+1 (555) 123-4567',
    responseTime: 'Within minutes',
    hours: '9 AM - 6 PM EST'
  },
  {
    id: 'faq',
    title: 'FAQ & Help Center',
    description: 'Find instant answers to common questions in our knowledge base',
    icon: '❓',
    contact: 'Browse Help Center',
    responseTime: 'Instant'
  },
  {
    id: 'community',
    title: 'Community Forum',
    description: 'Get help from our community of users and experts',
    icon: '👥',
    contact: 'Visit Forum',
    responseTime: 'Varies'
  }
];

export const SupportOptions: React.FC = () => {
  const handleContactClick = (option: SupportOption) => {
    switch (option.id) {
      case 'email':
        window.location.href = `mailto:${option.contact}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${option.contact.replace(/\D/g, '')}`, '_blank');
        break;
      case 'faq':
        // Navigate to FAQ page
        console.log('Navigate to FAQ');
        break;
      case 'community':
        // Navigate to community forum
        console.log('Navigate to community forum');
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {supportOptions.map((option) => (
        <div
          key={option.id}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => handleContactClick(option)}
        >
          <div className="flex items-start space-x-4">
            <div className="text-3xl">{option.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-3">{option.description}</p>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Contact:</span>{' '}
                  <span className="text-blue-600 hover:text-blue-700">{option.contact}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Response Time:</span> {option.responseTime}
                </p>
                {option.hours && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Hours:</span> {option.hours}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};