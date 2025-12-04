// app/contact/page.tsx
import React from 'react';
import { ContactForm } from '@/app/Components/Contact/ContactForm';
import { SupportOptions } from '@/app/Components/Contact/SupportOption';
import { FAQSection } from '@/app/Components/Contact/Faqs';
import { WhatsAppWidget } from '@/app/Components/Contact/WhatsappWidget';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Support</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We`re here to help! Choose the best way to get in touch with our support team.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Support Options */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <SupportOptions />
            </section>

            {/* Contact Form */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <a href="mailto:support@shopygram.com" className="text-blue-600 hover:text-blue-700">
                    support@shopygram.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                  <a href="https://wa.me/15551234567" className="text-blue-600 hover:text-blue-700">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM EST</p>
                  <p className="text-gray-600">Weekends: 10 AM - 4 PM EST</p>
                </div>
              </div>
            </div>

            {/* Live Chat Coming Soon */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6">
              <div className="text-center">
                <div className="text-purple-500 text-4xl mb-3">🤖</div>
                <h4 className="font-semibold text-purple-900 mb-2">AI Chatbot Coming Soon</h4>
                <p className="text-purple-700 text-sm">
                  Get instant answers with our AI-powered chatbot. Available 24/7 for quick support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}