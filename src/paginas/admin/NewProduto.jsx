import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";

function NewProduto() {


    
  return (
    <>
      <Container component="article" maxWidth="sm">
        <br />
        <br />
        <br />
        <Typography variant="h4" component="h1" align="center">
          CADASTRAR NOVO PRODUTO
        </Typography>

        <form>
          <TextField
            id="nome"
            name="nome"
            label="nome"
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            id="descricao"
            name="descricao"
            label="descrição"
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="valor"
            name="valor"
            label="preço"
            type="number"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="SECONDARY" fullWidth>
            CADASTRAR
          </Button>
        </form>
      </Container>
    </>
  );
}

export default NewProduto;
