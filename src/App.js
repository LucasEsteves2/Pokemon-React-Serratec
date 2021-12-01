import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from "./paginas/login/Login"
import Cadastro from "./paginas/Cadastro";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Home from "./paginas/Home";
import AllProdutos from "./paginas/AllProdutos";
import Produto from "./paginas/Produto";
import BemVindo from "./paginas/BemVindo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produtos" element={<AllProdutos />} />
          <Route exact path="/produtos/:id" element={<Produto />} />
          <Route exact path="/loguei" element={<BemVindo />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
