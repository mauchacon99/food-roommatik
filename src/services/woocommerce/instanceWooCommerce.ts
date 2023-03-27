import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

/**
 * Instance Library WooCommerce.
 */
export default class WooCommerce {
	/**
	 * Instance and setting WooCommerceRestApi.
	 * 
	 * @returns Class WooCommerceRestApi.
	 */
	api = () => {
		return new WooCommerceRestApi({
			url: 'https://kwik-e-market.com',
			consumerKey: 'ck_91b3fa66c53473074c6364eb739f2d3a7f0a995b',
			consumerSecret: 'cs_cccfac431ffb4cf4e911c736731599dd7845cfa0',
			version: 'wc/v3',
		});
	};
}
