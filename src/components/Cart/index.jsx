import React, { useState, useContext, useEffect } from "react";
import './style.scss';
import Anuncio from "./Anuncio";
import {api} from "../../service/api"
import { useNavigate } from "react-router-dom";

export function CarrinhoCompras () {
  const [usuario,setUsuario] =useState({
  })
  const [id,setId]=useState(localStorage.getItem('id'))
    
    let itensCarrinho = localStorage.getItem("produtoCarrinho");
    let qtd = localStorage.getItem("carrinho");
    let subtotal = localStorage.getItem("ValorTotal");
    itensCarrinho = JSON.parse(itensCarrinho);
    const history = useNavigate();



    function limparCarrinho() {
        localStorage.removeItem("produtoCarrinho");
        localStorage.removeItem("carrinho");
        localStorage.removeItem("ValorTotal");
        history("/");

        alert("Seu carrinho foi limpado");

      }

      function apagar (id)  {
        let pessoa = document.getElementById(id);
        console.log(pessoa)
      }
function cupom()
{
  alert("é o cupomzinho do claudinho madeirada")
}

async function finalizarCompra()
{
  alert("Parabens compra finalizada")


  const itemzinhi = {
 
  }


  try{
  
    const {data} = await api.post(`/pedidos`, {


      cliente : {"id" : id}, 
      enderecoDeEntrega : {"id" : 1}, 
      pagamento : { "numeroDeParcelas" : 10, "@type": "pagamentoComCartao" }, 
      itens : [ itemzinhi ] 
      }
     
  
  )
     } catch{
    alert("DEU MERDA ")
  }

}

return ( 
      
        <>

        
        <Anuncio/>
    <div class="wrap cf">
  <h1 class="projTitle">Relatorio<span>-De</span> Compras</h1>
  <div class="heading cf">
    <h1>Meu Carrinho</h1>
    <a href="#"  onClick={limparCarrinho}class="continue">Limpar Carrinho</a>
  </div>
  <div class="cart">
   <ul class="tableHead">
      <li class="prodHeader">Produto</li>
      <li>Quantidade</li>
      <li>Total</li>
       <li>Remover</li>
    </ul>
  
    <ul class="cartWrap">
      
      {/* COOMEÇA AK ANIMAL */}
      {Object.values(itensCarrinho).map((produtos) => (
          <div id="conteudo">
            <li class="items even">
            <div class="infoWrap"> 
             <div class="cartSection">
             <img src={produtos.url} alt="" class="itemImg" />
               <p class="itemNumber">Categoria: {produtos.desc}</p>
               <h3>{produtos.nome}</h3>
                <p> <input type="text"  disabled class="qty" placeholder={produtos.inCart}/>x R$ {produtos.preço}</p>
               <p class="stockStatus"> Em Estoque</p>
             </div> 
             <div class="prodTotal cartSection">
               <p>R$ {produtos.preço * produtos.inCart}</p>
             </div>
                  <div class="cartSection removeWrap">
                   <article  onClick={apagar(produtos.id)} key={produtos.id}>
                <a class="remove">X</a>
                </article>

             </div>
           </div>
           </li>
           <div class="special"><div class="julinha"></div></div>

           </div>
           
            ))}

     
      
      {/* TERMINA AK COCUDO */}
         <div class="special"><div class="specialContent">Free gift with purchase!, gift wrap, etc!!</div></div>
      
      
 
    </ul>
  </div>
  
  <div class="promoCode"><label for="promo">Tem um código promocional?</label><input type="text" name="promo" placholder="Enter Code"  />
  <a onClick={cupom} class="btn"></a></div>
  
  <div class="subtotal cf">
    <ul>
      <li class="totalRow"><span class="label">Subtotal</span><span class="value">R$ {subtotal}</span></li>
      
          <li class="totalRow"><span class="label">Valor do Frete</span><span class="value">R$ 20,50</span></li>
      
            <li class="totalRow"><span class="label">Cupom</span><span class="value">$4.00</span></li>
            <li class="totalRow final"><span class="label">Total</span><span class="value">R${subtotal}</span></li>
      <li class="totalRow"><a href="#" onClick={finalizarCompra} class="btn continue">Comprar</a></li>
    </ul>
  </div>
</div>
        </>
        );
    }

