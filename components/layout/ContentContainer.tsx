import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "tight" | "normal" | "relaxed" | "loose";
  centerContent?: boolean;
  preventOverflow?: boolean;
  as?: "div" | "main" | "article" | "section";
}

/**
 * Content container that ensures proper spacing, prevents overflow, and maintains readability
 * Specifically designed to address content overlap and spacing consistency requirements
 */
export function ContentContainer({
  children,
  className,
  size = "lg",
  spacing = "normal",
  centerContent = false,
  preventOverflow = true,
  as: Component = "div"
}: ContentContainerProps) {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl", 
    xl: "max-w-7xl",
    full: "max-w-none"
  };

  const spacingClasses = {
    tight: "space-y-4",
    normal: "space-y-6 md:space-y-8",
    relaxed: "space-y-8 md:space-y-12",
    loose: "space-y-12 md:space-y-16"
  };

  return (
    <Component
      className={cn(
        // Base container styles
        "w-full",
        sizeClasses[size],
        
        // Spacing between child elements
        spacingClasses[spacing],
        
        // Center content if requested
        centerContent && "mx-auto",
        
        // Prevent horizontal overflow
        preventOverflow && "overflow-x-hidden",
        
        // Consistent horizontal padding
        "container-padding",
        
        // Ensure proper focus management
        "focus-within:outline-none",
        
        className
      )}
    >
      {children}
    </Component>
  );
}