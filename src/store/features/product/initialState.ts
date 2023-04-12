import { ProductWooCommerce } from '@/models/woocommerce/product';
import { ProductCategoryWooCommerce } from '@/models/woocommerce/product-category';

export interface ProductState {
  /** Product information. */
  products: ProductWooCommerce[] | null;

  /** Represent category product. */
  categoriesProduct: ProductCategoryWooCommerce[];

  /** Category selected filter products. */
  categorySelected: number | null;
}

export const initialState: ProductState = {
  products: null,
  categoriesProduct: [],
  categorySelected: null,
};
