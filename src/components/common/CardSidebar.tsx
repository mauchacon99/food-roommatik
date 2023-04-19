import { ShoppingCart } from "@/models/shopping-cart";
import { closeCartSidebar } from "@/store/features/common/commonSlice";
import {
  fullPurchaseAmountSelector,
  removeProductToShoppingCart,
} from "@/store/features/shoppingCart/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { utils } from "@/tools";
import Link from "next/link";
import { ReactNode } from "react";
import { IconClose } from "./Icons";
import { useRouter } from "next/navigation";

/**
 * Pages checkout purchase.
 *
 * @returns This pages.
 */
export default function CardSidebar({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    stateShoppingCart: { shoppingCartProduct },
    stateCommon: { isOpenCartSidebar },
  } = useAppSelector((state) => state);

  const handleRemoveShoppingCart = (product: ShoppingCart) => {
    dispatch(removeProductToShoppingCart(product));
  };

  const getFullPurchaseAmount = useAppSelector((state) =>
    fullPurchaseAmountSelector(state)
  );

  const handleContinueShopping = () => {
    dispatch(closeCartSidebar());
    router.push("/");
  };
  return (
    <>
      <div
        className="relative z-10  "
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="inset-0 ">{children}</div>
        {isOpenCartSidebar && (
          <div className="fixed inset-0 overflow-hidden bg-opacity-90 bg-neutral">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium">Shopping cart</h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            className="-m-2 p-2 "
                            onClick={() => dispatch(closeCartSidebar())}
                          >
                            <IconClose classes="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {shoppingCartProduct.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                                  <img
                                    src={product.product?.images[0].src}
                                    alt={product.product?.images[0].alt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>
                                          {" "}
                                          {utils.formatTextToLowercase(
                                            product.product.name
                                          )}
                                        </a>
                                      </h3>
                                      <p className="ml-4">
                                        {" "}
                                        $
                                        {product.quantity
                                          ? product.quantity * product.price
                                          : 0}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.note}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          handleRemoveShoppingCart(product)
                                        }
                                        className="font-medium text-neutral-content"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>${getFullPurchaseAmount}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          href={"/checkout"}
                          className="flex items-center justify-center rounded-md border border-transparent btn btn-primary  px-6 py-3 text-base font-medium  shadow-sm  "
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{"  "}
                          <button
                            onClick={() => {
                              handleContinueShopping();
                            }}
                            className="font-medium text-secondary-content  "
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
