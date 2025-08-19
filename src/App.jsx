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
import Modo from './components/ModoNoturno'
import FormularioContato from './components/Formulario'


function App() {
  return (
    <div>
      <FormularioContato />
      </div>
  )
}

export default App
