import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  minItemWidth?: string;
  autoFit?: boolean;
  role?: string;
  "aria-label"?: string;
}

/**
 * Responsive grid container with consistent spacing and alignment
 */
export function GridContainer({ 
  children, 
  className,
  columns = { default: 1, md: 2, lg: 3 },
  gap = "md",
  align = "stretch",
  justify = "start",
  minItemWidth,
  autoFit = false,
  role,
  "aria-label": ariaLabel,
  ...props
}: GridContainerProps) {
  const gapClasses = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6", 
    lg: "gap-8",
    xl: "gap-12"
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center", 
    end: "items-end",
    stretch: "items-stretch"
  };

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end", 
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  };

  // Build responsive grid classes
  const gridClasses = [];
  
  if (autoFit && minItemWidth) {
    // Use CSS Grid auto-fit for truly responsive grids
    gridClasses.push(`grid-cols-[repeat(auto-fit,minmax(${minItemWidth},1fr))]`);
  } else {
    // Use traditional responsive breakpoints
    if (columns.default) {
      gridClasses.push(`grid-cols-${columns.default}`);
    }
    if (columns.sm) {
      gridClasses.push(`sm:grid-cols-${columns.sm}`);
    }
    if (columns.md) {
      gridClasses.push(`md:grid-cols-${columns.md}`);
    }
    if (columns.lg) {
      gridClasses.push(`lg:grid-cols-${columns.lg}`);
    }
    if (columns.xl) {
      gridClasses.push(`xl:grid-cols-${columns.xl}`);
    }
  }

  return (
    <div 
      role={role}
      aria-label={ariaLabel}
      className={cn(
        "grid",
        ...gridClasses,
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        // Ensure grid items have proper spacing for touch targets
        "[&>*]:touch-target-comfortable",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}