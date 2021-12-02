import React, { } from "react";
import { Header } from "../components/Header";
import { Produto } from "../components/Produto";
import { useState, useEffect } from "react";
import { api } from "../service/api";

export function Home() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {

    api.get('/produtos')
      .then(banana => setPokemon(banana.data))

  }, [])

  console.log(pokemon)


  return (
    <>
      <Header />
      <div>
        {
          pokemon.map(produto => {
            return <Produto key={produto.nome} produto={produto} />

          })
        }
      </div>
    </>
  )


}
