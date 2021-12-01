import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

function Login({ aoEnviar }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [acesso, setAcesso] = useState();

  const history = useNavigate();

  var data = {
    email: username,
    senha: password,
  };

  async function login() {
    try {
      var { headers } = await api.post(`/login`, data);

      getAcesso();

      console.log(headers.authorization);
      localStorage.setItem("username", username);
      localStorage.setItem("token", headers.authorization);
      history("/");
    } catch {
      alert("Usuario Invalido!!");
      setUsername("");
      setPassword("");
    }
  }

  async function getAcesso() {
    try {
      var { data } = await api.get(`/clientes/email?value=${username}`);

      if (data.acesso == null) {
        console.log("Voce se conectou na conta de Cliente");
      } else {
        console.log("Bem vindo ADM");
        setAcesso(data.acesso)
        localStorage.setItem('acesso', data.acesso)

      }
    } catch {
      alert("DEU RUIM");
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("fui clicado");
        login();
      }}
    >
      <TextField
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <TextField
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Logar
      </Button>
    </form>
  );
}

export default Login;
