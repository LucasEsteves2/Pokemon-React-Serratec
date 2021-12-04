import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/login/Login"
import Cadastro from "./paginas/cadastro/Cadastro";
import Pagina404 from "./paginas/pagina404/Pagina404";

import { Home } from "./paginas/Home";
import AllProdutos from "./paginas/produtos/AllProdutos";
import {Produto} from "./paginas/produtos/Produto"
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header"
import NewProduto from "./paginas/admin/NewProduto";
import Administrador from "./paginas/admin/Administrador";
import { Carrinho } from "./paginas/cart/Carrinho";
import { Sobre } from "./paginas/Sobre";
import DeletarProduto from "./paginas/admin/DeletarProduto";
import { Comprovante} from "./paginas/Checkout/Comprovante";
import { Pagamento } from "./paginas/Checkout/Pagamento";



function App() {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    setAdmin(localStorage.getItem("acesso"))

  }, [admin])

  const carrinho = localStorage.getItem("carrinho")

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>

          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produtos" element={<Produto />} />
          <Route path="*" element={<Pagina404 />} />

          {carrinho && <Route path="/carrinho" element={<Carrinho />} />}
          {!carrinho && <Route path="/carrinho" element={<Login />} />}
          {admin && <Route exact path="/admin" element={<Administrador />} />}
          {admin && <Route exact path="/admin/produtos" element={<NewProduto />} />}
          {admin && <Route exact path="/admin/remove" element={<DeletarProduto />} />}

          {carrinho && <Route path="/carrinho/pagamento" element={<Pagamento />} />}
          {carrinho && <Route path="/carrinho/comprovante" element={<Comprovante />} />}



        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;
