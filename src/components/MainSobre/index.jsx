import { Texto ,Image} from "./style";
import sobre from '../../assets/sobre.png'

export function MainSobre() {
    return (
        <div>
            <Image>
                <img src={sobre} alt="" />


            </Image>

            <Texto>
                <h1>Quem Somos nós?</h1>
                <p>Somos uma loja online que oferece o melhor para os nossos clientes, onde podemos atender todas as expectativas sobre a moda feminina sempre de olho nas tendências e lançamentos.

                    Nossa loja oferece o que há de mais moderno e atual em todas as categorias de produtos.

                    Desde o princípio, nossa preocupação é oferecer os melhores produtos com os melhores preços aliado a um ótimo atendimento a você cliente, que é a pessoa mais importante para nós.</p>
            </Texto>
            <Texto>
                <h1>É Seguro Comprar na PokeStore?</h1>
                <p>Nós achamos fundamental qualquer cliente pesquisar a loja antes de fazer suas compras!

                    Por isso vamos dar algumas dicas de como fazer isso para você se sentir 100% segura no momento da sua compra.</p>
            </Texto>
            <Texto>
                <h1>Formas de Pagamento:</h1>
                <p>Você poderá usar as Seguintes formas de Pagamento em nosso site:

                    → Cartão de Crédito, podendo parcelar em até 6X Sem Juros.
                    → Boleto Bancário à Vista.

                    → Depósito ou Transferência Bancária com 10% de Desconto.</p>
            </Texto>
            <Texto>
                <h1>Envio e Prazo:</h1>
                <p>Enviamos os Produtos bem embalados e seguros para Todo Brasil via Correios.

                    Seu pedido será despachado em até 3 dias uteis após a aprovação.

                    O prazo pode ser calculado na pagina do produto colocando seu CEP no campo de cálculo de prazo e frete.</p>
            </Texto>


            <Texto>
                <h1>Rastreamento:</h1>
                <p>Você recebe o Código de Rastreio no seu Whatsapp e e-mail para pode acompanhar o andamento da sua entrega no site dos correios.</p>

            </Texto>

            <Texto>
            <h1>Ainda com Duvidas?</h1>
            <p>Converse com nossa Vendedora pelo Whatsapp (11) 98377-2014 e tire qualquer dúvida para efetuar sua compra com tranquilidadeNosso Atendimento é de Segunda a Sexta das 10 as 17hs</p>
        

        </Texto >
        </div >
       
        )

}