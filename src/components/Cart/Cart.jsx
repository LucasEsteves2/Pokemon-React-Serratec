import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Anuncio from "./Anuncio";
import { mobile } from "../../components/Slider/responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  let itensCarrinho = localStorage.getItem("produtoCarrinho");
  let qtd = localStorage.getItem("carrinho");
  let subtotal = localStorage.getItem("ValorTotal");

  itensCarrinho = JSON.parse(itensCarrinho);

  function limparCarrinho() {
    localStorage.removeItem("produtoCarrinho");
    localStorage.removeItem("carrinho");
    localStorage.removeItem("ValorTotal");
    window.location.reload();
    alert("SEU CARRINHO FOI LIMPADINHO");
  }

  return (
    <Container>
      <Anuncio />
      <Wrapper>
        <Title>SEU CARRINHO</Title>
        <Top>
          <TopButton>CONTINUAR COMPRANDO</TopButton>
          <TopTexts>
            <TopText>Seus itens({qtd})</TopText>
            <button onClick={limparCarrinho}>
              {" "}
              <TopText>Limpar Carrinho</TopText>{" "}
            </button>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {/* começo */}
            {Object.values(itensCarrinho).map((produtos) => (
              <Product>
                <ProductDetail>
                  <Image src={produtos.url} />
                  <Details>
                    <ProductName>
                      <b>Produto:</b> {produtos.nome}
                    </ProductName>
                    <ProductId>
                      <b>Descricao:</b> {produtos.desc}
                    </ProductId>
                    <ProductColor color="purple" />
                    <ProductSize>
                      <b>Categoria:</b> Pokebola
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{produtos.inCart}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice> R$: {produtos.preço}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            {/* fim de produtos */}
          </Info>
          <Summary>
            <SummaryTitle>LISTA DE ITENS</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ {subtotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Valor do Frete</SummaryItemText>
              <SummaryItemPrice>R$ 24.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto de Envio</SummaryItemText>
              <SummaryItemPrice>R$ -24.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ {subtotal}</SummaryItemPrice>
            </SummaryItem>
            <Button>FINALIZAR COMPRA</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
