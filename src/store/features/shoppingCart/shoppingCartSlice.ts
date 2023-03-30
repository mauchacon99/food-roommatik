import { ShoppingCart } from '@/models/shopping-cart';
import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShoppingCartState, initialState } from "./initialState";
import { HYDRATE } from "next-redux-wrapper";
import { original } from 'immer'

export const shoppingCartSlice = createSlice({
  name: "stateShoppingCart",
  initialState,
  reducers: {
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     */
    addProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ShoppingCart>
    ) => {
      state.shoppingCartProduct.push(action.payload);
    },
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     */
    incrementProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<string>
    ) => {
      state.shoppingCartProduct.map(product => product.id == action.payload ? {...product, quantity:product.quantity++} : product);
    },
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     */
    decrementProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<string>
    ) => {
      state.shoppingCartProduct.map(product => product.id == action.payload ? {...product, quantity:product.quantity--} : product);
    },
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     */
    removeProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ShoppingCart>
    ) => {
      state.shoppingCartProduct = state.shoppingCartProduct.filter(product => product.id !== action.payload.id);
    },
    HYDRATE: (state: ShoppingCartState, action: AnyAction) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    /**
     * Special case for next-redux-wrapper.
     *
     * @param state This state.
     * @param action This action.
     * @returns Object values.
     */
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { removeAllProductsToShoppingCart, addProductToShoppingCart, incrementProductToShoppingCart, decrementProductToShoppingCart, removeProductToShoppingCart} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
