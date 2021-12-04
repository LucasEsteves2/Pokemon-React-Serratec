import React from 'react';
import { Login } from './pages/Login/index';
import { Cadastro } from './pages/Cadastro/index';
import { Buscar } from './pages/Buscar/index';
import { Carrinho } from './pages/Carrinho/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './compenents/Navbar';
import "../src/styles/index.css";

export default function App() {
  return (
       
      <BrowserRouter>
        <Navbar/>
        <Switch/>
        
          <Route path = '/login' exact component={Login} />
          <Route path = '/cadastro' component={Cadastro}/>
          <Route path = '/buscar' component={Buscar}/>
          <Route path = '/carrinho' component={Carrinho}/>
        
        <Switch/>
      </BrowserRouter>
    
   
  );
}


