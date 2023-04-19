import { combineReducers } from '@reduxjs/toolkit';
import { productSlicer } from './product/productSlice';
import { shoppingCartSlicer } from './shoppingCart/shoppingCartSlice';
import { commonSlicer } from './common/commonSlice';

export const rootReducer = combineReducers({
  [productSlicer.name]: productSlicer.reducer,
  [shoppingCartSlicer.name]: shoppingCartSlicer.reducer,
  [commonSlicer.name]: commonSlicer.reducer,
});
