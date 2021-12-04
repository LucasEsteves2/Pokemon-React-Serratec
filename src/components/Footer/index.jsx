import React from "react";
import { Fotizin, Imagem } from "./style";


export function Footer() {

    return (


        <Fotizin>


            <Imagem>
                <img id="img" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pikachu-com-Fundo-Transparente.png" alt="pika pika" />
            </Imagem>
            <div className="position">
                <ul class="social-icons">
                    <li><a href="https://pt-br.facebook.com/login.php/" target="_blank" ><img class="link" src="https://i.imgur.com/schYrX3.png" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" ><img class="link" src="https://i.imgur.com/DLcSzOa.png" /></a></li>
                    <li><a href="https://twitter.com/" target="_blank" ><img class="link" src="https://i.imgur.com/EjpotTa.png" /></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank" ><img class="link" src="https://i.imgur.com/rtNeHYe.png" /></a></li>
                </ul>
            </div>


        </Fotizin>

    )
}