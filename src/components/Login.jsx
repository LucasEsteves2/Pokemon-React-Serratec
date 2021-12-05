import React, { useState } from "react";
import { TextField, Button, Grid, Link,Snackbar,IconButton,Stack} from "@material-ui/core";
import { api } from "../service/api";
import { useNavigate, Link as Linkk } from "react-router-dom";
import { useAcesso } from "../contexts/AdminContext";
import { Cancel } from "@material-ui/icons"
import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Login({ aoEnviar }) {
  
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { acesso, setAcesso } = useAcesso();
  const  [alertMensagem, setAlertMensagem] =useState({
    mensagem:null,
    cor: null
  })
  const history = useNavigate();

  var data = {
    email: username,
    senha: password,
  };

  async function login() {
    try {
      var { headers } = await api.post(`/login`, data);

      console.log(headers.authorization);
      localStorage.setItem("username", username);
      localStorage.setItem("token", headers.authorization);
      getAcesso();
    } catch {
      setAlertMensagem({mensagem:"Usuario Invalido!!", cor:"error"})
      handleClick()
      setUsername("");
      setPassword("");
    }
  }

  async function getAcesso() {
    try {
      var { data } = await api.get(`/clientes/email?value=${username}`);
      localStorage.setItem("id", data.id);

      if (data.acesso == null) {
        console.log("Voce se conectou na conta de Cliente");
        
        setAlertMensagem({mensagem:`Bem vindo ${username}`, cor:"sucess"})
        handleClick()
        history("/");
        setAcesso(data.acesso);


      } else {
        localStorage.setItem("acesso", data.acesso);
        console.log("Bem vindo ADM");
        setAcesso(data.acesso);
        history("/admin");
      }
    } catch {
      setAlertMensagem({mensagem:"Erro ao se conectar com o servidor (heroku iniciando)", cor:"error"})
      handleClick()
    }
  }

  

const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};


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
        Entrar
      </Button>
      <br />
      <br />
      <Grid container>
        <Grid item xs>
          <Linkk to="">
            <Link href="#" variant="body2">
              Esqueceu sua senha?
            </Link>
          </Linkk>
        </Grid>
        <Grid item>
          <Linkk to="/cadastro">
            <Link href="#" variant="body2">
              {"Não tem conta? Inscrever-se"}
            </Link>
          </Linkk>
        </Grid>
      </Grid>



      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertMensagem.cor} sx={{ width: '100%' }}>
         {alertMensagem.mensagem}
        </Alert>
      </Snackbar>


    </form>




  );
}

export default Login;
