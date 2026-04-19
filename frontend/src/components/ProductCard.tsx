"use client";

import { Product } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`} className="product-img-wrapper" style={{ display: 'block' }}>
        {product.imageUrl ? (
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill 
            style={{ objectFit: "cover" }} 
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#F0F0F0', position: 'absolute', top: 0, left: 0 }} />
        )}
      </Link>
      
      <div className="product-info">
        <Link href={`/product/${product.id}`} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.description}</p>
        </Link>
        <div className="product-footer">
          <span className="product-price">{product.price} ₴</span>
          <button 
            className="btn-primary" 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            Додати
          </button>
        </div>
      </div>
    </div>
  );
}
