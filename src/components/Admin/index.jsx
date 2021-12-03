import React from "react";
import { Container, Content,TextoNav } from "./style.js";
import logoImg from '../../assets/poke-store.png';
import pika from '../../assets/pika.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function Header(props) {
    const history = useNavigate();

    function controlar()
    {
            localStorage.clear();
            alert("Voce saiu do do modo admnistrador!")
            history("/")
    }

    return (
        <>
            <Container>
                <Content>
                    <img src={logoImg} alt="logo pokemon" />
                    <TextoNav>
                        <ul>
                            <li><Link to="/admin/produtos">Adicionar Produto</Link></li>
                            <li> <Link to="/admin/remove">Remover Produto</Link></li>
                            <a onClick={controlar}> <li> Logout</li></a> 
                        </ul>
                    </TextoNav>
                </Content>
                <div id="pikachu">
                    <img src={pika} alt="pikachu" />
                </div>
            </Container>
        </>

    );

}