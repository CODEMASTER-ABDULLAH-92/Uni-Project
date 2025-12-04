// import type { Metadata } from "next";
// import "./globals.css";
// import StoreProvider from "./storeProvider"; // ✅ use your StoreProvider here
// import {CartProvider} from '@/app/Context/cartContext'
// export const metadata:Metadata = {
//   title: "Voen | Smart E-Commerce Store",
//   description:
//     "Voen is a modern affiliate-based e-commerce platform built with Next.js, React, Tailwind CSS, and MongoDB. It features dynamic product categories, smooth navigation, and a responsive design that connects users with trusted affiliate products across various niches — including Electronics, Fashion, Beauty, Home, Sports, and more.",
//   icons: {
//     icon: "/favicon.jpeg", // ✅ Ensure this file exists in your public/ directory
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="antialiased outfit ">
//         <StoreProvider>{children}</StoreProvider>
//          <CartProvider>{children}</CartProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./storeProvider";
import { CartProvider } from "@/app/Context/cartContext";

export const metadata: Metadata = {
  title: "Voen | Smart E-Commerce Store",
  description:
    "Voen is a modern affiliate-based e-commerce platform built with Next.js, React, Tailwind CSS, and MongoDB.",
  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased outfit">
        <StoreProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
