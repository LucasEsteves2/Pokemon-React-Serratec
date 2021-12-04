import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { api } from "../../service/api";
import {Header} from "../../components/Admin"

function EditarProduto() {
  let produto = localStorage.getItem("prodTemporario");
  produto = JSON.parse(produto);
  const [descricao, setDescricao] = useState(produto.desc);
  const [preco, setPreco] = useState(produto.valor);
  const [img, setImg] = useState(produto.urlImagem);
  const [id, setId] = useState(produto.id);
  const [nome, setNome] = useState(produto.nome);
  

var data = {
    nome: nome,
    valor: preco,
    descricao: descricao,
    urlImg: img,
    qtd_estoque:0
}


  async function editar() {
      try{
          api.put(`/produtos/${id}`,data)
          alert("PRODUTO EDITADO COM SUCESSO")
         console.log(nome)
          console.log(descricao)
      }
      catch{
          alert("PRODUTO NAO FOI CADASTRADO")
      }
  }


  return (
    <>

    <Header />
      <Container component="article" maxWidth="sm">
        <br />
        <br />
        <br />
        <Typography variant="h4" component="h1" align="center">
          EDITAR PRODUTO
        </Typography>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            editar();
          }}
        >
          <TextField
            id="nome"
            name="nome"
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
            placeholder="aa"
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
            editar
          </Button>
        </form>
      </Container>
    </>
  );
}

export default EditarProduto;
