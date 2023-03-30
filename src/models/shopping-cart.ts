import { ProductWooCommerce } from './woocommerce/product';

/**
 * Represents the columns to display in the station-widget.
 */
export interface ShoppingCart {
  /** */
  id: string;
  /** */
  quantity: number;
  /** */
  price: number;
  /** */
  note: string;
  /** */
  product: ProductWooCommerce;
}
