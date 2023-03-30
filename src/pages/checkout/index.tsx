import Container from "@/components/common/Container";
import { IconClose } from "@/components/common/Icons";
import IconBackArrow from "@/components/common/Icons/IconBackArrow";
import Navbar from "@/components/layouts/Navbar";
import { fullPurchaseAmountSelector } from "@/store/features/shoppingCart/shoppingCartSlice";
import Link from "next/link";

export default function PageCheckout() {
  const getFullPurchaseAmount = fullPurchaseAmountSelector();

  return (
    <>
      <Container>
        <Navbar
          iconLeft={
            <Link href={"/payment"}>
              <IconBackArrow classes="h-12 h-12" />
            </Link>
          }
          iconRight={
            <Link href={"/"}>
              <IconClose classes="h-5 h-5" color="fill-neutral-content" />
            </Link>
          }
          titleCenter="Place order"
        />
        <div className="mb-4">
          <h1 className="text-lg font-medium mb-2 ">
            {" "}
            Please confirm and submit you order
          </h1>
          <p className=" text-base-content text-sm">
            By clicking submit order, you agree to Fintorys Terms of Use and
            Privacy Policy
          </p>
        </div>
        <div className="grid gap-y-4 p-2">
          {/* Payment */}
          <div className="flex flex-col  w-full shadow-md bg-base-200 rounded-3xl items-center px-3 py-4 border border-primary">
            <div className="w-full flex mb-4">
              <div className="flex w-full justify-between items-center">
                <div className="font-medium text-xl">Payment</div>
                <div className="flex text-accent font-normal">Edit</div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center space-x-1">
                  <div className="h-6 w-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="#FF5F00"
                        d="M15.245 17.831h-6.49V6.168h6.49v11.663z"
                      />
                      <path
                        fill="#EB001B"
                        d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"
                      />
                      <path
                        fill="#F79E1B"
                        d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm font-medium"> * * * 6714</div>
                </div>
                <div className="text-sm font-medium">01/24</div>
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="flex flex-col  w-full shadow-md bg-base-200 rounded-3xl items-center px-3 py-4 border border-primary">
            <div className="w-full flex mb-4">
              <div className="flex w-full justify-between items-center">
                <div className="font-medium text-xl">Order summary</div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center text-lg">
              <div className="flex items-center space-x-1 ">Total</div>
              <div className=" font-medium text-xl">
                {" "}
                $ {getFullPurchaseAmount}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="sticky bottom-0 left-0 right-0 z-40 ">
        <div className="flex w-full justify-center bg-base-200 p-2  shadow ">
          <div className="w-full lg:w-3/6  flex  p-2 h-16">
            <div className="flex w-full  transition delay-150 duration-300 ease-in-out rounded-full justify-center items-center text-primary-content bg-primary font-medium text-lg h-12 p-1">
              <span className="font-medium  text-xl">
                Pay Purchase $ {getFullPurchaseAmount}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
