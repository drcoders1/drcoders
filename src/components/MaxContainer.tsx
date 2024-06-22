import { cn } from "@/lib/utils";
import React from "react";
import type { ReactNode } from "react";

const MaxContainer = ({
  className,
  children,
  id,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-screen-xl bg-transparent px-3 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxContainer;
