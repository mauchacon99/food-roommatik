import { createSlice } from '@reduxjs/toolkit';
import { CommonState, initialState } from './initialState';

export const commonSlicer = createSlice({
  name: 'stateCommon',
  initialState,
  reducers: {
    /**
     * Set all products.
     *
     * @param state This state current.
     */
    closeCartSidebar: (state: CommonState) => {
      state.isOpenCartSidebar = false;
    },
    /**
     * Set value for categories product.
     *
     * @param state This state current.
     */
    openCartSidebar: (state: CommonState) => {
      state.isOpenCartSidebar = true;
    },
  },
});

export const { openCartSidebar, closeCartSidebar } = commonSlicer.actions;

export default commonSlicer.reducer;
