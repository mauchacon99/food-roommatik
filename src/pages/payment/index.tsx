"use client";
import Container from "@/components/common/Container";
import IconBackArrow from "@/components/common/Icons/IconBackArrow";
import IconClose from "@/components/common/Icons/IconClose";
import Navbar from '@/components/layouts/Navbar';
 


export default function PagePayment() {
 
  return (
    <>
      <div className="modal modal-cash-confirmation" id="my-modal-1">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Payment in Cash</h3>
          <p className="py-4">
            Do you want to add the payment to your account?
          </p>
          <div className="modal-action">
            <a href="#" className="btn ">
              Cancel
            </a>
            <a href="#" className="btn btn-primary">
              Accept
            </a>
          </div>
        </div>
      </div>
      <div className="modal modal-card-credit border-3 border-neutral"
          id="my-modal-2"
            >
              <div className="modal-box">
                <h3 className="font-bold text-xl">Credit Card</h3>
                <div className="py-4">
                  <div className="w-full flex ">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> Name on card</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Luckey Waller"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="w-full flex ">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Card Number</span>
                      </label>
                      <input
                        type="text"
                        placeholder="****  *****   *****"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="w-full flex space-x-1">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> Expire date </span>
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> Security code </span>
                      </label>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <a href="#" className="btn ">
                    Cancel
                  </a>
                  <a href="#" className="btn btn-primary">
                    Add Card Credit
                  </a>
                </div>
              </div>
      </div>
      <Container>
          <Navbar
            iconRight={<IconBackArrow classes="h-12 h-12"/>}
            iconLeft={<IconClose classes="h-5 h-5" color="fill-neutral-content" />}
            titleCenter="Payment Methods"
          />
            <div className="mt-6 flex flex-col">
              <h1 className="text-xl font-medium mb-2">
                Choose a payment method
              
              </h1>
              <p className=" text-base-content text-sm">
                You will be charged until you review this order on next pages.
              </p>
            </div>
            
             
            <div className="flex w-full flex-col space-y-2 p-3">
              {/* Card */}
              <div className="flex w-full shadow-md bg-base-200 rounded-3xl items-center px-3 py-4 border border-primary">
                <div className="flex bg-white rounded-3xl pb-3 px-3">
                  <div className="min-h-16 ">
                    {/* Icons payment card */} {/*Visa */}
                    <div className="h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                      >
                        <path fill="#3C58BF" d="m23.6 41 3.2-18h5l-3.1 18z" />
                        <path fill="#293688" d="m23.6 41 4.1-18h4.1l-3.1 18z" />
                        <path
                          fill="#3C58BF"
                          d="M46.8 23.2c-1-.4-2.6-.8-4.6-.8-5 0-8.6 2.5-8.6 6.1 0 2.7 2.5 4.1 4.5 5 2 .9 2.6 1.5 2.6 2.3 0 1.2-1.6 1.8-3 1.8-2 0-3.1-.3-4.8-1l-.7-.3-.7 4.1c1.2.5 3.4 1 5.7 1 5.3 0 8.8-2.5 8.8-6.3 0-2.1-1.3-3.7-4.3-5-1.8-.9-2.9-1.4-2.9-2.3 0-.8.9-1.6 2.9-1.6 1.7 0 2.9.3 3.8.7l.5.2.8-3.9z"
                        />
                        <path
                          fill="#293688"
                          d="M46.8 23.2c-1-.4-2.6-.8-4.6-.8-5 0-7.7 2.5-7.7 6.1 0 2.7 1.6 4.1 3.6 5 2 .9 2.6 1.5 2.6 2.3 0 1.2-1.6 1.8-3 1.8-2 0-3.1-.3-4.8-1l-.7-.3-.7 4.1c1.2.5 3.4 1 5.7 1 5.3 0 8.8-2.5 8.8-6.3 0-2.1-1.3-3.7-4.3-5-1.8-.9-2.9-1.4-2.9-2.3 0-.8.9-1.6 2.9-1.6 1.7 0 2.9.3 3.8.7l.5.2.8-3.9z"
                        />
                        <path
                          fill="#3C58BF"
                          d="M55.4 23c-1.2 0-2.1.1-2.6 1.3L45.3 41h5.4l1-3h6.4l.6 3h4.8l-4.2-18h-3.9zm-2.3 12c.3-.9 2-5.3 2-5.3s.4-1.1.7-1.8l.3 1.7s1 4.5 1.2 5.5h-4.2V35z"
                        />
                        <path
                          fill="#293688"
                          d="M56.6 23c-1.2 0-2.1.1-2.6 1.3L45.3 41h5.4l1-3h6.4l.6 3h4.8l-4.2-18h-2.7zm-3.5 12c.4-1 2-5.3 2-5.3s.4-1.1.7-1.8l.3 1.7s1 4.5 1.2 5.5h-4.2V35z"
                        />
                        <path
                          fill="#3C58BF"
                          d="m14.4 35.6-.5-2.6c-.9-3-3.8-6.3-7-7.9l4.5 16h5.4l8.1-18h-5.4l-5.1 12.5z"
                        />
                        <path
                          fill="#293688"
                          d="m14.4 35.6-.5-2.6c-.9-3-3.8-6.3-7-7.9l4.5 16h5.4l8.1-18h-4.4l-6.1 12.5z"
                        />
                        <path
                          fill="#FFBC00"
                          d="m.5 23 .9.2c6.4 1.5 10.8 5.3 12.5 9.8l-1.8-8.5c-.3-1.2-1.2-1.5-2.3-1.5H.5z"
                        />
                        <path
                          fill="#F7981D"
                          d="M.5 23c6.4 1.5 11.7 5.4 13.4 9.9l-1.7-7.1c-.3-1.2-1.3-1.9-2.4-1.9L.5 23z"
                        />
                        <path
                          fill="#ED7C00"
                          d="M.5 23c6.4 1.5 11.7 5.4 13.4 9.9L12.7 29c-.3-1.2-.7-2.4-2.1-2.9L.5 23z"
                        />
                        <path
                          fill="#051244"
                          d="M19.4 35 16 31.6l-1.6 3.8-.4-2.5c-.9-3-3.8-6.3-7-7.9l4.5 16h5.4l2.5-6zM28.7 41l-4.3-4.4-.8 4.4h5.1zM40.2 34.8c.4.4.6.7.5 1.1 0 1.2-1.6 1.8-3 1.8-2 0-3.1-.3-4.8-1l-.7-.3-.7 4.1c1.2.5 3.4 1 5.7 1 3.2 0 5.8-.9 7.3-2.5l-4.3-4.2zM46 41h4.7l1-3h6.4l.6 3h4.8l-1.7-7.3-6-5.8.3 1.6s1 4.5 1.2 5.5h-4.2c.4-1 2-5.3 2-5.3s.4-1.1.7-1.8"
                        />
                      </svg>
                    </div>
                    {/* Master Card */}
                    <div className="p-0 h-6 w-8 mt-4 ml-4">
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
                  </div>
                </div>
                <div className=" w-full  items-center px-4 ">
                  <h1 className="font-medium">Mastercard / Visa</h1>
                  <p className="text-xs  text-base-content">1240 5231 *****</p>
                </div>
                <div className="  items-center">
                  <div className=" flex bg-primary z-0 h-8 w-8 items-center justify-center rounded-xl">
                    <a href="#my-modal-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="1rem"
                        height="1rem"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 298 511.93"
                        fill="#FFFFFF"
                      >
                        <path
                          fillRule="nonzero"
                          d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Cash */}
              <div className="flex w-full shadow-md bg-base-200 rounded-3xl items-center px-3 py-4">
                <div className="flex bg-white rounded-3xl pb-3 px-3">
                  <div className="min-h-16 items-center flex justify-center">
                    {" "}
                    <div className="  w-16 items-center flex justify-center">
                      <svg
                        height="50"
                        width="50"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 392.533 392.533"
                        xmlSpace="preserve"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M300.089,153.571H159.741l-10.343,19.329c-9.762,18.295-33.293,26.246-53.075,14.61
    c-12.283-7.37-18.941-20.493-18.36-33.939H33.358c-6.4,0-11.572,5.172-11.572,11.572v166.659c0,6.4,5.172,11.572,11.572,11.572
    h266.731c6.4,0,11.572-5.172,11.572-11.572V165.143C311.725,158.808,306.554,153.571,300.089,153.571z"
                        />
                        <path
                          fill="#56ACE0"
                          d="M264.21,85.628c-3.232,2.909-7.887,3.62-11.895,1.875l-79.644-36.331
    c-11.184-5.107-24.63-0.259-30.061,10.925l-41.374,85.851c-3.62,7.564-1.034,16.614,6.271,20.945
    c8.857,4.913,19.006,1.099,22.626-6.271l27.152-50.554c9.503-17.002,30.707-19.329,44.154-6.594l26.376,26.246h72.469
    c17.002,0,30.966,12.735,33.099,29.22l33.099-33.552l-70.659-70.465L264.21,85.628z"
                        />
                        <path
                          fill="#FFC10D"
                          d="M65.422,175.293c0,12.024-9.762,21.786-21.786,21.786v102.594c12.024,0,21.786,9.762,21.786,21.786
    h202.667c0-12.024,9.762-21.786,21.786-21.786V197.079c-12.024,0-21.786-9.762-21.786-21.786"
                        />
                        <g>
                          <path
                            fill="#194F82"
                            d="M160.517,220.868h31.677c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925
      h-9.762v-3.62c0-6.012-4.848-10.925-10.925-10.925c-6.012,0-10.925,4.848-10.925,10.925v3.62h-0.129
      c-16.614,0-30.061,13.511-30.061,30.061c0,16.614,13.511,30.061,30.061,30.061h12.412c4.59,0,8.275,3.685,8.275,8.275
      c0,4.59-3.685,8.275-8.275,8.275h-31.677c-6.012,0-10.925,4.849-10.925,10.925s4.848,10.925,10.925,10.925h19.329v3.685
      c0,6.012,4.848,10.925,10.925,10.925c6.012,0,10.925-4.848,10.925-10.925v-5.236c11.96-3.943,20.622-15.192,20.622-28.509
      c0-16.614-13.511-30.061-30.061-30.061h-12.412c-4.59,0-8.275-3.685-8.275-8.275C152.242,224.553,155.927,220.868,160.517,220.868z
      "
                          />
                          <path
                            fill="#194F82"
                            d="M262.659,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925
      c6.012,0,10.925-4.848,10.925-10.925v-15.903C273.519,234.38,268.671,229.531,262.659,229.531z"
                          />
                          <path
                            fill="#194F82"
                            d="M70.853,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925
      s10.925-4.848,10.925-10.925v-15.903C81.778,234.38,76.865,229.531,70.853,229.531z"
                          />
                          <path
                            fill="#194F82"
                            d="M389.366,119.632l-85.592-85.527c-4.073-4.073-10.731-4.267-15.063-0.388l-33.939,30.901
      l-73.115-33.293c-21.915-9.956-48.291-0.453-58.699,21.269l-38.141,79.192H33.358C14.998,131.786,0,146.784,0,165.143v166.659
      c0,18.36,14.998,33.358,33.358,33.358h266.731c18.36,0,33.358-14.998,33.358-33.358V191.713l55.855-56.695
      C393.632,130.751,393.568,123.899,389.366,119.632z M311.725,331.866c0,6.4-5.172,11.572-11.572,11.572H33.358
      c-6.4,0-11.572-5.172-11.572-11.572V165.143c0-6.4,5.172-11.572,11.572-11.572H77.77c-0.517,13.446,6.077,26.57,18.36,33.939
      c19.782,11.636,43.378,3.62,53.075-14.61l10.343-19.329h140.477c6.4,0,11.572,5.172,11.572,11.572v166.723H311.725z
      M171.378,131.786l5.107-9.438c2.65-3.62,5.818-4.073,9.503-1.422l10.925,10.796h-25.535V131.786z M333.188,161.006
      c-2.069-16.485-16.097-29.22-33.099-29.22H227.62l-26.376-26.246c-13.446-12.735-34.521-10.537-44.154,6.594l-27.152,50.554
      c-3.62,7.24-13.77,11.184-22.626,6.271c-7.176-4.331-9.891-13.382-6.271-20.945l41.438-85.851
      c5.301-11.119,18.877-15.968,30.061-10.925l79.644,36.331c3.943,1.745,8.663,1.099,11.895-1.875l31.547-28.768l70.659,70.529
      L333.188,161.006z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-full  items-center px-4 ">
                  <h1 className="font-medium">Cash on departure?</h1>
                  <p className="text-xs text-base-content">Pay in Cash</p>
                </div>
                <div className="  items-center">
                  <div className=" flex bg-primary z-0 h-8 w-8 items-center justify-center rounded-xl">
                    <a href="#my-modal-1">
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
                        fill="#FFFFFF"
                      >
                        <path
                          fillRule="nonzero"
                          d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full shadow-md bg-base-200 rounded-3xl items-center px-3 py-4">
                <div id="card-form" />
                <form name="datos">
                    <input type="hidden" id="token"></input>
                    <input type="hidden" id="errorCode"></input>
                </form>
              </div>
            </div>
      </Container>
      <form name="from" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
        <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1"/>
        <input type="hidden" name="Ds_MerchantParameters" value="
								eyJEU19NRVJDSEFOVF9BTU9VTlQiOiAiMTQ1IiwiRFNfTUVSQ0hBTlRfQ1VSUkVOQ1kiOiAiOTc4IiwiRFNfTUVSQ0hBTlRfTUVSQ0hBTlRDT0RFIjogIjk5OTAwODg4MSIsIkRTX01FUkNIQU5UX01FUkNIQU5UVVJMIjogImh0dHA6Ly93d3cucHJ1ZWJhLmNvbS91cmxOb3RpZmljYWNpb24ucGhwIiwiRFNfTUVSQ0hBTlRfT1JERVIiOiAiMTQ0NjA2ODU4MSIsIkRTX01FUkNIQU5UX1RFUk1JTkFMIjogIjEiLCJEU19NRVJDSEFOVF9UUkFOU0FDVElPTlRZUEUiOiAiMCIsIkRTX01FUkNIQU5UX1VSTEtPIjogImh0dHA6Ly93d3cucHJ1ZWJhLmNvbS91cmxLTy5waHAiLCJEU19NRVJDSEFOVF9VUkxPSyI6ICJodHRwOi8vd3d3LnBydWViYS5jb20vdXJsT0sucGhwIn0=
							"/>
        <input type="hidden" name="Ds_Signature" value="PqV2+SF6asdasMjXasKJRTh3UIYya1hmU/igHkzhC+R="/>	
        <input type="hidden" name="Ds_MERCHANT_URLKO" value="PqV2+SF6asdasMjXasKJRTh3UIYya1hmU/igHkzhC+R="/>	
        
        
        
        <button type="submit">submit</button>
      </form>
      <div className="sticky bottom-0 left-0 right-0 z-40 shadow-xl ">
        <div className="flex w-full justify-center bg-base-200 p-2  shadow ">
          <div className=" flex w-full items-center justify-center">
            <div className="flex w-full lg:w-3/6 transition delay-150 duration-300 ease-in-out rounded-full justify-center items-center text-primary-content bg-primary font-medium text-lg h-12 p-1">
              <span className="font-medium  text-lg">
                Confirm and continue{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
