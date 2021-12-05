import React from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #8A33F7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Anuncio = () => {
  return <Container>SUPER OFERTA!! FRETE GRÁTIS PARA TODAS AS COMPRAS
  </Container>;
};

export default Anuncio;
