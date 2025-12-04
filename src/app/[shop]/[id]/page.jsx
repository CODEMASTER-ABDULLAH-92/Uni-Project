// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import UpperNav from "@/app/Components/UpperNav";
// import LowerNav from "@/app/Components/LowerNav";
// import Image from "next/image";
// import { Check, Minus, Plus } from "lucide-react";
// import Footer from "@/app/Components/Footer";
// import { WhatsAppWidget } from "@/app/Components/Contact/WhatsappWidget";
// import axios from "axios";
// import Link from "next/link";

// // ✅ Define Product Type matching your backend
// interface Product {
//   _id: string;
//   imag1: string[]; // Changed from StaticImageData[] to string[]
//   heading: string;
//   price: number; // Changed from string to number
//   category: string;
//   colors: string[];
//   sizes: string[];
//   description: string; // Fixed typo from 'discription'
//   materialCare: string;
//   bestSeller?: boolean;
//   newItem?: boolean;
//   affiliateLink: string;
// }

// const Page = () => {
//   const { id } = useParams();
//   const [data, setData] = useState<Product | null>(null);
//   const [selectedColor, setSelectedColor] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(0);
//   const [activeSection, setActiveSection] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // ✅ Fetch product data from backend API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`/api/store/getAllProduct`);

//         if (response.data.success) {
//           // Filter to find the product with matching _id
//           const foundProduct = response.data.products.find(
//             (product: Product) => product._id === id
//           );

//           if (foundProduct) {
//             setData(foundProduct);
//           } else {
//             setError("Product not found");
//           }
//         } else {
//           setError("Failed to fetch products");
//         }
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Error loading product");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchData();
//     }
//   }, [id]);

//   const incrementQuantity = () => setQuantity((prev) => prev + 1);
//   const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

//   const handleAddToCart = () => {
//     if (!data) return;

//     const productData = {
//       id: data._id,
//       name: data.heading,
//       price: data.price,
//       color: data.colors[selectedColor],
//       size: data.sizes[selectedSize],
//       quantity: quantity,
//       image: data.imag1[0],
//     };
//     console.log("Added to cart:", productData);
//     // Add your cart logic here
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-xl">Loading product...</div>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !data) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <h1 className="text-red-500 text-xl">{error || "Product not found"}</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-full bg-white relative">
//       <div className="space-y-4 sticky top-8 z-40">
//         <UpperNav />
//         <LowerNav />
//       </div>

//       {/* Product Container */}
//       <div className="flex flex-col md:flex-row gap-6 mt-10 p-6 max-w-7xl mx-auto relative">
//         {/* Left Side - Thumbnails and Main Images */}
//         <div className="w-full md:w-1/2 flex flex-row min-h-full relative gap-4">
//           {/* Thumbnails - Fixed positioning removed for better responsiveness */}
//           <div className="flex flex-col gap-3">
//             {data.imag1.map((imgSrc, index) => (
//               <div
//                 key={index}
//                 className="relative w-20 h-20 bg-[#f8f8f8] rounded-lg border border-gray-300 cursor-pointer"
//               >
//                 <Image
//                   src={imgSrc}
//                   alt={`Thumbnail ${index + 1}`}
//                   fill
//                   className="object-cover rounded-lg"
//                   onError={(e) => {
//                     e.currentTarget.src = "/api/placeholder/80/80";
//                   }}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Main Images */}
//           <div className="flex-1 flex flex-col gap-4 min-h-full">
//             {data.imag1.map((imgSrc, index) => (
//               <div key={index} className="relative aspect-square w-full">
//                 <Image
//                   src={imgSrc}
//                   alt={`${data.heading} - View ${index + 1}`}
//                   fill
//                   className="object-cover bg-[#f8f8f8] rounded-lg shadow-sm"
//                   onError={(e) => {
//                     e.currentTarget.src = "/api/placeholder/400/400";
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Product Details */}
//         <div className="w-full md:w-1/2 self-start sticky top-32 bg-[#f8f8f8] p-6 rounded-xl shadow-md space-y-5">
//           {/* Breadcrumb */}
//           <nav aria-label="Breadcrumb">
//             <p className="text-sm text-gray-600 flex gap-1">
//               <span className="font-medium cursor-pointer hover:text-gray-500 transition-colors">
//                 Shop
//               </span>
//               /
//               <span className="font-medium cursor-pointer hover:text-gray-500 transition-colors">
//                 {data.category}
//               </span>
//             </p>
//           </nav>

