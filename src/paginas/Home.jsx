import React, { } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Main } from "../components/Main";
import Carrossel from "../components/Slider/Carrossel";




export function Home() {

  return (
    <>
      <Header  />
      <Carrossel/>
      <Main />
      <Footer />

    </>
  )


}
