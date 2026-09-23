export default function Mascote({ tipo = 'padrao', largura = 120, alt = 'Solzinho Eletricitrus' }) {
  // Mapeamento das imagens
  const fotos = {
    padrao: '/imagens/sol.png',
    logo: '/logo.png',
    coracao: '/imagens/solCoracaoplaquinh.png',
    pedreiro: '/imagens/solPedreiro.png',
    pensador: '/imagens/solFilosofo.png',
    carregando: '/imagens/solPlaca.png'
  };

  const caminhoImagem = fotos[tipo] || fotos.padrao;

  return (
    <img 
      src={caminhoImagem} 
      alt={alt} 
      style={{ width: `${largura}px`, height: 'auto', objectFit: 'contain' }} 
    />
  );
}