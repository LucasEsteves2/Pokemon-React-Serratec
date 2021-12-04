import React from 'react';

import './card-style.css';
import { Link } from "react-router-dom";

const Card = props => {
    return (

        <div className="card text-center align-itens-center h-100">
            <div className="overflow">
                <img src={props.imgsrc} alt="imagens" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secundary">
                    {props.texto}
                </p>

                <Link to="/produtos" className="btn btn-outline-success">Buy Now</Link>
            </div>
        </div>

    );

}

export default Card;