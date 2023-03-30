import { ShoppingCart } from '@/models/shopping-cart';

export interface ShoppingCartState {
  /** Shopping Cart Product information. */
  shoppingCartProduct: ShoppingCart[];
}

export const initialState: ShoppingCartState = {
  shoppingCartProduct: [],
};
