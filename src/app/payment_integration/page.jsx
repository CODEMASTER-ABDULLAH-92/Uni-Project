"use client";
import React, { useState } from "react";
import { useCart } from "@/app/Context/cartContext";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const { cart, checkoutData, clearCart, saveOrder } = useCart();

  const [loading, setLoading] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!cardNumber || !cardHolder || !expiry || !cvv) {
      alert("Please fill all card details.");
      return;
    }

    setLoading(true);

    // Simulate payment success
    setTimeout(() => {
      const order = {
        items: cart,
        checkoutData,
        paymentMethod: "Credit/Debit Card",
        paymentStatus: "Paid",
        orderDate: new Date().toISOString(),
      };

      saveOrder(order);
      clearCart();

      router.push("/invoice");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <p className="text-gray-600 mb-6">
        Enter your card details to complete the payment.
      </p>

      <form onSubmit={handlePayment} className="space-y-4">

        <div>
          <label className="block mb-1 font-semibold">Card Holder Name</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="John Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Card Number</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            maxLength={16}
            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Expiry Date</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="MM/YY"
              value={expiry}
              maxLength={5}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-semibold">CVV</label>
            <input
              type="password"
              className="w-full border rounded-lg p-3"
              placeholder="•••"
              value={cvv}
              maxLength={3}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Your card will not be charged in real. This is a demo payment.
      </p>
    </div>
  );
}
