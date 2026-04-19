"use client";

import { useCart } from "@/context/CartContext";
import { createOrder } from "@/lib/api";
import { useState } from "react";

export default function CartPanel() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, clearCart, totalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setIsSubmitting(true);
    try {
      // Mock userId = 1 for MVP (будет исправлено при добавлении авторизации)
      const orderItems = items.map(i => ({ productId: i.product.id, quantity: i.quantity }));
      await createOrder(1, orderItems);
      alert("Замовлення успішно оформлено! Чекаємо на вас.");
      clearCart();
      setIsCartOpen(false);
    } catch (err) {
      alert("Помилка при оформленні замовлення. Упевніться, що C# сервер запущений.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? "open" : ""}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-panel ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Ваш Кошик</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        
        <div className="cart-items">
          {items.length === 0 ? (
            <p style={{ color: "var(--text-muted)", textAlign: "center", marginTop: "20px" }}>Кошик порожній</p>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.product.name}</h4>
                  <p>{item.product.price} ₴ x {item.quantity}</p>
                </div>
                <button 
                  className="btn-secondary" 
                  style={{ padding: "4px 8px", fontSize: "0.8rem", border: "none", color: "var(--accent)" }}
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Видалити
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Разом:</span>
            <span>{totalPrice} ₴</span>
          </div>
          <button 
            className="btn-primary" 
            style={{ width: "100%" }} 
            disabled={items.length === 0 || isSubmitting}
            onClick={handleCheckout}
          >
            {isSubmitting ? "Оформлення..." : "Замовити"}
          </button>
        </div>
      </div>
    </>
  );
}
