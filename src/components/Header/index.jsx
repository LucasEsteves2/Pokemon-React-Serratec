import React, { useState, useContext, useEffect } from "react";
import { Container, Content, Imgc, TextoNav } from "./style.js";
import logoImg from '../../assets/poke-store.png';
import pika from '../../assets/pika.png';
import coin from '../../assets/coin.svg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCount } from "../../contexts/CartContext";
import Anuncio from "../Cart/Anuncio.jsx";
import { TextField, Button, Typography,Snackbar,Stack,IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons"
import MuiAlert from "@material-ui/lab/Alert";



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  
export function Header(props) {
    const {count,setCount} = useCount();
    const history = useNavigate();
    const [img, setImg] = useState("null");
    const [texto, setTexto] = useState("");
    const [user,setUser]= useState(localStorage.getItem("username"))


    useEffect(() => {
        
    setUser(localStorage.getItem("username"))
    setCount(localStorage.getItem("carrinho"));
        logado()

    }, [count])

    function controlar()
    {
        if(texto=="Logout")
        {  
    
             setTexto("login")
             alert("Volte sempre!")
             history("/");
             setImg(null)
             setCount(null)
             localStorage.clear();
             
        }
        else{
            history("/login");

        }
    }


    function logado() {

        if (user) {
            setTexto("Logout")
            setImg(coin)
        }
        else {
            setTexto("login")
        }
    }

    function carrinho(){
            if(count)
            {      
                history("/carrinho");
            }
            else{
                handleClick()
            }
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
            <Container>
                <Content>
                    <img src={logoImg} alt="logo pokemon" />

                    <TextoNav>
                        <ul>
                            <li> <Link to="/">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li> <Link to="/sobre">Sobre</Link></li>
                            <a onClick={controlar}> <li> {texto}</li></a> 

                        </ul>
                    </TextoNav>

                </Content>
                <div id="longin">
               <div onClick={carrinho}>
                    <img src={img} alt="" />{count}
                
                </div>
                    
                </div>

                <div id="pikachu">
                    <img src={pika} alt="pikachu" />
                </div>
            </Container>
            <Anuncio/>

         
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           Seu carrinho está vazio! 
        </Alert>

      </Snackbar>


        </>

    );

}
