'use client';

// import { useState } from 'react';
import ProductManagement from '@/app/Components/admin/ProductManagment';

export default function AdminDashboard() {
  // const [activeTab, setActiveTab] = useState<'products'>('products');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Welcome, Abdullah 👋</span>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation - Only Products Tab */}
      <nav className="bg-gray-100 border-b border-gray-200 sticky top-[64px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
          <button
            className={`relative py-3 px-5 text-sm font-medium transition-all duration-200 
              text-blue-600 `}
          >
            Products
            <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-600 rounded-t-lg"></span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <ProductManagement />
        </div>
      </main>
    </div>
  );
}