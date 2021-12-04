import React, { useState, useContext, useEffect } from "react";
import { Container, Content, Imgc, TextoNav } from "./style.js";
import logoImg from '../../assets/poke-store.png';
import pika from '../../assets/pika.png';
import coin from '../../assets/coin.svg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCount } from "../../contexts/CartContext";
import Anuncio from "../Cart/Anuncio.jsx";


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
    
                alert("Seu carrinho esta vazio!!")
            }
        


    }

    

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

         



        </>

    );

}