import React from 'react';
import Login from './components/login'
import Registro from './components/registro';
import CriarProduto from './components/Produtos/CriarProduto'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path='/produto' element={<CriarProduto />} />
      </Routes>
    </Router>
  )
}

export default App;
