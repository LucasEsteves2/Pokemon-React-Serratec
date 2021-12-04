import React, { createContext } from "react";
import Categories from "../components/Categorias/Categories";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Main } from "../components/Main";
import Carrossel from "../components/Slider/Carrossel";
import { CartProvider } from "../contexts/CartContext";




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
