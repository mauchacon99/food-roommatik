import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function Container({ children }: IProps) {
  return (
    <div className="flex w-full lg:justify-center lg:items-center">
      <div className=" min-h-screen p-2 m-2 lg:w-3/6 w-full">{children}</div>
    </div>
  );
}
