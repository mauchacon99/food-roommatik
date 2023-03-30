import type { ReactNode } from "react";

export default function ContainerProducts({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid   md:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
      {children}
    </div>
  );
}
