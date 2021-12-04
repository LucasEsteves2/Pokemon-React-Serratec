import React from "react";
import imagem from "../../assets/img/Snorlax.svg";
import { Img } from "react-image";
import { Container, Typography } from "@material-ui/core";



const Pagina404 = () => {
  return (

    <Container component="article" maxWidth="sm">
     <Img src={imagem}alt="404" />  
      <p className="naoencontrado-texto">
        <br/>
        <span>OppS!</span> Um Snorlax selvagem bloqueou seu caminho!
      </p>
    </Container>
  );
};

export default Pagina404;
