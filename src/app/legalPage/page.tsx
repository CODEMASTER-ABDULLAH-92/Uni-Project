"use client";
import React, { useState } from 'react';

const Page = () => {
    
  const [activeSection, setActiveSection] = useState('privacy');
  const legalSections = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "December 1, 2024",
      content: [
        {
          heading: "Information We Collect",
          text: "We collect information you provide directly to us, including name, email address, shipping address, and payment information when you make a purchase or create an account."
        },
        {
          heading: "How We Use Your Information",
          text: "We use the information we collect to process your orders, communicate with you about products and promotions, improve our services, and personalize your shopping experience."
        },
        {
          heading: "Information Sharing",
          text: "We do not sell your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting business."
        },
        {
          heading: "Data Security",
          text: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure."
        },
        {
          heading: "Your Rights",
          text: "You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time."
        },
        {
          heading: "Cookies",
          text: "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "December 1, 2024",
      content: [
        {
          heading: "Acceptance of Terms",
          text: "By accessing and using Shopygram, you accept and agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services."
        },
        {
          heading: "User Accounts",
          text: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities under your account."
        },
        {
          heading: "Product Information",
          text: "We strive to display accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, or error-free."
        },
        {
          heading: "Pricing and Payments",
          text: "All prices are subject to change without notice. We reserve the right to modify or discontinue any product or service without notice."
        },
        {
          heading: "Returns and Refunds",
          text: "Please review our return policy which is available on our website. We handle returns and refunds in accordance with our stated policies."
        },
        {
          heading: "Prohibited Uses",
          text: "You may not use our site for any illegal or unauthorized purpose. You must not transmit any worms or viruses or any code of a destructive nature."
        }
      ]
    },
    affiliate: {
      title: "Affiliate Disclosure",
      lastUpdated: "December 1, 2024",
      content: [
        {
          heading: "Amazon Associates Program",
          text: "Shopygram is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."
        },
        {
          heading: "How It Works",
          text: "When you click on certain links on our site and make a purchase on Amazon, we may earn a small commission at no additional cost to you. This helps support our website and allows us to continue providing valuable content."
        },
        {
          heading: "Product Recommendations",
          text: "Our product recommendations are based on genuine reviews and research. The affiliate relationships do not influence our content or product opinions. We only recommend products we believe provide value to our readers."
        },
        {
          heading: "Transparency",
          text: "We believe in complete transparency. All affiliate links are clearly marked, and we disclose our affiliate relationships in accordance with FTC guidelines."
        },
        {
          heading: "No Additional Cost",
          text: "There is no additional cost to you when purchasing through our affiliate links. The commission we earn comes from Amazon's marketing budget, not from your pocket."
        },
        {
          heading: "Your Support",
          text: "By using our affiliate links, you help support the maintenance and growth of Shopygram. We appreciate your support and are committed to providing honest, valuable content."
        }
      ]
    },
    cookie: {
      title: "Cookie Policy",
      lastUpdated: "December 1, 2024",
      content: [
        {
          heading: "What Are Cookies",
          text: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and understand how you use our site."
        },
        {
          heading: "Types of Cookies We Use",
          text: "We use session cookies (temporary) and persistent cookies (long-term). These include essential cookies for website functionality, analytics cookies, and marketing cookies."
        },
        {
          heading: "Essential Cookies",
          text: "These cookies are necessary for the website to function properly. They enable basic functions like Page navigation and access to secure areas of the website."
        },
        {
          heading: "Analytics Cookies",
          text: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and user experience."
        },
        {
          heading: "Marketing Cookies",
          text: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users."
        },
        {
          heading: "Managing Cookies",
          text: "You can control and/or delete cookies as you wish. You can delete all cookies already on your computer and set most browsers to prevent them from being placed."
        }
      ]
    }
  };

  const currentSection = legalSections[activeSection as keyof typeof legalSections];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Legal & Policies</h1>
          <p className="text-gray-600 text-lg">
            Understanding our policies and your rights
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 bg-gray-50 p-6 border-r border-gray-200">
              <nav className="space-y-2">
                {Object.entries(legalSections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                      activeSection === key
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Questions?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Email us at:{' '}
                  <a href="mailto:legal@shopygram.com" className="text-blue-600 hover:underline">
                    legal@shopygram.com
                  </a>
                </p>
                <p className="text-xs text-gray-500">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 p-8">
              <div className="max-w-3xl">
                {/* Section Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {currentSection.title}
                    </h2>
                    <p className="text-gray-500">
                      Last updated: {currentSection.lastUpdated}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
                    Print
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  {currentSection.content.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {item.heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional Legal Notes */}
                <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Important Notice</h3>
                  <p className="text-blue-700 text-sm">
                    This legal documentation is provided for informational purposes only and does not constitute legal advice. We recommend consulting with a legal professional for specific legal concerns.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    Accept All
                  </button>
                  <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-300 transition-all duration-300">
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2024 Shopygram. All rights reserved. | 
            <a href="#" className="text-blue-600 hover:underline mx-2">Contact Support</a> | 
            <a href="#" className="text-blue-600 hover:underline mx-2">Data Request</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;