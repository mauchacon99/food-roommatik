import WooCommerce from '@/services/woocommerce/instanceWooCommerce';
const path = 'products';

/**
 * Services for products WooCommerce.
 */
export class ProductService extends WooCommerce {
  /**
   * Get all products of WooCommerce.
   *
   * @param query Query in end-point.
   */
  async getAll(query: object = {}) {
    try {
      const { data } = await this.api().get(path, {
        _fields: 'name,slug,description,price,images,id',
        status: 'publish',
        ...query,
      });
      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error, 'error');
    }
  }

  /**
   * Get all products of WooCommerce.
   *
   * @param Id This id product.
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
