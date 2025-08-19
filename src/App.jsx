import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'
import { Nome, Profissao } from './components/Perfil'
import Produto from './components/Produto'
import Container from './components/Container'
import Contador from './components/Contador'

function App() {
  return (
    <div>
      <Contador />
      </div>
  )
}

export default App