//           {/* Heading & Price */}
//           <h1 className="text-3xl font-semibold">{data.heading}</h1>
//           <p className="text-2xl font-bold text-gray-800">${data.price}</p>

//           <hr className="border-gray-300 my-4" />

//           {/* Colors - Only show if colors exist */}
//           {data.colors && data.colors.length > 0 && (
//             <section>
//               <h2 className="text-lg font-semibold mb-2">Colors</h2>
//               <div className="flex gap-2 flex-wrap">
//                 {data.colors.map((color, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedColor(index)}
//                     className={`px-4 py-1.5 border rounded-md text-sm transition-all ${
//                       selectedColor === index
//                         ? "bg-gray-800 text-white border-gray-800"
//                         : "bg-white border-gray-300 hover:border-gray-800"
//                     }`}
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Sizes - Only show if sizes exist */}
//           {data.sizes && data.sizes.length > 0 && (
//             <section>
//               <h2 className="text-lg font-semibold mb-2">Sizes</h2>
//               <div className="flex gap-2 flex-wrap">
//                 {data.sizes.map((size, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedSize(index)}
//                     className={`px-4 py-1.5 border rounded-md text-sm transition-all ${
//                       selectedSize === index
//                         ? "bg-gray-800 text-white border-gray-800"
//                         : "bg-white border-gray-300 hover:border-gray-800"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </section>
//           )}

//           <hr className="border-gray-300 my-4" />

//           {/* Tabs */}
//           <div role="tablist" className="flex justify-start gap-6">
//             {["Description", "Materials & Care", "Size & Fit"].map(
//               (label, index) => (
//                 <button
//                   key={index}
//                   role="tab"
//                   onClick={() => setActiveSection(index)}
//                   className={`text-lg font-medium cursor-pointer border-b-2 pb-1 transition ${
//                     activeSection === index
//                       ? "text-gray-900 border-gray-900"
//                       : "text-gray-500 border-transparent hover:border-gray-300"
//                   }`}
//                 >
//                   {label}
//                 </button>
//               )
//             )}
//           </div>

//           {/* Section Content */}
//           <div role="tabpanel" className="min-h-[100px]">
//             {activeSection === 0 ? (
//               <p className="text-gray-700 text-base leading-relaxed">
//                 {data.description}
//               </p>
//             ) : activeSection === 1 ? (
//               <ul className="space-y-2 mt-2">
//                 {data.materialCare.split("\n").map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-700 text-sm">
//                 Size and fit information coming soon...
//               </p>
//             )}
//           </div>

//           <hr className="border-gray-300 my-4" />

//           {/* Quantity & Add to Cart */}
//           <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//             <div className="bg-gray-200 p-2 flex w-[130px] rounded-lg justify-between items-center">
//               <button
//                 onClick={decrementQuantity}
//                 className="bg-white p-1 rounded-md hover:bg-gray-100 transition"
//                 aria-label="Decrease quantity"
//               >
//                 <Minus size={20} />
//               </button>
//               <span className="font-medium">{quantity}</span>
//               <button
//                 onClick={incrementQuantity}
//                 className="bg-white p-1 rounded-md hover:bg-gray-100 transition"
//                 aria-label="Increase quantity"
//               >
//                 <Plus size={20} />
//               </button>
//             </div>

//             <a
//               href="/payment_integration"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={handleAddToCart}
//               className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors flex-1 sm:flex-none"
//             >
//               Add to Cart
//             </a>
//           </div>
//         </div>

//         <WhatsAppWidget />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Page;


