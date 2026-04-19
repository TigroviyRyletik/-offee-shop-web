import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import CartPanel from "@/components/CartPanel";

export const metadata: Metadata = {
  title: "Coffee Shop Premium",
  description: "Найсмачніша кав'ярня у місті",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <CartProvider>
          <Navbar />
          <CartPanel />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
