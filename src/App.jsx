import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'
import { Nome, Profissao } from './components/Perfil'
import Produto from './components/Produto'
import Container from './components/Container'

function App() {
  return (
    <div>
<Container> 
  <h1>titulo</h1>
  <p>liiil</p>
</Container>

      <Produto nome="Camisa" preco={49.99} emEstoque={true} />
      <Produto nome="Calça Jeans" preco={89.99} emEstoque={false} />
    </div>
  )
}

export default App
