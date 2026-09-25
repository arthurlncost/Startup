import { useState } from "react";

export default function CadastroEmpresa() {

  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  
  return (
    <div>
      <h2>Cadastrar Empresa</h2>
    </div>
  );
}