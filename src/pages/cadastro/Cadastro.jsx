import React from "react";
import { api } from "../../service/api";
import FormularioCadastro from "../../components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { validarCPF, validarSenha } from "../../models/cadastro";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const history = useNavigate();

  return (
    
    <Container component="article" maxWidth="sm"><br/>
    <br/>
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

  try{
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
    catch{
      alert("falha ao realizar o cadastro,  informe um cpf valido (4devs para pegar um cpf valido)")
    }
    
    
}

  export default Cadastro;
