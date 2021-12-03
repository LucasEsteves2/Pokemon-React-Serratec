import React from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Anuncio = () => {
  return <Container>Super oferta! Utilize o cupom "CLAUDINHO MADEIRADA" e ganhe 10% off</Container>;
};

export default Anuncio;
