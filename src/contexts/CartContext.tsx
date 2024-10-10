/*
  1. Let's create a context using createContext()
  2. the context can be used to make a provider component
  3. create a provider component
  4. supply the context data to the provider component -- in App.tsx
  5. access the context data in any component using useContext -- Header
*/

import { createContext, useState } from "react";
import { ICartContext } from "../models/ICartContext";
import { IProduct } from "../models/IProduct";

//what data will be supplied through the context?
//Create context
export const CartContext = createContext<ICartContext | undefined>(undefined);

//create a provider component
//props can also be used
export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [myCartItems, setMyCartItems] = useState<IProduct[]>([]);
  const myAddToCart=(newProduct:IProduct)=>{
    setMyCartItems([...myCartItems,newProduct])
  }
  return (
    /*use the same key that is used in the interface (cartItems) */
    <CartContext.Provider
      value={{ cartItems: myCartItems, addToCart: myAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
