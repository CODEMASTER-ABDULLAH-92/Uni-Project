
'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I become an affiliate?",
    answer: "You can join our affiliate program by signing up through our affiliate portal. Once approved, you'll get access to exclusive deals and commission rates.",
    category: "affiliate"
  },
  {
    question: "When will I receive my commission?",
    answer: "Commissions are paid out monthly, typically by the 15th of each month for the previous month's earnings. Minimum payout is $50.",
    category: "affiliate"
  },
  {
    question: "How do I track my affiliate sales?",
    answer: "You can track all your sales and commissions through your affiliate dashboard. We provide real-time analytics and reporting.",
    category: "affiliate"
  },
  {
    question: "What is your return policy?",
    answer: "Return policies vary by merchant. Please check the individual product page for specific return information. We recommend reviewing policies before purchasing.",
    category: "general"
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via email at support@shopygram.com, through our WhatsApp chat, or by filling out the contact form on this page.",
    category: "general"
  },
  {
    question: "Are the prices on ShopyGram final?",
    answer: "Prices are set by our merchant partners and may change without notice. We strive to keep prices updated, but always verify on the merchant's site before purchasing.",
    category: "general"
  }
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = ['all', 'affiliate', 'general', 'technical', 'billing'];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category === 'all' ? 'All Questions' : category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaqs.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900 pr-4">{item.question}</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItems.includes(index) && (
              <div className="px-4 pb-4">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still have questions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 text-center">
          Still have questions? <button className="font-semibold hover:underline">Contact our support team</button>
        </p>
      </div>
    </div>
  );
};