import React from "react";
import Categories from "../Categorias/Categories";
import { Image } from "../MainSobre/style";
import Carrossel from "../Slider/Carrossel";
import home from '../../assets/home.png'

export function MainHome() {

    return (
        <>

            <Carrossel />
           
            <Categories />
        </>

    )
}