"use client";

import { Product } from "@/lib/api";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  
  return (
    <button 
      className="btn-primary hover-scale" 
      style={{ width: "100%", padding: "16px", fontSize: "1.1rem" }}
      onClick={() => addToCart(product)}
    >
      Додати у кошик
    </button>
  );
}
