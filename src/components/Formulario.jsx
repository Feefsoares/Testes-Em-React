import { useState } from 'react';
 
function FormularioContato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
 
  return (
    <div>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu Nome" />
        <input value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Digite Uma mensagem" />
            <h1>Nome: {nome}</h1>
            <p> Mensagem: {mensagem}</p>
    </div>
  );
}

export default FormularioContato;