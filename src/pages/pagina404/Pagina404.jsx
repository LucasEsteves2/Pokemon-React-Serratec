import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "react-image";
import { Container, Typography } from "@material-ui/core";
import Snorlax from "../../assets/img/Snorlax.png";
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
				 <Img src={Snorlax} class="eoq" alt="404" />
			</h1>
			<br/>
			<Container component="article" maxWidth="xm">
			<Typography variant="p" component="h1" align="center" color="common.white">
			Opps! Um Snorlax selvagem bloqueou seu caminho!

          </Typography>
			</Container>

		</div>
    </Errinho>
	)
};

