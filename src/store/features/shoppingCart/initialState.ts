import { ShoppingCart } from "@/models/shopping-cart";

export interface ShoppingCartState {
  /** Shopping Cart Product information. */
  shoppingCartProduct: ShoppingCart[]
  increment: 0
}

export const initialState: ShoppingCartState = {
  shoppingCartProduct: [],
  increment: 0, 
};
