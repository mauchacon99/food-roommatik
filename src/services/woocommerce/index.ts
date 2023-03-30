import {
  ProductService,
  CategoryService,
} from '@/services/woocommerce/product';

export const productService = new ProductService();
export const categoryService = new CategoryService();
