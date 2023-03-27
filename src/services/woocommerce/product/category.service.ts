import WooCommerce from '@/services/woocommerce/instanceWooCommerce';

const path = 'products/categories';

/**
 * Services for products WooCommerce.
 */
export class CategoryService extends WooCommerce {
	/**
	 * Get all categories product of WooCommerce.
	 */
	async getAll() {
		try {
			const { data } = await this.api().get(path);
			return data;
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error, 'error');
		}
	}
	
}
