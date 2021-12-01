import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button } from "@material-ui/core";

function BemVindo() {
  const history = useNavigate();

  async function logout() {
    localStorage.clear();
    history("/login");
    alert("DESLOGADO OTARIO");
  }

  return (
    <>
      <Container component="article" maxWidth="sm">
        <Typography variant="h5">
          BEM VINDO!!: {localStorage.getItem("username")}
        </Typography>

        <br />
        <br />
        <br />
        <Button onClick={logout} variant="contained" color="primary" fullWidth>
          DESLOGAR
        </Button>
      </Container>
    </>
  );
}

export default BemVindo;
