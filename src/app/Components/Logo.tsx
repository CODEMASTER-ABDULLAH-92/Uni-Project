// "use client";
// import React from 'react';

// // React Icons - Available icons
// import { 
//   SiAmazon, 
//   SiShopify, 
//   SiEbay, 
//   SiAlibabacloud,
//   SiWalmart,
//   SiEtsy,
//   SiTarget,
// //   SiBestbuy,
//   SiFlipkart,
//   SiAliexpress,
//   SiZalando,
//   SiAsus  // Using Asus instead of ASOS
// } from 'react-icons/si';

// // Lucide Icons
// import { 
//   ShoppingBag, 
//   Store, 
//   Truck, 
//   Package,
//   CreditCard,
//   ShieldCheck,
//   Star,
//   BadgePercent
// } from 'lucide-react';

// const TrustedByMarquee = () => {
//   // E-commerce companies with available React Icons
//   const companiesWithIcons = [
//     {
//       id: 1,
//       name: "Amazon",
//       icon: <SiAmazon className="w-full h-full" />,
//       color: "text-orange-500",
//       bgColor: "bg-orange-50"
//     },
//     {
//       id: 2,
//       name: "Shopify",
//       icon: <SiShopify className="w-full h-full" />,
//       color: "text-green-600",
//       bgColor: "bg-green-50"
//     },
//     {
//       id: 3,
//       name: "eBay",
//       icon: <SiEbay className="w-full h-full" />,
//       color: "text-blue-500",
//       bgColor: "bg-blue-50"
//     },
//     {
//       id: 4,
//       name: "Alibaba",
//       icon: <SiAlibabacloud className="w-full h-full" />,
//       color: "text-orange-600",
//       bgColor: "bg-orange-50"
//     },
//     {
//       id: 5,
//       name: "Walmart",
//       icon: <SiWalmart className="w-full h-full" />,
//       color: "text-blue-600",
//       bgColor: "bg-blue-50"
//     },
//     {
//       id: 6,
//       name: "Etsy",
//       icon: <SiEtsy className="w-full h-full" />,
//       color: "text-pink-600",
//       bgColor: "bg-pink-50"
//     },
//     {
//       id: 7,
//       name: "Target",
//       icon: <SiTarget className="w-full h-full" />,
//       color: "text-red-600",
//       bgColor: "bg-red-50"
//     },
//     // {
//     //   id: 8,
//     //   name: "Best Buy",
//     //   icon: <SiBestbuy className="w-full h-full" />,
//     //   color: "text-blue-700",
//     //   bgColor: "bg-blue-50"
//     // },
//     {
//       id: 9,
//       name: "Flipkart",
//       icon: <SiFlipkart className="w-full h-full" />,
//       color: "text-yellow-600",
//       bgColor: "bg-yellow-50"
//     },
//     {
//       id: 10,
//       name: "AliExpress",
//       icon: <SiAliexpress className="w-full h-full" />,
//       color: "text-red-500",
//       bgColor: "bg-red-50"
//     },
//     {
//       id: 11,
//       name: "Zalando",
//       icon: <SiZalando className="w-full h-full" />,
//       color: "text-black",
//       bgColor: "bg-gray-100"
//     },
//     {
//       id: 12,
//       name: "Asus",
//       icon: <SiAsus className="w-full h-full" />,
//       color: "text-purple-600",
//       bgColor: "bg-purple-50"
//     }
//   ];

//   // Alternative: Use generic shopping icons for missing brands
//   const companiesWithMixedIcons = [
//     {
//       id: 1,
//       name: "Amazon",
//       icon: <SiAmazon className="w-full h-full" />,
//       color: "text-orange-500",
//       bgColor: "bg-orange-50"
//     },
//     {
//       id: 2,
//       name: "Shopify",
//       icon: <SiShopify className="w-full h-full" />,
//       color: "text-green-600",
//       bgColor: "bg-green-50"
//     },
//     {
//       id: 3,
//       name: "eBay",
//       icon: <SiEbay className="w-full h-full" />,
//       color: "text-blue-500",
//       bgColor: "bg-blue-50"
//     },
//     {
//       id: 4,
//       name: "Alibaba",
//       icon: <SiAlibabacloud className="w-full h-full" />,
//       color: "text-orange-600",
//       bgColor: "bg-orange-50"
//     },
//     {
//       id: 5,
//       name: "Walmart",
//       icon: <SiWalmart className="w-full h-full" />,
//       color: "text-blue-600",
//       bgColor: "bg-blue-50"
//     },
//     {
//       id: 6,
//       name: "Etsy",
//       icon: <SiEtsy className="w-full h-full" />,
//       color: "text-pink-600",
//       bgColor: "bg-pink-50"
//     },
//     {
//       id: 7,
//       name: "Target",
//       icon: <SiTarget className="w-full h-full" />,
//       color: "text-red-600",
//       bgColor: "bg-red-50"
//     },
//   ];

