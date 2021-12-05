import React, { useState, useContext, useEffect } from "react";
import './style.scss';
import Anuncio from "./Anuncio";
import {api} from "../../service/api"
import { useNavigate } from "react-router-dom";
import { Snackbar , Button,IconButton,Stack } from "@material-ui/core";
import { Cancel } from "@material-ui/icons"
import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CarrinhoCompras () {
  
  const  [alertCupom, setAlertCupom] =useState({
    mensagem:null,
    cor: null
  })
  const [desconto,setDesconto] = useState()  
  const [subtotal,setSubtotal] =useState((localStorage.getItem("ValorTotal")))
  const [total,setTotal] =useState((localStorage.getItem("ValorTotal")))
  const [cupomzinhoo,setCupomzinhoo] = useState("- -")

    let itensCarrinho = localStorage.getItem("produtoCarrinho");
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

  const desscontinho = desconto;
if(desscontinho ==null)
{
  alert("CUPOM INVALIDO!!")
}
else
{  
  const descontinho2= desscontinho.toUpperCase()  
  const c = "YURAO DA MASSA"
  const yurao = descontinho2.trim()

  if(yurao == "YURAO DA MASSA" )
  {
     handleClick()
     setAlertCupom({mensagem:"Cupom de 10% off aplicado", cor:"success"})
    var descontoe= (total-total*10/100);
    setTotal(descontoe)
    setCupomzinhoo("-10%")

    localStorage.setItem("cupom",1)

  }
  else{
    setAlertCupom({mensagem:"Cupom invalido!!", cor:"error"})
    handleClick()
  }
}
}

async function finalizarCompra()
{
  localStorage.setItem('ValorTotal',total)

  history("/carrinho/pagamento")

}


const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};



const action = (
  <React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
      Fechar
    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <Cancel fontSize="small" />
    </IconButton>
  </React.Fragment>
);

return ( 
      
        <>

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
         <div class="special"><div class="specialContent">Utilize o cupom yurao da massa e ganhe 10% off</div></div>
      
      
 
    </ul>
  </div>
  
  <div class="promoCode"><label for="promo">Tem um código promocional?</label>
  <input type="text" name="promo" placholder="Enter Code" value={desconto} onChange={(e)=>{setDesconto(e.target.value)}}  />
  <a onClick={cupom} class="btn"></a></div>
  
  <div class="subtotal cf">
    <ul>
      <li class="totalRow"><span class="label">Subtotal</span><span class="value">R$ {subtotal}</span></li>
      
          <li class="totalRow"><span class="label">Valor do Frete</span><span class="value">GRATIS</span></li>
      
            <li class="totalRow"><span class="label">Cupom</span><span class="value"> {cupomzinhoo} </span></li>
            <li class="totalRow final"><span class="label">Total</span><span class="value">R${total}</span></li>
      <li class="totalRow"><a href="#" onClick={finalizarCompra} class="btn continue">Comprar</a></li>
    </ul>
  </div>
</div>





<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertCupom.cor} sx={{ width: '100%' }}>
         {alertCupom.mensagem}
        </Alert>
      </Snackbar>
        </>
        );
    }

