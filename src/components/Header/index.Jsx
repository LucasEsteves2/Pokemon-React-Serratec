import React, { useState, useContext, useEffect } from "react";
import { Container, Content, Imgc, TextoNav } from "./style";
import logoImg from '../../assets/poke-store.png';
import prod from '../../assets/img/produtos.png';
import pika from '../../assets/pika.png';
import coin from '../../assets/coin.svg';
import { Link } from "react-router-dom";
import Carrossel from "../Slider/Carrossel";


export function Header() {

    const [texto, setTexto] = useState("");

    useEffect(() => {
        logado()
    }, [])

    function logado() {

        const logado = localStorage.getItem("username")
        if (logado) {
            setTexto("Logout")
        }
        else {
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

                            <li> <Link to="/">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li> <Link to="/sobre">Sobre</Link></li>
                            <li ><Link to="/login"> {texto} </Link></li>

                        </ul>
                    </TextoNav>

                </Content>
                <div id="longin">
                    <img src={coin} alt="" />
                    <Link to="/login"> 0 </Link>
                </div>

                <div id="pikachu">
                    <img src={pika} alt="pikachu" />
                </div>
            </Container>

            <Carrossel />



        </>

    );

}