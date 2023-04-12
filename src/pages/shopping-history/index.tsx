import Link from "next/link";
import Container from "@/components/common/Container";
import IconBackArrow from "@/components/common/Icons/IconBackArrow";
import BottomNavbar from "@/components/layouts/BottomNavbar";
import Navbar from "@/components/layouts/Navbar";

/**
 * Pages checkout purchase.
 *
 * @returns This pages.
 */
export default function PageCheckout() {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal p-5">
        <div className="modal-box min-h-screen  max-w-5xl">
          <div>
            <h1 className="font-bold my-3 text-lg "> Bill payment</h1>
            <h1 className="font-semibold my-3 text-base text-content-accent">
              {" "}
              Nro. Bill #2342443
            </h1>
            <div className="w-full h-full flex flex-col items-between border-y my-3 py-3">
              <div className="flex justify-between w-full mb-3">
                <div className="flex-1">
                  <div>Arroz con Huevo</div>
                  <div className="text-xs justify-text">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                  </div>
                </div>

                <div>19.3 $</div>
              </div>
              <div className="flex justify-between w-full mb-3">
                <div>Arroz con Huevo</div>
                <div>19.3 $</div>
              </div>
              <div className="flex justify-between w-full mb-3">
                <div>Arroz con Huevo</div>
                <div>19.3 $</div>
              </div>
              <div className="flex justify-between w-full mb-3">
                <div>Arroz con Huevo</div>
                <div>19.3 $</div>
              </div>
              <div className="flex justify-between w-full mb-3">
                <div>Arroz con Huevo</div>
                <div>19.3 $</div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-between ">
              <div className="flex justify-between w-full mb-3">
                <div> 21/02/2021</div>
              </div>
              <div className="flex justify-between w-full mb-3">
                <div>Method Payment</div>
                <div> Cash</div>
              </div>
              <div className="flex justify-between w-full mb-3">
                <div>Total</div>
                <div>19.3 $</div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn btn-primary"> Download pdf</button>
            <label htmlFor="my-modal" className="btn btn-accent">
              Cerrar
            </label>
          </div>
        </div>
      </div>
      <Container>
        <Navbar
          iconLeft={
            <Link href={"/"}>
              <IconBackArrow classes="h-12 h-12" />
            </Link>
          }
          titleCenter="Shopping history"
        />
        <div className="flex w-full flex-col">
          <div className="rounded-lg bg-base-200 h-full px-4 pt-4 mb-3 pb-2">
            <div className="flex w-full justify-center items-center mt-4 ">
              <div className="flex w-full items-center flex-col">
                <div className="">
                  {" "}
                  <span className="text-xs font-bold"> $</span>{" "}
                  <span className="text-4xl ">69.78 </span>{" "}
                </div>
                <div className="text-lg font-medium">Pending debt</div>
              </div>
            </div>
            <div className="w-full flex justify-between mt-2">
              <div className="text-xs">Limited credit</div>
              <div className="text-xs font-medium">$145</div>
            </div>
            <div className="w-full flex justify-between">
              <div className="text-xs">Leftover</div>
              <div className="text-xs font-medium">$45</div>
            </div>
          </div>
          <div className="w-full">
            {/* <div className="overflow-x-auto w-full"> */}
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Payment</th>
                  <th>Status Pay </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">#123443</div>
                        <span className="flex justify-center w-full text-xs  rounded-full opacity-50 bg-success text-success-content px-2">
                          Completed
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div>Cash</div>$ 19.00
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="w-full justify-between flex space-x-2">
                      <div>
                        <span className="flex justify-center  rounded-full opacity-50 bg-warning text-warning-content text-xs px-2">
                          Pending
                        </span>
                        <span className="text-xs">11/01/2023</span>
                      </div>
                      <div className="flex items-center ">
                        <label htmlFor="my-modal">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            width="2rem"
                            height="1rem"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            imageRendering="optimizeQuality"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            viewBox="0 0 298 511.93"
                            className="fill-primary"
                          >
                            <path
                              fillRule="nonzero"
                              d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">#34343</div>
                        <span className="flex justify-center w-full  rounded-full opacity-50 bg-error text-error-content text-xs px-2">
                          Reject
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="flex items-center space-x-3">
                      <div>
                        <div>Visa</div>$ 19.00
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="w-full justify-between flex space-x-2">
                      <div>
                        <span className="flex justify-center   rounded-full opacity-50 bg-error text-error-content text-xs">
                          Fail
                        </span>
                        <span className="text-xs">11/01/2023</span>
                      </div>
                      <div className="flex items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          width="2rem"
                          height="1rem"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
                          imageRendering="optimizeQuality"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          viewBox="0 0 298 511.93"
                          className="fill-primary"
                        >
                          <path
                            fillRule="nonzero"
                            d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">#34343</div>
                        <span className="flex justify-center w-full  rounded-full opacity-50 bg-info text-info-content text-xs px-2">
                          Await
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div>Master Card</div>$ 19.00
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="w-full justify-between flex space-x-2">
                      <div>
                        <span className="flex justify-center   rounded-full opacity-50 bg-success text-success-content text-xs">
                          Pay
                        </span>
                        <span className="text-xs">11/01/2023</span>
                      </div>
                      <div className="flex items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          width="2rem"
                          height="1rem"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
                          imageRendering="optimizeQuality"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          viewBox="0 0 298 511.93"
                          className="fill-primary"
                        >
                          <path
                            fillRule="nonzero"
                            d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th> Order</th>
                  <th>Payment</th>
                  <th>Status Pay </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </Container>
      <BottomNavbar />
    </>
  );
}