"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import UpperNav from "@/app/Components/UpperNav";
import LowerNav from "@/app/Components/LowerNav";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import Footer from "@/app/Components/Footer";
import { WhatsAppWidget } from "@/app/Components/Contact/WhatsappWidget";
import axios from "axios";
import Link from "next/link";
import  {useCart}  from "@/app/Context/cartContext"

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const [data, setData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/store/getAllProduct`);

        if (response.data.success) {
          const foundProduct = response.data.products.find(
            (product) => product._id === id
          );

          if (foundProduct) {
            setData(foundProduct);
          } else {
            setError("Product not found");
          }
        } else {
          setError("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Error loading product");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (!data) return;

    const productData = {
      id: data._id,
      name: data.heading,
      price: data.price,
      color: data.colors?.[selectedColor] || "",
      size: data.sizes?.[selectedSize] || "",
      quantity: quantity,
      image: data.imag1?.[0] || "",
    };

    addToCart(productData);
    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">Loading product...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-red-500 text-xl">{error || "Product not found"}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white relative">
      <div className="space-y-4 sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <UpperNav />
        <LowerNav />
      </div>

      {/* Product Container */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 p-6 max-w-7xl mx-auto relative">
        {/* Left Side - Thumbnails and Main Images */}
        <div className="w-full md:w-1/2 flex flex-row min-h-full relative gap-4">
          <div className="flex flex-col gap-3">
            {data.imag1?.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-20 h-20 bg-[#f8f8f8] rounded-lg border border-gray-300 cursor-pointer overflow-hidden"
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Main Images */}
          <div className="flex-1 flex flex-col gap-4 min-h-full">
            {data.imag1?.map((imgSrc, index) => (
              <div key={index} className="relative aspect-square w-full">
                <Image
                  src={imgSrc}
                  alt={`${data.heading} - View ${index + 1}`}
                  fill
                  className="object-cover bg-[#f8f8f8] rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 self-start sticky top-24 bg-[#f8f8f8] p-6 rounded-xl shadow-md space-y-5">
          <nav aria-label="Breadcrumb">
            <p className="text-sm text-gray-600 flex gap-1">
              <span className="font-medium cursor-pointer hover:text-gray-500 transition-colors">
                Shop
              </span>
              /
              <span className="font-medium cursor-pointer hover:text-gray-500 transition-colors">
                {data.category}
              </span>
            </p>
          </nav>

          <h1 className="text-3xl font-semibold">{data.heading}</h1>
          <p className="text-2xl font-bold text-gray-800">Rs.{data.price}</p>

          <hr className="border-gray-300 my-4" />

          {data.colors && data.colors.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-2">Colors</h2>
              <div className="flex gap-2 flex-wrap">
                {data.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`px-4 py-1.5 border rounded-md text-sm transition-all ${
                      selectedColor === index
                        ? "bg-gray-800 text-white border-gray-800"
                        : "bg-white border-gray-300 hover:border-gray-800"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </section>
          )}

          {data.sizes && data.sizes.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-2">Sizes</h2>
              <div className="flex gap-2 flex-wrap">
                {data.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(index)}
                    className={`px-4 py-1.5 border rounded-md text-sm transition-all ${
                      selectedSize === index
                        ? "bg-gray-800 text-white border-gray-800"
                        : "bg-white border-gray-300 hover:border-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>
          )}

          <hr className="border-gray-300 my-4" />

          <div role="tablist" className="flex justify-start gap-6">
            {["Description", "Materials & Care", "Size & Fit"].map(
              (label, index) => (
                <button
                  key={index}
                  role="tab"
                  onClick={() => setActiveSection(index)}
                  className={`text-lg font-medium cursor-pointer border-b-2 pb-1 transition ${
                    activeSection === index
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500 border-transparent hover:border-gray-300"
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>

          <div role="tabpanel" className="min-h-[100px]">
            {activeSection === 0 ? (
              <p className="text-gray-700 text-base leading-relaxed">
                {data.description}
              </p>
            ) : activeSection === 1 ? (
              <ul className="space-y-2 mt-2">
                {data.materialCare?.split("\n").map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-sm">
                Size and fit information coming soon...
              </p>
            )}
          </div>

          <hr className="border-gray-300 my-4" />

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="bg-gray-200 p-2 flex w-[130px] rounded-lg justify-between items-center">
              <button
                onClick={decrementQuantity}
                className="bg-white p-1 rounded-md hover:bg-gray-100 transition"
                aria-label="Decrease quantity"
              >
                <Minus size={20} />
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-white p-1 rounded-md hover:bg-gray-100 transition"
                aria-label="Increase quantity"
              >
                <Plus size={20} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors flex-1 sm:flex-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <WhatsAppWidget />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