//   // Features with Lucide Icons
//   const features = [
//     {
//       id: 1,
//       name: "Secure Payments",
//       icon: <ShieldCheck className="w-6 h-6" />,
//       description: "100% secure transactions"
//     },
//     {
//       id: 2,
//       name: "Fast Delivery",
//       icon: <Truck className="w-6 h-6" />,
//       description: "Free shipping over $50"
//     },
//     {
//       id: 3,
//       name: "Easy Returns",
//       icon: <Package className="w-6 h-6" />,
//       description: "30-day return policy"
//     },
//     {
//       id: 4,
//       name: "Best Prices",
//       icon: <BadgePercent className="w-6 h-6" />,
//       description: "Price match guarantee"
//     }
//   ];

//   // Use the safe list of companies
//   const duplicatedCompanies = [...companiesWithIcons, ...companiesWithIcons];

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16 border-y border-gray-200">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//             <ShoppingBag className="w-8 h-8 text-blue-600" />
//             Trusted By E-commerce Leaders
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Partnered with the world&apos;s most popular online marketplaces and retailers
//           </p>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative overflow-hidden mb-16">
//           {/* Gradient Overlays */}
//           <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
//           <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
//           {/* Marquee */}
//           <div className="flex">
//             <div className="flex animate-marquee whitespace-nowrap py-4">
//               {duplicatedCompanies.map((company, index) => (
//                 <div
//                   key={`${company.id}-${index}`}
//                   className="inline-flex flex-col items-center justify-center mx-6 group cursor-pointer"
//                 >
//                   <div className={`relative w-20 h-20 rounded-2xl ${company.bgColor} p-4 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
//                     <div className={`${company.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
//                       {company.icon}
//                     </div>
//                   </div>
//                   <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
//                     {company.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
//                   <div className="text-blue-600">
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 text-lg">
//                     {feature.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-1">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div className="group">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Star className="w-5 h-5 text-yellow-500" />
//                 <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                   4.9/5
//                 </div>
//               </div>
//               <div className="text-gray-600 text-sm">Customer Rating</div>
//             </div>
//             <div className="group">
//               <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
//                 2M+
//               </div>
//               <div className="text-gray-600 text-sm">Products Sold</div>
//             </div>
//             <div className="group">
//               <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
//                 100+
//               </div>
//               <div className="text-gray-600 text-sm">Brand Partners</div>
//             </div>
//             <div className="group">
//               <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
//                 24/7
//               </div>
//               <div className="text-gray-600 text-sm">Support</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//         @media (max-width: 768px) {
//           .animate-marquee {
//             animation: marquee 30s linear infinite;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrustedByMarquee;




"use client";
import React from 'react';
import { 
  SiAmazon, 
  SiShopify, 
  SiEbay, 
  SiWalmart,
  SiEtsy,
  SiTarget
} from 'react-icons/si';
import { ShoppingBag } from 'lucide-react';

const SimpleTrustedByMarquee = () => {
  const companies = [
    { id: 1, name: "Amazon", icon: SiAmazon, color: "text-orange-500" },
    { id: 2, name: "Shopify", icon: SiShopify, color: "text-green-600" },
    { id: 3, name: "eBay", icon: SiEbay, color: "text-blue-500" },
    { id: 4, name: "Walmart", icon: SiWalmart, color: "text-blue-600" },
    { id: 5, name: "Etsy", icon: SiEtsy, color: "text-pink-600" },
    { id: 6, name: "Target", icon: SiTarget, color: "text-red-600" },
  ];

  const duplicatedCompanies = [...companies, ...companies, ...companies,...companies,...companies,...companies,...companies];

  return (
    <div className="w-full bg-gray-50 py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            Trusted By Leading Brands
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedCompanies.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <div
                  key={`${company.id}-${index}`}
                  className="inline-flex items-center justify-center mx-8 group"
                >
                  <IconComponent 
                    className={`w-12 h-12 ${company.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SimpleTrustedByMarquee;