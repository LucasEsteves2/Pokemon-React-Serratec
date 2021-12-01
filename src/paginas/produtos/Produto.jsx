import React, { useEffect, useState } from "react";
import "../../assets/css/post.css";
import { buscar } from "../../service/api";
import {useParams} from 'react-router-dom'


function Produto() {
  const [produtos, setProdutos] = useState({});
  const {id} =useParams()


  useEffect(() => {
    buscar(`/produtos/${id}`, setProdutos);
  }, [id]);

  return (
    <>
      <article key={produtos.id}>
        <h3 className="cartao-post__titulo">{produtos.nome}</h3>
        {/* <img src={produtos.img}/> */}
        <p className="cartao-post__meta">{produtos.desc}</p>
      </article>
    </>
  );
}

export default Produto;
