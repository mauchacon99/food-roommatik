import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductState, initialState } from './initialState';
import { HYDRATE } from 'next-redux-wrapper';
import { ProductWooCommerce } from '@/models/woocommerce/product';

export const productSlicer = createSlice({
  name: 'stateProducts',
  initialState,
  reducers: {
    /**
     * Decrement counter.
     *
     * @param state This state current.
     */
    setProduct: (
      state: ProductState,
      action: PayloadAction<ProductWooCommerce[]>
    ) => {
      state.products = action.payload;
    },
    HYDRATE: (state: ProductState, action: AnyAction) => {
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

export const { setProduct } = productSlicer.actions;

export default productSlicer.reducer;
