// // "use client";

// // import React from "react";
// // import { useCart } from "../Context/cartContext";
// // import { useRouter } from "next/navigation";

// // const InvoicePage = () => {
// //   const { lastOrder } = useCart();
// //   const router = useRouter();

// //   if (!lastOrder) {
// //     return (
// //       <div className="min-h-screen flex flex-col items-center justify-center">
// //         <p className="mb-4">No invoice found.</p>
// //         <button
// //           onClick={() => router.push("/")}
// //           className="px-6 py-2 bg-gray-800 text-white rounded-md"
// //         >
// //           Go to Home
// //         </button>
// //       </div>
// //     );
// //   }

// //   const { id, cart, checkoutData, total, createdAt } = lastOrder;

// //   return (
// //     <div className="min-h-screen p-6 max-w-4xl mx-auto">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-semibold">Invoice</h1>
// //         <div className="text-right">
// //           <p className="text-sm text-gray-600">Order ID: {id}</p>
// //           <p className="text-sm text-gray-600">
// //             Date: {new Date(createdAt).toLocaleString()}
// //           </p>
// //         </div>
// //       </div>

// //       <div className="border rounded-lg p-4 mb-6 bg-gray-50">
// //         <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
// //         <p>{checkoutData.fullName}</p>
// //         <p>{checkoutData.address}</p>
// //         <p>
// //           {checkoutData.city} | {checkoutData.phone}
// //         </p>
// //       </div>

// //       <div className="border rounded-lg p-4 mb-6 bg-gray-50">
// //         <h2 className="text-xl font-semibold mb-4">Order Items</h2>
// //         <table className="w-full text-sm">
// //           <thead>
// //             <tr className="border-b">
// //               <th className="text-left py-2">Product</th>
// //               <th className="text-left py-2">Options</th>
// //               <th className="text-right py-2">Qty</th>
// //               <th className="text-right py-2">Price</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {cart.map((item, idx) => (
// //               <tr key={idx} className="border-b">
// //                 <td className="py-2">{item.name}</td>
// //                 <td className="py-2 text-gray-600">
// //                   {item.color} | {item.size}
// //                 </td>
// //                 <td className="py-2 text-right">{item.quantity}</td>
// //                 <td className="py-2 text-right">
// //                   Rs.{item.price * item.quantity}
// //                 </td>
// //               </tr>
// //             ))}
// //             <tr>
// //               <td colSpan={3} className="py-2 text-right font-semibold">
// //                 Total
// //               </td>
// //               <td className="py-2 text-right font-semibold">Rs.{total}</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>

// //       <button
// //         onClick={() => window.print()}
// //         className="px-6 py-2 bg-gray-800 text-white rounded-md mr-3"
// //       >
// //         Print Invoice
// //       </button>

// //       <button
// //         onClick={() => router.push("/")}
// //         className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md"
// //       >
// //         Back to Home
// //       </button>
// //     </div>
// //   );
// // };

// // export default InvoicePage;





// "use client";

// import React from "react";
// import { useCart } from "../Context/cartContext";
// import { useRouter } from "next/navigation";

// const InvoicePage = () => {
//   const { lastOrder } = useCart();
//   const router = useRouter();

//   // 1. Initial Check for lastOrder existence
//   if (!lastOrder) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-6">
//         <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
//         <p className="mb-6 text-gray-600">
//           It looks like you haven't finalized an order yet.
//         </p>
//         <button
//           onClick={() => router.push("/")}
//           className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
//         >
//           Go to Home
//         </button>
//       </div>
//     );
//   }

//   // 2. Destructure and Safely Access Data
//   // Use a default empty array [] for 'cart' in case it's missing or null
//   // within the lastOrder object, preventing the .map() error.
//   const { 
//     id, 
//     cart = [], // <-- FIX: Set default to [] to prevent 'Cannot read properties of undefined (reading 'map')'
//     checkoutData, 
//     total, 
//     createdAt 
//   } = lastOrder;

//   // Additional safe checks for required objects
//   if (!checkoutData || !total) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-6">
//         <h1 className="text-2xl font-bold mb-4">Incomplete Order Data</h1>
//         <p className="mb-6 text-gray-600">
//           The order details are incomplete.
//         </p>
//         <button
//           onClick={() => router.push("/")}
//           className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
//         >
//           Go to Home
//         </button>
//       </div>
//     );
//   }


//   return (
//     <div className="min-h-screen p-6 max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-8 border-b pb-4">
//         <h1 className="text-4xl font-extrabold text-gray-800">Invoice</h1>
//         <div className="text-right">
//           <p className="text-sm text-gray-600">
//             **Order ID:** **{id}**
//           </p>
//           <p className="text-sm text-gray-600">
//             **Date:** {new Date(createdAt).toLocaleString()}
//           </p>
//         </div>
//       </div>

//       {/* Billing Details */}
//       <div className="border rounded-xl shadow-md p-6 mb-8 bg-white">
//         <h2 className="text-xl font-semibold mb-3 text-gray-700">
//           Recipient Details
//         </h2>
//         <p className="font-medium">{checkoutData.fullName}</p>
//         <p className="text-gray-600">{checkoutData.address}</p>
//         <p className="text-gray-600">
//           {checkoutData.city} | **Phone:** {checkoutData.phone}
//         </p>
//       </div>

