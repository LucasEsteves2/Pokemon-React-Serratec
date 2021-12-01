import React from "react";
import { api } from "../../service/api";

import "../../App.css"
import FormularioCadastro from "../../components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

import { validarCPF, validarSenha } from "../../models/cadastro";

function Cadastro() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
  cadastro(dados);
}

async function cadastro(dados) {
  const { data } = await api.post("/clientes", {
    bairro: "string",
    cep: dados.cep,
    cidade: "string",
    complemento: "string",
    cpf: dados.cpf,
    email: dados.email,
    nome: dados.nome,
    nome_usuario: "string",
    numero: dados.numero,
    rua: dados.endereco,
    senha: dados.senha,
    telefone1: dados.telefone
  });
}

export default Cadastro;
