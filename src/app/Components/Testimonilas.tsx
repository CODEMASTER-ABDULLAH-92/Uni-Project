"use client";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 15,
    name: "Sarah Johnson",
    message:
      "Shopygram has completely transformed my online shopping experience! The app is incredibly stable and the delivery is always on time. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Mike Chen",
    message:
      "Setting up my account was quick and easy. Within minutes I was browsing and ordering. Now it's my go-to shopping app for daily needs!",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Emily Rodriguez",
    message:
      "Shopping has never been this enjoyable! The interface is clean, responsive, and I love how user-friendly the entire experience is.",
    img: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 18,
    name: "David Thompson",
    message:
      "The customer support team at Shopygram is exceptional. They're always quick to respond and incredibly helpful with any order issues.",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 19,
    name: "Priya Patel",
    message:
      "The product recommendations are spot-on! Shopygram understands my style and needs better than any other shopping platform I've used.",
    img: "https://i.pravatar.cc/150?img=19",
  },
];

const testimonials2 = [
  {
    id: 8,
    name: "James Wilson",
    message:
      "I appreciate how much thought has gone into this app. It looks great, performs well, and has made my shopping so much more efficient.",
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Lisa Zhang",
    message:
      "The features are exactly what I needed for grocery shopping. Everything just works, and it feels like it was built specifically for busy people like me.",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Carlos Martinez",
    message:
      "Super easy to use and very reliable. I've recommended Shopygram to several friends and they all love it too. Excellent shopping experience!",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Aisha Khan",
    message:
      "The support team is amazing and the app keeps evolving with new features. I feel valued as a customer, which is rare these days.",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Ryan Cooper",
    message:
      "From design to delivery, everything about Shopygram feels premium. It has definitely raised the bar for online shopping apps.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 13,
    name: "Maya Singh",
    message:
      "This app helped me manage my household shopping without stress. I genuinely enjoy using it every week. It keeps me organized and saves time.",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 14,
    name: "Daniel Kim",
    message:
      "The entire shopping experience is smooth and straightforward. No unnecessary complexity, just what you need in the best way possible.",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 20,
    name: "Olivia Brown",
    message:
      "I wish I had found Shopygram earlier. It's intuitive, fast, and makes online shopping far less stressful. Definitely worth downloading!",
    img: "https://i.pravatar.cc/150?img=20",
  },
];

const testimonials3 = [
  {
    id: 1,
    name: "Alex Turner",
    message:
      "Shopping with Shopygram has been a game changer for my busy schedule. The app is clean, fast, and really easy to use. I can now shop efficiently while focusing on what really matters.",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sophia Williams",
    message:
      "I never thought online shopping could be this simple. The team has done an amazing job creating something so powerful yet so simple to navigate and use daily.",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Marcus Lee",
    message:
      "Everything works so smoothly! I was able to place my first order within minutes. The whole experience feels seamless and thoughtfully designed.",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Isabella Garcia",
    message:
      "Honestly, I was surprised at how intuitive the whole app felt. It saved me hours of shopping time and helped me discover amazing products.",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Kevin O'Neil",
    message:
      "I've tried many shopping apps before, but Shopygram stands out for its simplicity and reliability. It's fast, beautiful, and helps me find what I need effortlessly.",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Nadia Ali",
    message:
      "This app has helped me stay consistent with my shopping budget. The clean design and responsiveness make it an enjoyable part of my weekly routine.",
    img: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Tom Anderson",
    message:
      "Finally, a shopping app that actually understands what customers need! The experience is smooth, fast, and keeps improving with every update.",
    img: "https://i.pravatar.cc/150?img=7",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black lg:text-6xl font-bold  tracking-tight">
            What Our Shoppers <span className="text-[#ea8b61]">Say</span>
          </h2>
          <p className="text-[#909090] mt-3 text-sm md:text-base max-w-xl">
            Discover why thousands of customers trust Shopygram for their daily shopping needs
          </p>
        </div>

        {/* Stylish Divider - Only show on larger screens */}
        <hr className="hidden lg:block flex-1 max-w-xs mt-3 mb-4 ml-6 border-t border-[#ea8b61] opacity-70" />
        
        {/* Decorative elements */}
        <div className="hidden md:flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 text-[#ea8b61]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-white text-sm ml-2">4.9/5</span>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="relative border border-[#2e2e2e] rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#121212] to-[#0a0a0a] shadow-2xl shadow-[#ea8b61]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[500px] gap-6">
          {/* First Column */}
          <div className="flex flex-col gap-6 animate-testimonial-scroll-1 py-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`col1-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#ea8b61] text-2xl mr-2">&ldquo;</div>
                  <p className="text-white text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>
                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="relative">
                    <Image
                      width={44}
                      height={44}
                      alt={item.name}
                      className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
                      src={item.img}
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <span className="text-white font-medium block">{item.name}</span>
                    <span className="text-[#909090] text-xs">Verified Shopper</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column - reversed animation */}
          <div className="hidden md:flex flex-col gap-6 animate-testimonial-scroll-2 py-4">
            {[...testimonials2, ...testimonials2].map((item, index) => (
              <div
                key={`col2-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#ea8b61] text-2xl mr-2">&rdquo;</div>
                  <p className="text-white text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>
                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="relative">
                    <Image
                      width={44}
                      height={44}
                      alt={item.name}
                      className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
                      src={item.img}
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <span className="text-white font-medium block">{item.name}</span>
                    <span className="text-[#909090] text-xs">Verified Shopper</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column - hidden on smaller screens */}
          <div className="hidden lg:flex flex-col gap-6 animate-testimonial-scroll-3 py-4">
            {[...testimonials3, ...testimonials3].map((item, index) => (
              <div
                key={`col3-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#ea8b61] text-2xl mr-2">&ldquo;</div>
                  <p className="text-white text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>
                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="relative">
                    <Image
                      width={44}
                      height={44}
                      alt={item.name}
                      className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
                      src={item.img}
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <span className="text-white font-medium block">{item.name}</span>
                    <span className="text-[#909090] text-xs">Verified Shopper</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smoother transitions */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          <div className="h-24 bg-gradient-to-b from-[#121212] to-transparent"></div>
          <div className="h-24 bg-gradient-to-t from-[#121212] to-transparent"></div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#ea8b61] rounded-tl-2xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#ea8b61] rounded-br-2xl opacity-30"></div>

        <style jsx>{`
          @keyframes testimonialScroll1 {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes testimonialScroll2 {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes testimonialScroll3 {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-testimonial-scroll-1 {
            animation: testimonialScroll1 30s linear infinite;
          }

          .animate-testimonial-scroll-2 {
            animation: testimonialScroll2 35s linear infinite;
          }

          .animate-testimonial-scroll-3 {
            animation: testimonialScroll3 40s linear infinite;
          }

          .animate-testimonial-scroll-1:hover,
          .animate-testimonial-scroll-2:hover,
          .animate-testimonial-scroll-3:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonials;