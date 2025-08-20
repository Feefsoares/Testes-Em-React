import { useState } from 'react'

function ListaDeNomes() {
  const nomes = ['fernando', 'Bruno', 'Brenda', 'fernanda'];
  const [filtro, setFiltro] = useState('');
 
  const nomesFiltrados = nomes.filter(nome => 
    nome.toLowerCase().includes(filtro.toLowerCase())
  );
 
  return (
    <div>
      <input value={filtro} onChange={e => setFiltro(e.target.value)} placeholder="Filtrar nomes..." />
      <ul>
        {nomesFiltrados.map(nome => <li key={nome}>{nome}</li>)}
      </ul>
    </div>
  );
}

export default ListaDeNomes;