import WooCommerce from '@/services/woocommerce/instanceWooCommerce';
const path = 'products';

/**
 * Services for products WooCommerce.
 */
export class ProductService extends WooCommerce {
  /**
   * Get all products of WooCommerce.
   */
  async getAll() {
    try {
      const { data } = await this.api().get(path, {
        _fields: 'name,slug,description,price,images,id',
        status: 'publish',
      });
      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error, 'error');
    }
  }
  /**
   * Get all products of WooCommerce.
   */
  async findById(Id: number) {
    try {
      const { data } = await this.api().get(`${path}/${Id}`, {
        _fields: 'name,slug,description,price,images,id',
        status: 'publish',
      });
      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error, 'error');
    }
  }
}
