import React, { createContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Main } from "../../components/Main";
import Carrossel from "../../components/Slider/Carrossel";


export function Produto() {

  return (
    <>
    
      <Header/>
      <Carrossel/>
      <Main />
      <Footer />
    </>
  )


}
