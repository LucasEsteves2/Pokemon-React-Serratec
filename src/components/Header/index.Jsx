import React from 'react'
import { Container, Content, TextoNav } from "./style";
import logoImg from '../../assets/poke-store.png'
import { Link } from "react-router-dom";

export function Header() {

    return (

        <Container>
            <Content>
                <img src={logoImg} alt="logo pokemon" />
                <TextoNav>
                    <ul>
                        <li><Link to="/login"> Login </Link></li>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li> <Link to="/sobre">pokebolas</Link></li>
                        
                    </ul>
                </TextoNav>
            </Content>

        </Container>



    );

}