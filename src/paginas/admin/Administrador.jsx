import React, { useState, useContext, useEffect } from "react";
import { Container, Content, TextoNav } from "../../components/Header/style";
import logoImg from '../../assets/poke-store.png'
import { Link } from "react-router-dom";

function Administrador() {

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
                        <li> <Link to="/admin/produtos">Adicionar Produto</Link></li>
                        <li><Link to="/">Excluir Produto</Link></li>

                    </ul>
                </TextoNav>
            </Content>
        </Container>
        
</>

    );

}

export default Administrador;