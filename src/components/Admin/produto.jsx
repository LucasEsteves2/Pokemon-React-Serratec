import { Imgbx } from "./styleProduto";
import left from "../../assets/img/leftovers.png";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar , Button,IconButton,Stack } from "@material-ui/core";
import { Cancel } from "@material-ui/icons"
import MuiAlert from "@material-ui/lab/Alert";
import {api} from "../../service/api"


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export function Produto(props) {
  const [protudoCarrinho, setProdutoCarrinho] = useState({
    nome: props.produto.nome,
    preço: props.produto.valor,
    inCart: 0,
    url: props.produto.urlImagem,
    desc: props.produto.desc,
    id: props.produto.id
  });

  
  const [qtdCarrinho2, setQtdCarrinho2] = useState();
  const [logado,setLogado] = useState();
  const history = useNavigate();
  
  useEffect(() => {
    console.log("fui clicado")
    setQtdCarrinho2(localStorage.getItem("carrinho"));
   
  }, [qtdCarrinho2]);

  async function comprar() {

    var eoq = protudoCarrinho.id
    try{
       await api.delete(`/produtos/${eoq}` )
      handleClick()
    }
    catch{
      alert("falha ao deletar")
    }
  
  }


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    document.location.reload(true);
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
      <Imgbx>
        <div className="container1">
          <div className="card" id="Muscle">
            <div className="imgBx">
              <img id="poke" src={props.produto.urlImagem} />
            </div>
            <div className="contentBx">
              <h2>{props.produto.nome}</h2>
              <div className="color">
                <h3>
                  <strong className="valor">ID: {props.produto.id}</strong>
                </h3>
                <br/> <br/> <br/>
              </div>
              <a onClick={comprar} className="btnComprar">Remover</a>
              <div>
    </div>
            </div>
          </div>
        </div>

      </Imgbx>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {props.produto.nome} Removido!!
        </Alert>
      </Snackbar>
      
    </>
  );
}
