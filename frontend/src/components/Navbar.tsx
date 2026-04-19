"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { items, setIsCartOpen } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="nav-logo">
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
          MINIMAL.
        </Link>
        
        <div className="nav-links">
          <Link href="/" className="nav-link">Меню</Link>
          <Link href="/about" className="nav-link">Про нас</Link>
          <Link href="/contacts" className="nav-link">Контакти</Link>
        </div>

        <div>
          <button className="btn-secondary" onClick={() => setIsCartOpen(true)}>
            Кошик {itemCount > 0 ? `(${itemCount})` : ''}
          </button>
        </div>
      </div>
    </nav>
  );
}
