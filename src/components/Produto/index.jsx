import { Imgbx } from "./style";
import left from '../../assets/img/leftovers.png'
import React from "react";
console.log("oi")




export function Produto(props) {
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
                            <h3><strong class="valor"> {props.produto.valor}</strong></h3>

                        </div>
                        <a href="#" class="btnComprar">Comprar</a>
                    </div>
                </div>
            </div>
        </Imgbx>

    )




}