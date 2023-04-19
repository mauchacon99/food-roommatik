import Link from "next/link";
import { utils } from "@/tools";
import { ProductWooCommerce } from "@/models/woocommerce/product";
import { addProductToShoppingCart } from "@/store/features/shoppingCart/shoppingCartSlice";
import { useAppDispatch } from "@/store/hooks";
import { v4 as uuid } from "uuid";

/**
 * Represents the pros of this component.
 */
interface IProps {
  /** Represents product woo-commerce. */
  product: ProductWooCommerce;
}

/**
 * Card used on the shopping cart page.
 *
 * @returns This components.
 */
export default function CardProduct({ product }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      {/*  eslint-disable-next-line max-len */}
      <div className="hover:shadow-md p-3 h-full max-w-sm bg-base-200 rounded-3xl  pb-0  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-base-200 duration-300 ">
        <div className="flex items-stretch w-full">
          <div className="flex flex-col w-full">
            <div className="h-full w-full flex items-center justify-center">
              <Link href={`/product/${product.id}`}>
                <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-full ">
                  <img
                    src={product.images[0]?.src}
                    alt={product.images[0]?.src}
                    className="h-full w-full object-cover object-center full-rounded"
                  />
                </div>
              </Link>
            </div>
            <div className="h-full">
              <div className="px-1 pb-2 flex flex-col items-stretch">
                <Link href={`/product/${product.id}`}>
                  <div className="text-center normal-case flex-1 truncate  text-lg lg:text-2xl text-md font-semibold tracking-tight ">
                    {utils.formatTextToLowercase(product.name)}
                  </div>
                </Link>
                <div className="flex items-center justify-end  mt-2 mb-3 flex-1">
                  <span className="text-sm"> 20 min </span>
                </div>
                <div className="flex items-center justify-between flex-1 ">
                  <span className="text-lg font-bold">$ {product.price}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        addProductToShoppingCart({
                          id: uuid(),
                          price: product.price,
                          quantity: 1,
                          note: "",
                          product,
                        })
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-primary"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
