import React, { useEffect, useState } from "react";
import { api } from "../service/api";

function Home() {
  useEffect(() => {
    req();
  }, []);

  async function req() {
    const  {headers}  = await api.post("/login", {
      email: "natalinoesteves2010@gmail.com",
      senha: "123",
    });
    console.log(headers.authorization);

    
     const { data } = await api.get("/security/clientes");
    console.log(data)
  }

  return (
    <>
      <h1> VOCE NAO ESTA LOGADO</h1>
    </>
  );
}

export default Home;
