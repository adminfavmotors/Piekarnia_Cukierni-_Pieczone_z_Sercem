import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto w-full max-w-[var(--layout-max-width)] px-4 sm:px-6 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
