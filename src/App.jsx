import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro";
import {Pagina404} from "./pages/pagina404/Pagina404";

import { Home } from "./pages/Home";
import AllProdutos from "./pages/produtos/AllProdutos";
import {Produto} from "./pages/produtos/Produto"
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header"
import NewProduto from "./pages/admin/NewProduto";
import Administrador from "./pages/admin/Administrador";
import { Carrinho } from "./pages/cart/Carrinho";
import { Sobre } from "./pages/Sobre";
import DeletarProduto from "./pages/admin/DeletarProduto";
import { Comprovante} from "./pages/Checkout/Comprovante";
import { Pagamento } from "./pages/Checkout/Pagamento";
import CartProvider from "./contexts/CartContext";


function App() {
  const [admin, setAdmin] = useState();
  const [carrinho,setCarrinho] =useState( localStorage.getItem("carrinho"));

  useEffect(() => {
    setAdmin(localStorage.getItem("acesso"))
    setCarrinho(localStorage.getItem("carrinho"))
  }, [admin])


  return (
    <>
<CartProvider> 
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
      </CartProvider>
    </>
  );

}
export default App;
