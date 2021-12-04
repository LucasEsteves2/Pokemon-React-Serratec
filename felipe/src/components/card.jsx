import React from 'react'; 

import './card-style.css';

const Card = props => {
     return(

        <div className= "card text-center align-itens-center h-100">
            <div className="overflow">
                <img src={props.imgsrc} alt="imagens" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secundary">
                {props.texto}
                </p>
                <a href="#" className="btn btn-outline-success">Buy Now</a>
            </div>
        </div>

     );

}

export default Card;