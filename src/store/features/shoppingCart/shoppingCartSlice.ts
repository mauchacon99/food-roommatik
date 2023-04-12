import { ShoppingCart } from '@/models/shopping-cart';
import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShoppingCartState, initialState } from './initialState';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '@/store';

/**
 * Slice of shoppingCart.
 */
export const shoppingCartSlice = createSlice({
  name: 'stateShoppingCart',
  initialState,
  reducers: {
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     * @param action This value action.
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
     * @param action This value action.
     */
    incrementProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<string>
    ) => {
      state.shoppingCartProduct.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity++ }
          : product
      );
    },
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     * @param action This value action.
     */
    decrementProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<string>
    ) => {
      state.shoppingCartProduct.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity-- }
          : product
      );
    },
    /**
     * Add product to shopping cart.
     *
     * @param state This state current.
     * @param action This value action.
     */
    removeProductToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ShoppingCart>
    ) => {
      state.shoppingCartProduct = state.shoppingCartProduct.filter(
        (product) => product.id !== action.payload.id
      );
    },
    /**
     * Hydrate state.
     *
     * @param state This state current.
     * @param action This value action.
     * @returns Object values.
     */
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
        ...action.payload.stateShoppingCart,
      };
    },
  },
});

/**
 * Calculate the total amount of the products added to the cart.
 *
 * @param state State app.
 * @returns Value amount total purchase.
 */
export const fullPurchaseAmountSelector = (state: AppState) => {
  let totalAmount = 0;
  state.stateShoppingCart.shoppingCartProduct.forEach(
    (product: ShoppingCart) => {
      totalAmount += product.price * product.quantity;
    }
  );
  return totalAmount;
};

export const {
  addProductToShoppingCart,
  incrementProductToShoppingCart,
  decrementProductToShoppingCart,
  removeProductToShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
