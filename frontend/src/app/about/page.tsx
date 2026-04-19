export default function AboutPage() {
  return (
    <main>
      <div className="container" style={{ paddingBottom: '100px' }}>
        <div className="page-header" style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '4rem', letterSpacing: '-1.5px' }}>Про нас</h1>
          <p>Мінімалізм у каві та житті.</p>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', marginBottom: '80px', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '24px' }}>
            Ми віримо, що кава — це не просто напій, це ритуал, який об'єднує людей. Наша подорож почалася у 2015 році з невеликої мрії створити простір без зайвого шуму, де кожен гість зможе знайти свій ідеальний смак. 
          </p>
          <p>
            За 10 років ми виросли з маленького віконця до мережі з 5 кав'ярень. Але наша філософія залишилася незмінною: фокус на головному.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '8px', letterSpacing: '-1px' }}>100%</h3>
            <p style={{ fontWeight: '500', color: 'var(--primary)' }}>Specialty Arabica</p>
          </div>
          
          <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '8px', letterSpacing: '-1px' }}>Власне</h3>
            <p style={{ fontWeight: '500', color: 'var(--primary)' }}>Обсмажування</p>
          </div>

          <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '8px', letterSpacing: '-1px' }}>15+</h3>
            <p style={{ fontWeight: '500', color: 'var(--primary)' }}>Барист</p>
          </div>
        </div>
      </div>
    </main>
  );
}
