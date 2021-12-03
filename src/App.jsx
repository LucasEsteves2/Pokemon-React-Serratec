import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from "./paginas/login/Login"
import Cadastro from "./paginas/cadastro/Cadastro";
import Pagina404 from "./paginas/pagina404/Pagina404";

import { Home } from "./paginas/Home";
import AllProdutos from "./paginas/produtos/AllProdutos";
import Produto from "./paginas/produtos/Produto"
import BemVindo from "./paginas/BemVindo";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header"
import NewProduto from "./paginas/admin/NewProduto";
import Administrador from "./paginas/admin/Administrador";
import { Carrinho } from "./paginas/cart/Carrinho";



function App() {

  const logado = localStorage.getItem("username")
  const admin = localStorage.getItem("acesso")
  const carrinho = localStorage.getItem("carrinho")


  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

        <Routes>
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          {!admin && <Route exact path="/" element={<Home />} />}
          {admin && <Route exact path="/" element={<Administrador />} />}
          <Route exact path="/produtos" element={<AllProdutos />} />
          <Route exact path="/produtos/:id" element={<Produto />} />
          <Route path="*" element={<Pagina404 />} />

         {carrinho && <Route path="/carrinho" element={<Carrinho/>} />}

          {admin && <Route exact path="/admin/produtos" element={<NewProduto />} />}

        </Routes>
      </BrowserRouter>
    </>
  );

}



export default App;
