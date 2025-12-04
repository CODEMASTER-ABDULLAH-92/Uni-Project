"use client";
import React, { useState } from 'react';

const NewsletterSignupCompact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Subscribed:', email);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-orange-50 to-pink-100 rounded-2xl shadow-xl border border-white/30 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Join Our Newsletter
        </h3>
        <p className="text-gray-600 mb-6">
          Get 10% off your first order and stay updated with our latest collections
        </p>
        
        <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-white/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignupCompact;