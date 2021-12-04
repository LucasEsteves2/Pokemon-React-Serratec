import React, { createContext } from "react";
export const CartContext  = createContext({})


export const CartProvider = ({children}) =>{
    const Abc = "eu sou o lucas";

    return(
        <CartContext.Provider value={{Abc}}>
        {children}
        </CartContext.Provider>
    );
};