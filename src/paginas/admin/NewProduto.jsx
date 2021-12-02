import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { api } from "../../service/api";

function NewProduto() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [img, setImg] = useState();

var data = {
    nome: nome,
    valor: preco,
    desc: descricao,
    urlImagem: img
}


  async function cadastrar() {
      try{
          api.post("/produtos",data)
          alert("PRODUTO CADASTRADO COM SUCESSO")

      }
      catch{
          alert("PRODUTO NAO FOI CADASTRADO")
      }
  }

  return (
    <>
      <Container component="article" maxWidth="sm">
        <br />
        <br />
        <br />
        <Typography variant="h4" component="h1" align="center">
          CADASTRAR NOVO PRODUTO
        </Typography>

        <form
          onSubmit={(event) => {
            cadastrar();
          }}
        >
          <TextField
            id="nome"
            name="nome"
            label="nome"
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
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
            value={descricao}
            onChange={(event) => {
              setDescricao(event.target.value);
            }}
          />
          <TextField
            id="preco"
            name="preco"
            label="preço"
            type="number"
            required
            variant="outlined"
            margin="normal"
            fullWidth
            value={preco}
            onChange={(event) => {
              setPreco(event.target.value);
            }}
          />

          <TextField
            id="img"
            name="img"
            label="Img Url  "
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
            value={img}
            onChange={(event) => {
              setImg(event.target.value);
            }}
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
