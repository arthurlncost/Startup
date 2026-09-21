import Mascote from '../components/Mascote';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <Mascote tipo="coracao" largura={160} />
      <h1 style={{ color: '#D97706', marginTop: '1rem', fontSize: '2.5rem' }}>
        Portal Eletricitrus
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4B5563', maxWidth: '600px', margin: '0.5rem auto' }}>
        Energia solar limpa e sustentável para a sua casa ou empresa!
      </p>
    </div>
  );
}