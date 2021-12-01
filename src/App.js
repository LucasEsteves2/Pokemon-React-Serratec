import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from "./paginas/login/Login"
import Cadastro from "./paginas/cadastro/Cadastro";
import Pagina404 from "./paginas/pagina404/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Home from "./paginas/Home";
import AllProdutos from "./paginas/produtos/AllProdutos";
import Produto from "./paginas/produtos/Produto"
import BemVindo from "./paginas/BemVindo";

function App()
{

  const logado = localStorage.getItem("username")

      return (
      <BrowserRouter>
        <Cabecalho />
        <Routes>
           <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
         
          {!logado && <Route exact path="/" element={<Home />} />}
          {logado && <Route exact path="/" element={<BemVindo />} />}
        
          <Route exact path="/produtos" element={<AllProdutos />} />
          <Route exact path="/produtos/:id" element={<Produto />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    );
 
}



export default App;
