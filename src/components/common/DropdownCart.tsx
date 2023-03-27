import type { ReactNode } from "react";
import IconCart from "./Icons/IconCart";

export default function DropdownCart() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-square btn-ghost m-1">
        {" "}
        <IconCart />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
