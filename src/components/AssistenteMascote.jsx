import { useLocation } from 'react-router-dom';
import Mascote from './Mascote';

export default function AssistenteMascote() {
  const location = useLocation();

  // 1. Definimos as páginas oficiais onde o assistente deve aparecer
  const rotasValidas = [
    '/', 
    '/calculadora', 
    '/placas', 
    '/fazendas', 
    '/servicos', 
    '/faq', 
    '/login'
  ];

  // 2. Se a rota não estiver na lista (é a página 404), ele não renderiza nada!
  if (!rotasValidas.includes(location.pathname)) {
    return null; 
  }

  // 3. Se for uma página válida, continua com o comportamento normal
  let mensagem = "";
  let tipoMascote = "padrao";

  switch (location.pathname) {
    case '/':
      mensagem = "Bem-vindo ao Eletricitrus! Que tal simularmos a sua economia?";
      tipoMascote = "padrao";
      break;
    case '/calculadora':
      mensagem = "Preencha o seu consumo e descubra o quanto pode poupar!";
      tipoMascote = "padrao";
      break;
    case '/placas':
      mensagem = "Conheça as nossas opções de painéis fotovoltaicos.";
      tipoMascote = "padrao";
      break;
    case '/fazendas':
      mensagem = "Descubra as fazendas solares parceiras na sua região.";
      tipoMascote = "padrao";
      break;
    case '/servicos':
      mensagem = "Digite o seu CEP para verificar a disponibilidade.";
      tipoMascote = "padrao";
      break;
    case '/faq':
      mensagem = "Tem alguma dúvida? Encontre as respostas aqui!";
      tipoMascote = "padrao";
      break;
    case '/login':
      mensagem = "Faça login para guardar o seu histórico de simulações.";
      tipoMascote = "padrao";
      break;
  }

  return (
    <div className="mascote-fixo-container">
      <div className="mascote-balao">
        {mensagem}
      </div>
      {/* Já com a largura ajustada para 120 para ficar maiorzinho */}
      <Mascote tipo={tipoMascote} largura={105} alt="Assistente Solzinho" /> 
    </div>
  );
}