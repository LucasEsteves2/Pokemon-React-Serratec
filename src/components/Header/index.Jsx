import React, { useState, useContext, useEffect } from "react";
import { Container, Content, Imgc, TextoNav } from "./style.js";
import logoImg from '../../assets/poke-store.png';
import prod from '../../assets/img/produtos.png';
import pika from '../../assets/pika.png';
import coin from '../../assets/coin.svg';
import { Link } from "react-router-dom";
import Carrossel from "../Slider/Carrossel";
import { useNavigate } from "react-router-dom";


export function Header(props) {
    const history = useNavigate();
    const [qtdCarrinho2, setQtdCarrinho2] = useState();
    const [texto, setTexto] = useState("");
  
    useEffect(() => {
        logado()
    setQtdCarrinho2(localStorage.getItem("carrinho"));

    }, [texto])

    function controlar()
    {
        if(texto=="Logout")
        {  
             setTexto("login")
            localStorage.clear();
            alert("Volte sempre!")
            history("/");

        }
        else{
            history("/login");

        }
    }


    function logado() {

        const logado = localStorage.getItem("username")
        if (logado) {
            setTexto("Logout")

        }
        else {
            setTexto("login")
        }
    }

    function carrinho(){
        const logado = localStorage.getItem("username")
        if(!logado){
            history("/login");
        }
        else
        {
            if(qtdCarrinho2)
            {
                history("/carrinho");
            }
            else{
    
                alert("Seu carrinho esta vazio!!")
            }
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
                    <img src={coin} alt="" />{qtdCarrinho2}
                
                </div>
                    
                </div>

                <div id="pikachu">
                    <img src={pika} alt="pikachu" />
                </div>
            </Container>

         



        </>

    );

}