import React, { Component } from 'react';
import Card from './card';
import { Alinhar } from './style';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Cards extends Component {

    render() {
        return (
            <>
                <Alinhar>
                <Container>
                    <ul>
                        <li>
                            <div>
                                <Card imgsrc="https://cdn1.bellediva.com.br/wp-content/uploads/2016/08/All-Fire.jpg" title="Pokemons de fogo"
                                    texto="Não perca a oportunidade de comprar os melhores pokemons do tipo fogo ,temos os melhores preços do mercado, e o que há de mais novo relacionados a pokemons de fogo" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Card imgsrc="https://cdn3.bellediva.com.br/wp-content/uploads/2016/08/All-Watter.jpg" title="Pokemons de agua"
                                    texto="Não perca a oportunidade de comprar os melhores pokemons do tipo agua ,temos os melhores preços do mercado, e o que há de mais novo relacionados a pokemons de agua."/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Card imgsrc="https://img.quizur.com/f/img5ddbf18b2a5921.36932815.jpg?lastEdited=1574695310" title="Pokemons de planta"
                                    texto="Não perca a oportunidade de comprar os melhores pokemons do tipo planta ,temos os melhores preços do mercado, e o que há de mais novo relacionados a pokemons de planta."/>
                            </div>
                        </li>
                    </ul>
                    </Container>
                </Alinhar>

            </>
        );
    }
}

export default Cards;