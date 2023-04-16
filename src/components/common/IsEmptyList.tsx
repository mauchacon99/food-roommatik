import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  title: string;
  text: string;
}

export default function IsEmptyList({ children, title, text }: IProps) {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <div className="text-xl font-bold text-primary-content mb-4">{title}</div>
      <div className="text-md  font-light text-primary-content mb-4">
        {text}
      </div>
      {children}
    </div>
  );
}
