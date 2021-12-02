import { Imgbx } from "./style";
import left from "../../assets/img/leftovers.png";
import React, { useState, useContext, useEffect } from "react";

export function Produto(props) {
  const [protudoCarrinho, setProdutoCarrinho] = useState({

    nome: props.produto.nome,
    preço: props.produto.valor,
    inCart: 0

  });

  function comprar() {
    carrinho(protudoCarrinho);
    valorFinal(protudoCarrinho);
  }

  function carrinho(produtinho) {
    let produto = localStorage.getItem("carrinho");
    produto = parseInt(produto);

    if (produto) {
      localStorage.setItem("carrinho", produto + 1);

    } else {
      localStorage.setItem("carrinho", 1);
    }

    qtdCarrinho(produtinho);
  }

  function qtdCarrinho(produtinho) {
    let itensCarrinho = localStorage.getItem("produtoCarrinho");
    itensCarrinho = JSON.parse(itensCarrinho);

    //se o carrinho nao estive fazio
    if (itensCarrinho != null) {
      if (itensCarrinho != undefined) {
        itensCarrinho = {
          ...itensCarrinho,
          [produtinho.nome]: produtinho,
        };
      }
      itensCarrinho[produtinho.nome].inCart += 1;
    } else {
      produtinho.inCart = 1;
      itensCarrinho = {
        [produtinho.nome]: produtinho,
      };
    }

    localStorage.setItem("produtoCarrinho", JSON.stringify(itensCarrinho));
  }

  function valorFinal(produtinho) {
    let valorTotal = localStorage.getItem("ValorTotal");

    if (valorTotal != null) {
      valorTotal = parseInt(valorTotal);
      localStorage.setItem("ValorTotal", valorTotal + produtinho.preço);
    } else {
      localStorage.setItem("ValorTotal", produtinho.preço);
    }
  }

  return (
    <Imgbx>
      <div class="container1">
        <div class="card" id="Muscle">
          <div class="imgBx">
            <img id="poke" src={props.produto.urlImagem} />
          </div>
          <div class="contentBx">
            <h2>{props.produto.nome}</h2>
            <div class="color">
              <h3>
                <strong class="valor"> {props.produto.valor}</strong>
              </h3>
            </div>
            <button onClick={comprar}>
              {" "}
              <a class="btnComprar">Comprar</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </Imgbx>
  );
}
