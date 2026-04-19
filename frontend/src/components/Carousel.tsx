"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/interior_1.png',
  '/images/interior_2.png',
  '/images/interior_3.png',
  '/images/interior_1.png',
  '/images/interior_2.png',
  '/images/interior_3.png'
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  // Автоматический скролл
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000); // меняем каждые 4 секунды
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', padding: '60px 0', background: 'var(--bg-main)', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
      <div 
        style={{ 
          width: '100%',
          maxWidth: '1200px', 
          height: '450px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {images.map((src, idx) => {
          let offset = idx - activeIndex;
          
          // Закольцовываем логику, чтобы карусель была бесконечной
          if (offset < -2) offset += images.length;
          if (offset > 3) offset -= images.length;

          const isVisible = offset >= -1 && offset <= 1;
          const isActive = offset === 0;
          
          return (
            <div 
              key={idx} 
              style={{ 
                position: 'absolute',
                top: 0,
                left: '50%',
                width: 'min(80vw, 380px)',
                height: '450px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                // Очень плавная анимация в 1.5 секунды с мягким замедлением
                transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                opacity: isVisible ? (isActive ? 1 : 0.3) : 0, 
                // Смещаем карточки по оси X (110% ширины) и масштабируем неактивные
                transform: `translateX(calc(-50% + ${offset * 110}%)) scale(${isActive ? 1 : 0.85})`,
                boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
                pointerEvents: isVisible ? 'auto' : 'none',
                cursor: 'pointer',
                zIndex: isActive ? 2 : 1
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <Image src={src} alt={`Interior ${idx}`} fill style={{ objectFit: 'cover', pointerEvents: 'none' }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
