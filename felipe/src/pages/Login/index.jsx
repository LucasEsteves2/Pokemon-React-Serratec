import React from 'react';
import "./styled.css";
import Arcanine from '../../assets/Arcanine.gif';
import Bulbasaur from '../../assets/Bulbasaur.gif';
import Charizard from '../../assets/charizard.gif';
import Eevee from '../../assets/Eevee.gif';
import lugia2 from '../../assets/lugia2.gif';
import mewtwo from '../../assets/mewtwo.gif';
import pikachu from '../../assets/pikachu.gif';
import squirtle from '../../assets/squirtle.gif';
import Umbreon from '../../assets/UmbreonGif.gif';
import aron from '../../assets/aron.gif';

class Login extends React.Component {
  render() {
    return (
      <div className="bodyStyle">
        <img className="arcanine" src={Arcanine} alt="arc"/>
        <img className="buba" src={Bulbasaur} alt="arc"/>
        <img className="chari" src={Charizard} alt="arc"/>
        <img className="eve" src={Eevee} alt="arc"/>
        <img className="lugi" src={lugia2} alt="arc"/>
        <img className="mewt" src={mewtwo} alt="arc"/>
        <img className="pika" src={pikachu} alt="arc"/>
        <img className="squi" src={squirtle} alt="arc"/>
        <img className="umbre" src={Umbreon} alt="arc"/>
        <img className="aron" src={aron} alt="arc"/>

        <div className="App">
        
        <div className="input-container">
          <input type="text" placeholder="Username"/>
          <i class="zmdi zmdi-account zmdi-hc-lg"></i>
        </div>
        
        <div className="input-container">
          <input type="password" placeholder="Password"/>
          <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
        </div>
        <button type="submit">Log In</button>
        </div>
      </div>
    )
  }
}

export default Login;