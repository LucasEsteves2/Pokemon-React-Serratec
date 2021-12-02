import React, { useState, useContext, useEffect } from "react";
import { Container, Content, TextoNav } from "./style";
import logoImg from '../../assets/poke-store.png'
import { Link } from "react-router-dom";

export function Header() {

    const [texto,setTexto] = useState("");

    useEffect(() => {
        logado()
        }, [])

 function logado() {
  
    const logado = localStorage.getItem("username")
    if(logado) {
        setTexto("Logout")
    }
    else{
        setTexto("login")
    }
}

    return (
 
        <>
        <Container>
            <Content>
                <img src={logoImg} alt="logo pokemon" />
                <TextoNav>
                    <ul>
                        <li><Link to="/login"> {texto} </Link></li>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li> <Link to="/sobre">pokebolas</Link></li>

                    </ul>
                </TextoNav>
            </Content>
        </Container>
        
        
</>

    );

}