import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productSlicer } from './features/product/productSlice';
import { createWrapper } from 'next-redux-wrapper';
import { shoppingCartSlice } from './features/shoppingCart/shoppingCartSlice';

/**
 * Store main.
 *
 * @returns Configure store.
 */
const makeStore = () =>
  configureStore({
    reducer: {
      [productSlicer.name]: productSlicer.reducer,
      [shoppingCartSlice.name]: shoppingCartSlice.reducer,
    },
    devTools: true,
  });

type Store = ReturnType<typeof makeStore>;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
