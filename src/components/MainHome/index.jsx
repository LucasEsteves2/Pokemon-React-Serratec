import React from "react";
import Categories from "../Categorias/Categories";
import { Image } from "../MainSobre/style";
import Carrossel from "../Slider/Carrossel";
import home from '../../assets/home.png'
import Cards from "../Card/cards";

export function MainHome() {

    return (
        <>

            <Carrossel />
            <Image>
                <img src={home} alt="" />
            </Image>

            <Cards />


        </>

    )
}