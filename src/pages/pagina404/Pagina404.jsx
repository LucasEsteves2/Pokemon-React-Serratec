import React, { useCallback } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { Img } from "react-image";

import Snorlax from "../../assets/img/Snorlax.svg";
import { Errinho } from "./style";



export function  Pagina404 () {
  const history = useNavigate();

	const handleBack = useCallback(() => {
		history.push("/");
	}, [history]);

	return (
    <Errinho> 
		<div>
			<h1>
				4<Img src={Snorlax} class="eoq" alt="404" />4
			</h1>
			<p >
				<span className="span">Opps!</span> A wild Snorlax has blocked
				your path!
			</p>
		</div>
    </Errinho>
	)
};

