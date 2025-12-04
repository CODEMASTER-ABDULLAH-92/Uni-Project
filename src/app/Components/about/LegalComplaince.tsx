import React from 'react';
import Link from 'next/link';

export const LegalCompliance: React.FC = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        Legal & Compliance
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {/* Affiliate Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-3 sm:mb-4 flex items-center">
            <span 
              className="text-xl sm:text-2xl mr-2 sm:mr-3" 
              role="img" 
              aria-label="Warning"
            >
              ⚠️
            </span>
            Affiliate Disclosure
          </h3>
          <div className="text-yellow-700 space-y-2 sm:space-y-3 text-sm sm:text-base">
            <p>
              <strong>Transparency is our priority.</strong> ShopyGram participates in various affiliate marketing programs, which means we may earn commissions on purchases made through our links to retailer sites.
            </p>
            <p>
              <strong>How it works:</strong> When you click on an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. These commissions help us maintain and improve our platform.
            </p>
            <p>
              <strong>Our promise:</strong> We never allow affiliate relationships to influence our content. Our reviews remain honest, unbiased, and focused on helping you make the best purchasing decisions.
            </p>
            <p className="font-semibold text-sm sm:text-base">
              All prices are subject to change and may vary from those shown on our site.
            </p>
          </div>
        </div>

        {/* Privacy & Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Privacy Commitment
            </h3>
            <ul className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                We never sell your personal data to third parties
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Transparent data collection practices
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Secure encryption for all user data
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Clear cookie and tracking policies
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Easy opt-out options for marketing
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              User Rights
            </h3>
            <ul className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Right to access your personal data
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Right to request data deletion
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Right to opt-out of data processing
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Right to data portability
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Clear dispute resolution process
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Our Compliance Standards
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: '🔒', label: 'GDPR Compliant' },
              { icon: '📝', label: 'FTC Guidelines' },
              { icon: '🌐', label: 'CCPA Ready' },
              { icon: '✅', label: 'SSL Secure' }
            ].map((badge, index) => (
              <div 
                key={index}
                className="bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 flex-1 min-w-[120px] max-w-[140px]"
              >
                <div 
                  className="text-xl sm:text-2xl mb-1 sm:mb-2"
                  role="img"
                  aria-label={badge.label}
                >
                  {badge.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Legal */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">
            Legal Inquiries
          </h3>
          <p className="text-blue-700 mb-2 sm:mb-3 text-sm sm:text-base">
            For legal questions or compliance concerns, please contact our legal team
          </p>
          <Link 
            href="mailto:legal@shopygram.com" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors"
            aria-label="Send email to legal team"
          >
            legal@shopygram.com
          </Link>
        </div>
      </div>
    </div>
  );
};