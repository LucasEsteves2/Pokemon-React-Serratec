import React from "react";
import imagem from "../../assets/img/Snorlax.svg";
import { Img } from "react-image";



const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
     4<Img src={imagem}alt="404" />4
      <p className="naoencontrado-texto">
        <br/>
        <span>OppS!</span> Um Snorlax selvagem bloqueou seu caminho!
      </p>
    </main>
  );
};

export default Pagina404;
