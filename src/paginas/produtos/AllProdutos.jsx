import React from "react";
import GetProdutos from "../../components/GetProdutos";

function AllProdutos() {
  return (
    <>
      <GetProdutos url={"/produtos"} />
    </>
  );
}

export default AllProdutos;
