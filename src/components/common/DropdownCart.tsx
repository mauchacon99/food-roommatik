import { useAppSelector } from "@/store/hooks";
import IconCart from "./Icons/IconCart";
import { ShoppingCart } from "../../models/shopping-cart";
import { utils } from "@/tools";
import { fullPurchaseAmountSelector } from "@/store/features/shoppingCart/shoppingCartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function DropdownCart() {
  const { shoppingCartProduct } = useAppSelector(
    (state) => state.stateShoppingCart
  );
  const getFullPurchaseAmount = useAppSelector((state) =>
    fullPurchaseAmountSelector(state)
  );
  const router = useRouter();
  return (
    <div className="dropdown dropdown-end ">
      <label tabIndex={0}>
        {" "}
        <button className="btn gap-2">
          <IconCart />
          {/* <span className="text-center bg-red-600 rounded-full h-4 w-4 text-white items-center justify-center text-sm">
            {" "}
            1{" "}
          </span> */}
        </button>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-3 shadow bg-base-200 rounded-box w-96  z-10"
      >
        {shoppingCartProduct.map((product: ShoppingCart) => (
          <div className=" flex w-full justify-start mb-2" key={product.id}>
            <div className="flex justify-items-center items-center mr-2">
              <img
                className="h-12 w-12 mask mask-circle  "
                src={product.product?.images[0].src}
                alt={product.product?.images[0].alt}
              />
            </div>
            <div className="flex flex-col">
              <div className="font-medium">
                {utils.formatTextToLowercase(product.product.name)}
              </div>
              <div className="text-sm">
                ${product.quantity} x {product.price}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between w-full  mb-2 border-3 border-primary-content">
          <span className="font-medium text-lg">Total</span>
          <span className="font-medium text-lg">${getFullPurchaseAmount}</span>
        </div>{" "}
        <Link className="btn  btn-outline w-full gap-2 mb-2" href={"/cart"}>
          <IconCart />
          Got to Cart
        </Link>
        <button
          className="btn  btn-outline w-full gap-2"
          onClick={() => router.push("/test")}
          disabled={!shoppingCartProduct.length}
        >
          <IconCart />
          Checkout
        </button>
      </ul>
    </div>
  );
}
