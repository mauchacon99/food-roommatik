import Link from "next/link";
import IconCart from "../common/Icons/IconCart";
import { IconHome } from "../common/Icons";

/**
 * Component bottom navbar.
 */
export default function BottomNavbar() {
  return (
    <div className="sticky bottom-0 left-0 right-0 ">
      <div className="flex w-full justify-center bg-base-200 p-2  shadow ">
        <div className="w-full lg:w-3/6 flex shadow   p-2  ">
          <div className=" bg-primary rounded-full flex w-full items-center justify-center   p-2 lg:p-1">
            <button className="w-full ">
              <Link href="/">
                <div className="flex flex-col items-center">
                  <IconHome color="text-accent" />
                  <span className="text-xs text-accent  font-medium">
                    All Home
                  </span>
                </div>
              </Link>
            </button>
            <button className="w-full ">
              <Link href="/shopping-history">
                <div className="flex flex-col items-center">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-primary-content"
                    viewBox="0 0 101.57 122.88"
                  >
                    <title>my-orders</title>
                    <path d="M4.7,28.93H26.13V24.56a24.57,24.57,0,0,1,49.13,0v4.37h21.6a4.7,4.7,0,0,1,3.33,1.38,4.76,4.76,0,0,1,1.38,3.32V106a16.93,16.93,0,0,1-16.88,16.88H16.88A16.93,16.93,0,0,1,0,106V33.63a4.71,4.71,0,0,1,4.7-4.7ZM20.37,63.87h9.41A1.24,1.24,0,0,1,31,65.1v9.41a1.23,1.23,0,0,1-1.23,1.23H20.37a1.23,1.23,0,0,1-1.23-1.23V65.1a1.24,1.24,0,0,1,1.23-1.23Zm24,9.68c-1.74,0-3.14-1.67-3.14-3.74s1.4-3.75,3.14-3.75h37c1.74,0,3.15,1.68,3.15,3.75a3.48,3.48,0,0,1-3.15,3.74ZM18.67,97.2a2,2,0,0,1,.39-2.93,2.32,2.32,0,0,1,3.13-.1l2.19,2.25,5.48-5.61a2,2,0,0,1,2.94.31A2.33,2.33,0,0,1,33,94.25l-7.26,7.45a2,2,0,0,1-2.94-.31l-.17-.2a2.16,2.16,0,0,1-.33-.27L18.67,97.2ZM44.11,100C42.38,100,41,98.32,41,96.26s1.41-3.75,3.14-3.75h37c1.73,0,3.14,1.68,3.14,3.75S82.87,100,81.14,100Zm-12-71.07H69.27V24.56a18.58,18.58,0,0,0-37.15,0v4.37Zm-6,11.61V34.91H6V106a10.93,10.93,0,0,0,10.89,10.89H84.69A11,11,0,0,0,95.58,106V34.91H75.26V40.6a6.84,6.84,0,1,1-6-.1V34.91H32.12v5.65a6.84,6.84,0,1,1-6,0Z" />
                  </svg>
                  <span className="text-xs text-primary-content font-medium">
                    Purchases
                  </span>
                </div>
              </Link>
            </button>
            <button className="w-full ">
              <Link href="/cart">
                <div className="flex flex-col items-center">
                  <IconCart color="fill-primary-content" />
                  <span className="text-xs text-primary-content font-medium">
                    My Cart
                  </span>
                </div>
              </Link>
            </button>
            <button className="w-full ">
              <Link href="/payment">
                <div className="flex flex-col items-center">
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 1024 1024"
                    className="h-6 w-6 fill-primary-content"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                      fill=""
                    />
                    <path
                      d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                      fill=""
                    />
                    <path
                      d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                      fill=""
                    />
                  </svg>

                  <span className="text-xs text-primary-content font-medium">
                    My Order
                  </span>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
