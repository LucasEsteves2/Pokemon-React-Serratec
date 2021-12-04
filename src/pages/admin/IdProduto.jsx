import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Container, Typography,Snackbar,Stack,IconButton } from "@material-ui/core";
import { Header } from "../../components/Admin";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { Cancel } from "@material-ui/icons"
import MuiAlert from "@material-ui/lab/Alert";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export function IdProduto() {
  const [id, setId] = useState();
  const history = useNavigate();

  async function checkarProduto() {
   
   try{

       var { data } = await api.get(`/produtos/${id}`);
    
    localStorage.setItem("prodTemporario", JSON.stringify(data));
   
    history("/admin/editar/produto")
    }
        catch{
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



  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Fechar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Cancel fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


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
            event.preventDefault();
            checkarProduto()
          }}
        >
          <TextField
            id="id"
            name="id"
            label="  Informe o ID do Produto  "
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            pesquisar
          </Button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           ID INVALIDO!!
        </Alert>

      </Snackbar>
        </form>
      </Container>
    </>
  );
}