//       {/* Order Items Table */}
//       <div className="border rounded-xl shadow-md p-6 mb-8 bg-white overflow-x-auto">
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">
//           Order Items
//         </h2>
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b bg-gray-50 text-gray-600">
//               <th className="text-left py-3 px-2 rounded-tl-lg">Product</th>
//               <th className="text-left py-3 px-2">Options</th>
//               <th className="text-right py-3 px-2">Qty</th>
//               <th className="text-right py-3 px-2 rounded-tr-lg">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Safe mapping over the cart array from lastOrder */}
//             {cart.map((item, idx) => (
//               <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
//                 <td className="py-3 px-2 font-medium">{item.name}</td>
//                 <td className="py-3 px-2 text-gray-500">
//                   {item.color} | {item.size}
//                 </td>
//                 <td className="py-3 px-2 text-right">{item.quantity}</td>
//                 <td className="py-3 px-2 text-right font-semibold">
//                   Rs.{new Intl.NumberFormat().format(item.price * item.quantity)}
//                 </td>
//               </tr>
//             ))}
//             {/* Total Row */}
//             <tr className="border-t-2 border-gray-300">
//               <td colSpan={3} className="py-3 px-2 text-right text-base font-bold">
//                 Total Amount
//               </td>
//               <td className="py-3 px-2 text-right text-base font-extrabold text-green-600">
//                 Rs.{new Intl.NumberFormat().format(total)}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Actions */}
//       <div className="flex justify-start space-x-4">
//         <button
//           onClick={() => window.print()}
//           className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition print:hidden"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5 4v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm2 0h6v3H7V4zm-2 5h10v7H5V9zm5 2a1 1 0 100 2 1 1 0 000-2z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Print Invoice
//         </button>

//         <button
//           onClick={() => router.push("/")}
//           className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition print:hidden"
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InvoicePage;



"use client";

import React from "react";
import { useCart } from "../Context/cartContext";
import { useRouter } from "next/navigation";

const InvoicePage = () => {
  const { lastOrder } = useCart();
  const router = useRouter();

  if (!lastOrder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <p className="mb-6 text-gray-600">
          It looks like you haven't finalized an order yet.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  // --- FIX: Destructure to match your localStorage structure ---
  const { 
    checkoutData, 
    items = [], // Data is under 'items', not 'cart'
    orderDate // Data is under 'orderDate', not 'createdAt'
  } = lastOrder;
  
  // Since 'id' and 'total' are missing, calculate 'total' and create a temporary 'id'
  const calculatedTotal = items.reduce((acc, item) => 
      acc + (item.price * item.quantity), 0);

  const orderId = lastOrder.paymentMethod 
      ? `INV-${new Date(orderDate).getTime()}` 
      : 'N/A';
  // -----------------------------------------------------------

  // 2. Adjust the check for incomplete data based on existing keys
  if (!checkoutData || !items.length || !orderDate) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Incomplete Order Data</h1>
        <p className="mb-6 text-gray-600">
          The order details are incomplete. Please ensure all data was saved during checkout.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-800">Invoice</h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">
            **Order ID:** **{orderId}**
          </p>
          <p className="text-sm text-gray-600">
            **Date:** {new Date(orderDate).toLocaleString()} {/* Use orderDate */}
          </p>
        </div>
      </div>

      {/* Billing Details */}
      <div className="border rounded-xl shadow-md p-6 mb-8 bg-white">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">
          Recipient Details
        </h2>
        <p className="font-medium">{checkoutData.fullName}</p>
        <p className="text-gray-600">{checkoutData.address}</p>
        <p className="text-gray-600">
          {checkoutData.city} | **Phone:** {checkoutData.phone}
        </p>
      </div>

      {/* Order Items Table */}
      <div className="border rounded-xl shadow-md p-6 mb-8 bg-white overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Order Items
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600">
              <th className="text-left py-3 px-2 rounded-tl-lg">Product</th>
              <th className="text-left py-3 px-2">Options</th>
              <th className="text-right py-3 px-2">Qty</th>
              <th className="text-right py-3 px-2 rounded-tr-lg">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* FIX: Use 'items' instead of 'cart' */}
            {items.map((item, idx) => (
              <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-2 font-medium">{item.name}</td>
                <td className="py-3 px-2 text-gray-500">
                  {item.color} | {item.size}
                </td>
                <td className="py-3 px-2 text-right">{item.quantity}</td>
                <td className="py-3 px-2 text-right font-semibold">
                  Rs.{new Intl.NumberFormat().format(item.price * item.quantity)}
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="border-t-2 border-gray-300">
              <td colSpan={3} className="py-3 px-2 text-right text-base font-bold">
                Total Amount
              </td>
              {/* FIX: Use calculatedTotal */}
              <td className="py-3 px-2 text-right text-base font-extrabold text-green-600">
                Rs.{new Intl.NumberFormat().format(calculatedTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="flex justify-start space-x-4">
        <button
          onClick={() => window.print()}
          className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition print:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 4v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm2 0h6v3H7V4zm-2 5h10v7H5V9zm5 2a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
          Print Invoice
        </button>

        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition print:hidden"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default InvoicePage;