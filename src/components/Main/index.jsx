import React, { } from "react";

import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { Produto } from "../Produto";


export function Main(){

const [pokemon, setPokemon] = useState([])

  useEffect(() => {

    api.get('/produtos')
      .then(banana => setPokemon(banana.data))

  }, [])


  return (
    <>

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