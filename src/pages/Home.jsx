import React, { createContext } from "react";
import Categories from "../components/Categorias/Categories";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Carrossel from "../components/Slider/Carrossel";




export function Home() {

  return (
    <>
      <Header  />
      <Carrossel/>
      <Categories/>

      <Footer />
    </>
  )


}
