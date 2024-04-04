import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import OpenCart from "@/components/cart/open-cart";
import Cart from "@/components/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App Shopping Cart",
  description: "A simple shopping cart app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-gray-100">
          <div className="flex w-full h-full items-center text-black text-xl">
            <div className="md:w-1/2">
              <span>Next App Cart</span>
            </div>
            <div className="flex justify-end md:w-1/2">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
          </div>
        </nav>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
