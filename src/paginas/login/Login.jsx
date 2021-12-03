import React from "react";
import DadosUsuario from "../../components/FormularioCadastro/DadosUsuario";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logiin from '../../components/Login';
import pikach from '../../assets/login.png'

function Login() {
  return (
    <>
      <Container component="article" maxWidth="sm">
        <br />
        <img src={pikach} alt="login" />
        <Logiin />
        <br /> <br />
        <Link to="/cadastro">
          <Typography variant="p" component="h1" align="center" color="secondary">
          Não tem uma conta? *Crie uma conta*
          </Typography>
        </Link>
      </Container>
    </>
  );
}

export default Login;
