"use client";
import { ReactNode } from "react";

interface IProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  titleCenter?: string;
  iconLeftWithButton?: boolean;
  iconRightWithButton?: boolean;
}

export default function Navbar({
  iconLeft,
  iconRight,
  titleCenter,
  iconLeftWithButton = true,
  iconRightWithButton = true,
}: IProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 mb-5">
      <div className="flex w-full justify-center    ">
        <div className="w-full  flex justify-center">
          <div className="navbar w-full ">
            <div className="navbar-start">
              {iconLeftWithButton ? (
                <button className="btn btn-square btn-ghost">{iconLeft}</button>
              ) : (
                <>{iconLeft}</>
              )}
            </div>
            {titleCenter && (
              <div className="navbar-center ">
                <a className="normal-case   font-medium  text-2xl lg:text-3xl">
                  {titleCenter}
                </a>
              </div>
            )}
            <div className="navbar-end">
              {iconRightWithButton ? (
                <button className="btn btn-square btn-ghost">{iconRight}</button>
              ) : (
                <>{iconRight}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
