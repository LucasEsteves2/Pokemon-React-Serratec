import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscar,api } from "../service/api";
import '../assets/css/componentes/cartao.css'


var GetProdutos = ({ url }) => {
  const [produtos, setprodutos] = useState([]);

  useEffect(() => {
    buscar(url, setprodutos);

  }, [url]);




  return(
    <section className="posts container">
      { 
       produtos.map((produtos)=> (
         <Link className={`cartao-post cartao-post--${produtos.nome}`} to={`/produtos/${produtos.id}`}>
           <article key={produtos.id}>
              <h3 className="cartao-post__titulo">
                {produtos.nome}
              </h3>
              {/* <img src={produtos.img}/> */}
              <p className="cartao-post__meta">{produtos.desc}</p>
           </article> 
         </Link>
       ))
      }
    </section>
  )
}
export default GetProdutos;
