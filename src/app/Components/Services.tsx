import React from "react";
import { Truck, HelpCircle, RotateCcw, Wallet } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      heading: "Free Shipping",
      content: "Get your sunglasses in 4-7 business days.",
    },
    {
      icon: <HelpCircle className="w-12 h-12 text-green-600" />,
      heading: "24/7 Customer Support",
      content: "We're here to answer all your questions anytime.",
    },
    {
      icon: <RotateCcw className="w-12 h-12 text-purple-600" />,
      heading: "Easy Returns",
      content: "Hassle-free 7-day return policy for all orders.",
    },
    {
      icon: <Wallet className="w-12 h-12 text-orange-600" />,
      heading: "Cash on Delivery",
      content: "Pay when you receive your order securely.",
    },
  ];

  // Duplicate the services for seamless looping
  const duplicatedServices = [...services, ...services,...services,...services,...services,...services];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          We offer the best shopping experience for our customers with premium services
        </p>
      </div>

      {/* Animated Services Container */}
      <div className="relative overflow-hidden">
        {/* Animated Services Row */}
        <div className="flex animate-services-scroll gap-6 md:gap-8">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {service.heading}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {service.content}
              </p>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      {/* Additional Features Section */}
      {/* <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            We are committed to providing the best quality products with exceptional customer service
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <span className="bg-white px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium">
              ✓ Premium Quality
            </span>
            <span className="bg-white px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium">
              ✓ Fast Delivery
            </span>
            <span className="bg-white px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium">
              ✓ Secure Payment
            </span>
            <span className="bg-white px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium">
              ✓ 100% Satisfaction
            </span>
          </div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes services-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-services-scroll {
          animation: services-scroll 10s linear infinite;
        }

        .animate-services-scroll:hover {
          animation-play-state: paused;
        }

        /* Adjust animation speed for different screen sizes */
        @media (max-width: 768px) {
          .animate-services-scroll {
            animation-duration: 10s;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;