import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro";
import {Pagina404} from "./pages/pagina404/Pagina404";



import { Home } from "./pages/Home";
import {Produto} from "./pages/produtos/Produto"
import { GlobalStyle } from "./styles/global";
import NewProduto from "./pages/admin/NewProduto";
import Administrador from "./pages/admin/Administrador";
import { Carrinho } from "./pages/cart/Carrinho";
import { Sobre } from "./pages/Sobre";
import DeletarProduto from "./pages/admin/DeletarProduto";
import { Comprovante} from "./pages/Checkout/Comprovante";
import { Pagamento } from "./pages/Checkout/Pagamento";
import { useCount } from "./contexts/CartContext";
import {useAcesso} from "./contexts/AdminContext"

function App() {


  const {count,setCount} = useCount(); 
  const {acesso,setAcesso} = useAcesso(); 
  const [carrinho,setCarrinho] =useState( localStorage.getItem("carrinho"));

  
  useEffect(() => {
    setAcesso(localStorage.getItem("acesso"))
    setCarrinho(localStorage.getItem("carrinho"))
  }, [acesso])


  useEffect(() => {
    setAcesso(localStorage.getItem("acesso"))
    setCarrinho(localStorage.getItem("carrinho"))
  }, [count])



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
          <Route path="/carrinho" element={<Carrinho />} />
          {acesso && <Route exact path="/admin" element={<Administrador />} />}
          {acesso && <Route exact path="/admin/produtos" element={<NewProduto />} />}
          {acesso && <Route exact path="/admin/remove" element={<DeletarProduto />} />}
          {carrinho && <Route path="/carrinho/pagamento" element={<Pagamento />} />}
          {carrinho && <Route path="/carrinho/comprovante" element={<Comprovante />} />}
        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;
