export default function ContactsPage() {
  return (
    <main>
      <div className="container" style={{ paddingBottom: '100px' }}>
        <div className="page-header" style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '4rem', letterSpacing: '-1.5px' }}>Контакти</h1>
          <p>Чекаємо на вас.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px' }}>
          <div style={{ padding: '40px', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ marginBottom: '32px', fontSize: '2rem', letterSpacing: '-0.5px' }}>Локації</h2>
            
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '1.2rem', fontWeight: 600 }}>Головна кав'ярня</h3>
              <p style={{ color: 'var(--text-muted)' }}>вул. Хрещатик, 1, м. Київ</p>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '1.2rem', fontWeight: 600 }}>Точка To-Go</h3>
              <p style={{ color: 'var(--text-muted)' }}>Контрактова площа, 5, м. Київ</p>
            </div>

            <h2 style={{ marginBottom: '24px', fontSize: '2rem', letterSpacing: '-0.5px' }}>Зв'язок</h2>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Телефон</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>+380 (99) 123-45-67</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>hello@minimal.ua</p>
            </div>
          </div>

          <div style={{ padding: 0, overflow: 'hidden', minHeight: '500px', display: 'flex', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.548483177309!2d30.520421115731295!3d50.45010097947547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce51b8c19967%3A0x647617b0704d9b15!2sKhreshchatyk%20St%2C%20Kyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, flexGrow: 1 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
