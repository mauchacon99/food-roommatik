import { ProductWooCommerce } from "@/models/woocommerce/product";

export interface ProductState {
  /** Product information. */
  products: ProductWooCommerce[] | null;
  /** Value increment. */
  value: number;
}

export const initialState: ProductState = {
  products: null,
  value: 0,
};
