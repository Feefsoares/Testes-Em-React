import { useState } from 'react'

function Carrinho() {
  const [itens, setItens] = useState([]);
 
  function adicionarItem() {
    const novoItem = { id: Date.now(), nome: `Produto #${itens.length + 1}` };
    setItens([...itens, novoItem]);
  }
 
  return (
    <div>
      <h1>Carrinho: ({itens.length} itens)</h1>
      <button onClick={adicionarItem}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Carrinho;