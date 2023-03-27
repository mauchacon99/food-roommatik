import { ShoppingCart } from '@/models/shopping-cart';
import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShoppingCartState, initialState } from "./initialState";
import { HYDRATE } from "next-redux-wrapper";

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
      state.increment++
      console.log('mauricio')
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
      
      state.shoppingCartProduct.push(action.payload);
      
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
        ...action.payload.product,
      };
    },
  },
});

export const { addProductToShoppingCart, removeProductToShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
