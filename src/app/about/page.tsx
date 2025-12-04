"use client";
import React from 'react';
import { MissionStory } from '@/app/Components/about/AboutMission';
import { TrustFactors } from '@/app/Components/about/TrustFactor';
import { Values } from '@/app/Components/about/values';
import { TeamSection } from '@/app/Components/about/TeamSection';
import { LegalCompliance } from '@/app/Components/about/LegalComplaince';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mission & Story */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MissionStory />
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustFactors />
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Values />
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamSection />
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalCompliance />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Shop Smarter?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of users who trust ShopyGram for honest product recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Shopping
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}