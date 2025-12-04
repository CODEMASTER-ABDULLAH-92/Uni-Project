"use client";

import React from "react";
import { useCart } from "../Context/cartContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-md bg-gray-800 text-white"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${item.color}-${item.size}-${index}`}
              className="flex gap-4 border rounded-lg p-4 items-center"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
              )}
              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  Color: {item.color} | Size: {item.size}
                </p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
                <p className="font-semibold mt-1">
                  Rs.{item.price * item.quantity}
                </p>
              </div>
              <button
                onClick={() =>
                  removeFromCart(item.id, item.color, item.size)
                }
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full md:w-1/3 border rounded-lg p-4 space-y-4 bg-gray-50">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs.{subtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>Rs.{subtotal}</span>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-4 hover:bg-gray-900"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
