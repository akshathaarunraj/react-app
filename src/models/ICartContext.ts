import { IProduct } from "./IProduct";

export interface ICartContext{
    cartItems:IProduct[];
    addToCart:(product:IProduct)=>void;
}