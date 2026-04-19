"use client";
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      style={{ 
        background: 'none', 
        border: 'none', 
        color: "var(--text-muted)", 
        fontWeight: '500', 
        transition: 'color 0.2s',
        cursor: 'pointer',
        fontSize: '1rem',
        padding: 0,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      ← Назад
    </button>
  );
}
