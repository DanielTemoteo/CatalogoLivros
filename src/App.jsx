import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LivroList from './componentes/LivroLits'
import LivroForm from './componentes/LivroForm'
import Menu from './componentes/menu'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<LivroList />} />
        <Route path="/novo" element={<LivroForm />} />
        <Route path="/editar/:id" element={<LivroForm />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
