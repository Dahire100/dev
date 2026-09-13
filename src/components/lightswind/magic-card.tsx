import React from "react";
import { cn } from "../lib/utils";

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  ...props
}: MagicCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full flex flex-col h-full justify-between">{children}</div>
    </div>
  );
}

export default MagicCard;
