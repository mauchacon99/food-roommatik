import { useState, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import Router from "next/router";
import { utils } from "@/tools";
import Container from "@/components/common/Container";
import DropdownCart from "@/components/common/DropdownCart";
import IconBackArrow from "@/components/common/Icons/IconBackArrow";
import Navbar from "@/components/layouts/Navbar";
import { ShoppingCart } from "@/models/shopping-cart";
import { ProductWooCommerce } from "@/models/woocommerce/product";
import { productService } from "@/services/woocommerce";
import { useAppDispatch } from "@/store/hooks";
import {
  addProductToShoppingCart,
  decrementProductToShoppingCart,
  incrementProductToShoppingCart,
} from "@/store/features/shoppingCart/shoppingCartSlice";

export async function getServerSideProps(context: { params: { id: number } }) {
  const product = await productService.findById(context.params.id);
  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }: { product: ProductWooCommerce }) {
  const dispatch = useAppDispatch();

  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    id: uuid(),
    price: Number(product.price),
    note: "",
    quantity: 1,
    product,
  });

  const getAmountTotalOrder = (): number => {
    return shoppingCart.price * shoppingCart.quantity;
  };

  const setValueShoppingCart = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>): void => {
    const shopping: ShoppingCart = {
      ...shoppingCart,
      note: target.value,
    };
    setShoppingCart(shopping);
  };

  const handleQuantityShoppingCart = (quantity: number): void => {
    const shopping: ShoppingCart = {
      quantity,
      ...shoppingCart,
    };
    setShoppingCart(shopping);
  };

  const incrementQuantity = (): void => {
    handleQuantityShoppingCart(shoppingCart.quantity++);
  };

  const decrementQuantity = (): void => {
    if (shoppingCart.quantity > 1)
      handleQuantityShoppingCart(shoppingCart.quantity--);
  };

  const addShoppingCart = (): Promise<boolean> => {
    dispatch(addProductToShoppingCart(shoppingCart));
    return Router.push("/");
  };

  return (
    <>
      <Container>
        <Navbar
          iconRight={<DropdownCart />}
          iconRightWithButton={false}
          iconLeft={<IconBackArrow classes="h-12 h-12" />}
          titleCenter="Details Product"
        />
        <div className="w-full flex flex-col px-6">
          <div className="flex justify-center items-center w-full">
            <img
              className="h-48 w-48 rounded-full"
              alt={product.images[0].alt}
              src={product.images[0].src}
            />
          </div>
          <div className="flex justify-between items-end my-2 font-sans">
            <span className=" text-xl md:text-3xl ">
              {" "}
              {utils.formatTextToLowercase(product.name)}{" "}
            </span>
            <div>
              <span className="font-extrabold	text-sm"> $ </span>{" "}
              <span className=" font-bold text-2xl"> {product.price} </span>
            </div>
          </div>
          <p className="text-sm  md:text-lg text-justify text-gray-400">
            {product.description}
            <span className="sm:text-xs text-base font-bold "> More</span>
          </p>
          {/* <div className="section-categories-product space-y-3 pt-2 mb-4">
            <div>
              <span className="text-sm md:text-lg text-base-content md:mb-1">
                {" "}
                Size{" "}
              </span>
              <div className="grid  grid-cols-4 gap-2 md:grid-col-2  mt-2">
                <div className="rounded-full  first: text-center text-accent-content md:text-base bg-accent text-xs font-medium p-1 border-accent-content">
                  Large
                </div>
                <div className="rounded-full bg-base-300   text-center text-xs md:text-base  p-1 font-medium">
                  {" "}
                  Small{" "}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm md:text-lg text-base-content ">
                {" "}
                Topping{" "}
              </span>
              <div className="grid grid-cols-4 gap-2 md:grid-col-2  mt-2">
                <div className="rounded-full  first: text-center text-accent-content bg-accent   text-xs md:text-base font-medium p-1 border-accent-content">
                  Queso
                </div>
                <div className="rounded-full bg-base-300   text-center text-xs md:text-base p-1 font-medium">
                  {" "}
                  Pollo{" "}
                </div>
                <div className="rounded-full  first: text-center text-accent-content bg-accent   text-xs md:text-base font-medium p-1 border-accent-content">
                  {" "}
                  Jamon{" "}
                </div>
                <div className="rounded-full bg-base-300   text-center text-xs md:text-base p-1 font-medium">
                  {" "}
                  Chorizo
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col pt-3 md:pt-6 h-full">
            <span className="text-sm md:text-lg ">
              {" "}
              Note product{" "}
              <span className="rounded-full bg-primary text-primary-content text-xs md:text-base md:text-md font-semibold px-2 ">
                {" "}
                Add Note{" "}
              </span>
            </span>
            <h3 className="text-xs md:text-base mb-2 text-gray-400	">
              {" "}
              The restaurant follow when prepare{" "}
            </h3>

            <textarea
              name="note"
              className="textarea textarea-bordered textarea-xs h-4 mb-2 text-sm  md:text-base w-full  "
              onChange={(event) => setValueShoppingCart(event)}
              placeholder="Write the instructions you need "
            ></textarea>
          </div>
        </div>
      </Container>
      <div className="sticky bottom-0 left-0 right-0 z-40 ">
        <div className="flex w-full justify-center bg-base-200 p-2  shadow ">
          <div className="w-full flex justify-between sm:w-full lg:w-3/6 md:1/2  ">
            <div className="flex items-center bg-neutral text-neutral-content h-12 rounded-full shadow">
              <button
                onClick={() => {
                  decrementQuantity();
                }}
                className="  h-9 w-12  text-2xl text-bold text-center font-extrabold"
              >
                {" "}
                -{" "}
              </button>
              <div className="text-lg p-1 h-9 w-6 text-center font-bold">
                {shoppingCart.quantity}
              </div>
              <button
                onClick={() => {
                  incrementQuantity();
                }}
                className=" h-9 w-12 text-2xl text-bold text-center font-extrabold "
              >
                {" "}
                +{" "}
              </button>
            </div>
            <button
              onClick={() => addShoppingCart()}
              className="flex justify-around ml-2 w-full h-12 bg-primary text-primary-content rounded-full items-center drop-shadow-lg"
            >
              <span className="font-medium md:text-2xl text-lg">
                {" "}
                Add to my order{" "}
              </span>
              <span className="font-medium  md:text-2xl  text-lg">
                {" "}
                $ {getAmountTotalOrder()}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
