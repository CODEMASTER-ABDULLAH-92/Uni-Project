"use client";

import React from "react";
import { useCart } from "../Context/cartContext";
import { useRouter } from "next/navigation";

const InvoicePage = () => {
  const { lastOrder } = useCart();
  const router = useRouter();

  if (!lastOrder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4">No invoice found.</p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-gray-800 text-white rounded-md"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const { id, cart, checkoutData, total, createdAt } = lastOrder;

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Invoice</h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">Order ID: {id}</p>
          <p className="text-sm text-gray-600">
            Date: {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-4 mb-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
        <p>{checkoutData.fullName}</p>
        <p>{checkoutData.address}</p>
        <p>
          {checkoutData.city} | {checkoutData.phone}
        </p>
      </div>

      <div className="border rounded-lg p-4 mb-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Product</th>
              <th className="text-left py-2">Options</th>
              <th className="text-right py-2">Qty</th>
              <th className="text-right py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2">{item.name}</td>
                <td className="py-2 text-gray-600">
                  {item.color} | {item.size}
                </td>
                <td className="py-2 text-right">{item.quantity}</td>
                <td className="py-2 text-right">
                  Rs.{item.price * item.quantity}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="py-2 text-right font-semibold">
                Total
              </td>
              <td className="py-2 text-right font-semibold">Rs.{total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={() => window.print()}
        className="px-6 py-2 bg-gray-800 text-white rounded-md mr-3"
      >
        Print Invoice
      </button>

      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default InvoicePage;
