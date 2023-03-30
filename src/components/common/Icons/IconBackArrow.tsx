import Link from "next/link";

interface IProps {
  classes?: string;
  color?: string;
}
export default function IconBackArrow({
  classes = " h-2 w-2",
  color = "fill-primary",
}: IProps) {
  return (
    <>
        <svg
          className={`${classes}${color}`}
          style={{
            verticalAlign: "middle",
            fill: "currentColor",
            overflow: "hidden",
          }}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* eslint-disable-next-line max-len */}
          <path d="M608 736c-6.4 0-19.2 0-25.6-6.4l-192-192C384 524.8 384 499.2 390.4 486.4l192-192c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L460.8 512l166.4 166.4c12.8 12.8 12.8 32 0 44.8C627.2 736 614.4 736 608 736z" />
        </svg>
      
    </>
  );
}
