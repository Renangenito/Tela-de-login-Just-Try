import React from 'react';
import './App.css';
import './components/login/login.css';
import './components/logotipo/logotipo.css';
import './components/formulario/formulario.css';
import './components/erro404/pagina404.css'
import './components/login-sucesso/sucesso.css'
import Login from './components/login/Login.jsx';
import Logotipo from "./components/logotipo/Logotipo.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Formulario from './components/formulario/Formulario.jsx';
import Pagina404 from './components/erro404/pagina404.jsx';
import Sucesso from './components/login-sucesso/Sucesso.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <div className="app">
            <Logotipo />
            <Login />
          </div>
        </Route>
        <Route path="/formulario">
            <Formulario />
        </Route>
        <Route path="/sucesso">
            <Sucesso />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
    

  );
  
}

export default App;
