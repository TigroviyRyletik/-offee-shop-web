import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <div className="container">
        
        {/* Minimalist Hero Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '120px 0 80px 0', borderBottom: '1px solid var(--border-color)', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', letterSpacing: '-1.5px', color: 'var(--text-dark)' }}>
            Смак у <span className="text-primary">чистому</span> вигляді.
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", color: "var(--text-muted)", fontWeight: 400 }}>
            Спешелті кава та крафтові десерти, приготовані з любов'ю до деталей та мінімалізму.
          </p>
        </div>

      </div>

      {/* Interactive Carousel */}
      <Carousel />

      <div className="container">
        {/* Menu */}
        <div className="page-header" style={{ margin: '40px 0 60px 0', textAlign: 'left' }}>
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
