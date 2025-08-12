import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'

function App() {
  const nome = "fernando"
  const profissao = "Programador"
  return (
    <div>
            <Saudacao />
            <h1>TITULO LEGAL</h1>
      <h2>nome:{nome}</h2>
      <h3>profissao: {profissao}</h3>
    <Rodape />
    </div>
  )
}

export default App
