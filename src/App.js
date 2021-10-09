import React from 'react';
import './App.css';
import './components/formulario/form.css';
import './components/logotipo/logotipo.css'
import FormularioCadastro from './components/formulario/FormularioCadastro.jsx';
import Logotipo from "./components/logotipo/Logotipo.jsx"

function App() {
  return (
    <div className="app">
      <Logotipo/>
      <FormularioCadastro/>
    </div>
  );
}

export default App;
