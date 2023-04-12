import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductState, initialState } from './initialState';
import { HYDRATE } from 'next-redux-wrapper';
import { ProductWooCommerce } from '@/models/woocommerce/product';
import { ProductCategoryWooCommerce } from '@/models/woocommerce/product-category';

export const productSlicer = createSlice({
  name: 'stateProducts',
  initialState,
  reducers: {
    /**
     * Set all products.
     *
     * @param state This state current.
     * @param action This action current.
     */
    setProduct: (
      state: ProductState,
      action: PayloadAction<ProductWooCommerce[]>
    ) => {
      state.products = action.payload;
    },
    /**
     * Set value for categories product.
     *
     * @param state This state current.
     * @param action This action current.
     */
    setCategories: (
      state: ProductState,
      action: PayloadAction<ProductCategoryWooCommerce[]>
    ) => {
      state.categoriesProduct = action.payload;
    },
    /**
     * Set value for categories product.
     *
     * @param state This state current.
     * @param action New value category selected.
     */
    setCategorySelected: (
      state: ProductState,
      action: PayloadAction<number>
    ) => {
      state.categorySelected = action.payload;
    },
    /**
     * Decrement counter.
     *
     * @param state This state current.
     * @param action This action current.
     * @returns State.
     */
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
        ...action.payload.stateProducts,
      };
    },
  },
});

export const { setProduct, setCategorySelected, setCategories } =
  productSlicer.actions;

export default productSlicer.reducer;
