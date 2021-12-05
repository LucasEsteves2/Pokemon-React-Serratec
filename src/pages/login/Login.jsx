import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logiin from '../../components/Login';
import pikach from '../../assets/login.png'
import { Header } from "../../components/Header";

function Login() {
  return (
    <>
    
      <Container component="article" maxWidth="sm">
        <br />
        
        <img src={pikach} alt="login" />
        <Logiin />
        <br /> <br />
        
       
      </Container>
    </>
  );
}

export default Login;
