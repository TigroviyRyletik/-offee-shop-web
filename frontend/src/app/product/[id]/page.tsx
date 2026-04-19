import { getProductById } from "@/lib/api";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import AddToCartButton from "./AddToCartButton";

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    return (
      <main className="container" style={{ textAlign: "center", paddingTop: "200px" }}>
        <h1>Товар не знайдено</h1>
        <BackButton />
      </main>
    );
  }

  return (
    <main>
      <div className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ margin: '40px 0' }}>
          <BackButton />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div style={{ position: 'relative', minHeight: '600px', borderRadius: '12px', overflow: 'hidden', background: '#F0F0F0' }}>
            {product.imageUrl && (
               <Image 
                 src={product.imageUrl} 
                 alt={product.name} 
                 fill 
                 style={{ objectFit: "cover" }} 
               />
            )}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '40px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '16px', letterSpacing: '-1px' }}>{product.name}</h1>
            <p style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '32px' }}>{product.price} ₴</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '48px' }}>
              {product.description}
            </p>
            
            <div style={{ marginTop: "auto", borderTop: '1px solid var(--border-color)', paddingTop: '32px' }}>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
