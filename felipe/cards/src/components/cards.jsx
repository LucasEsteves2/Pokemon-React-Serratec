import React, { Component } from 'react';
import Card from './card';
import img1 from '../assets/arcanine.PNG.png';
import img2 from '../assets/arceus.JPG.jpg';
import img3 from '../assets/mewtwo.JPG.jpg';

class Cards extends Component {
    
    render() {
        return (
            <>
          <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                  <div className="col-md-4">
                      <Card imgsrc={img1} title="Arcanine"
                      texto="Arcanine é considerado um Pokémon lendário em algumas 
                      instâncias da franquia. Vários acreditam que o grande 
                      canino teria sido criadopara realmente compor o time de 
                      lendários da primeira geração."/>
                  </div>

                  <div className="col-md-4">
                      <Card imgsrc={img2} title="Arceus"
                      texto="Arceus é um Pokémon Lendário Conhecido como The Original One, 
                      ele é o criador do universo Pokémon e venerado principalmente
                      em Sinnoh e Ransei."/>
                  </div>

                  <div className="col-md-4">
                      <Card imgsrc={img3} title="Mewtwo"
                      texto="Ele foi criado geneticamente em um laboratório, sendo um 
                      clone do misterioso Pokémon Mew. Após destruir seus criadores, seus poderes 
                      são ilimitados e até hoje nao se sabe do que um Mewtwo é capaz."/>
                  </div>
              </div>
          </div>
          </>
        );
    }
}

export default Cards;