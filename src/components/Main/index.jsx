import React, { } from "react";
import logoImg from '../../assets/img/produtos.png'
import { useState, useEffect } from "react";
import { api } from "../../service/api";

import { Produto } from "../Produto";
import { Imagemzinha } from "./style";


export function Main() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {

    api.get('/produtos')
      .then(banana => setPokemon(banana.data))

  }, [])


  return (
    <>

      <Imagemzinha>
        <img src={logoImg} alt="" />
      </Imagemzinha>
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