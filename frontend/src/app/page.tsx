import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <div className="container">
        
        {/* Minimalist Hero Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '120px 0 80px 0', borderBottom: '1px solid var(--border-color)', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', letterSpacing: '-1.5px', color: 'var(--text-dark)' }}>
            Смак у <span className="text-primary">чистому</span> вигляді.
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", color: "var(--text-muted)", fontWeight: 400 }}>
            Спешелті кава та крафтові десерти, приготовані з любов'ю до деталей та мінімалізму.
          </p>
        </div>

        {/* Minimalist Gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '100px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/images/interior_1.png" alt="Interior" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/images/interior_2.png" alt="Barista" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden', background: 'var(--bg-surface)', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
             <h2 style={{ fontSize: '2rem', marginBottom: '16px', letterSpacing: '-0.5px' }}>Атмосфера спокою</h2>
             <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Ми створили простір без візуального шуму. Лише ви, чашка ідеальної кави та багато світла.</p>
          </div>
        </div>

        {/* Menu */}
        <div className="page-header" style={{ margin: '0 0 60px 0', textAlign: 'left' }}>
          <h2 style={{ fontSize: "2.5rem", letterSpacing: '-1px' }}>Наше Меню</h2>
        </div>

        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ color: 'var(--text-muted)' }}>Меню тимчасово недоступне. Переконайтеся, що сервер запущено.</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
