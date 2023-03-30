import { ImageWooCommerce } from './image';
/**
 * Represents the columns to display in the station-widget.
 */
export interface ProductWooCommerce {
  /** */
  name: string;
  /** */
  slug: string;
  /** */
  description: string;
  /** */
  price: number;
  /** */
  images: ImageWooCommerce[];
  /** */
  id: number;
  /** */
  status: string;
}
