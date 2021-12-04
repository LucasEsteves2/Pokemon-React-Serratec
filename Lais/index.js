import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import { Container } from "./style";

    export function Footer (){
    return(
        <Container>
        <footer>
            <div className= "sobre">
                <p>SOBRE</p>
                <p>Grupo Equipe Rocket Ltda - Site de venda de pokemons.</p>
                <p>Fundada em 2021, estamos no mercado de contrabando há 7 dias.</p>
                <p>Nosso diferencial esta no atendimento, nos produtos serviços,</p>
                <p>na entrega e no pagamento. Nossa visão é ajudar a empresa Rocket e </p>
                <p>e nossos consumidores a prosperarem em uma economia sustentável</p>
                <p>onde pessoas, lucros e planetas estão em equilíbrio.</p>
                
            </div><div className= "endereco">
                <p>ENDEREÇO</p>
                <p>Petrópolis, Rio de Janeiro. Av. Cidade Imperial, 1001, Kanto. Brasil, BR.</p> 
                <p>CEP: 25622-021</p> 
                <p> CONTATO </p>
                <p>+55 (24) 2222-2222</p>
                
            </div>

            <div className="social_list">
               
                <a href = "https://pt-br.facebook.com/" target ="_blank"><FaFacebook className="social"></FaFacebook></a>

                <a href = "https://www.instagram.com/?hl=pt-br" target ="_blank"><FaInstagram className="social"></FaInstagram></a>
               
                <a href = "https://www.linkedin.com/" target ="_blank"><FaLinkedin className="social"></FaLinkedin></a>
           
                <a href = "https://www.google.com/intl/pt-BR/gmail/about/" target ="_blank"><MdEmail className="social"></MdEmail></a>
                
                </div>
                </footer>
                </Container>
    );
}