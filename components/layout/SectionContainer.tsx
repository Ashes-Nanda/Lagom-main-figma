import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "card";
  as?: "section" | "div" | "article" | "aside";
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

/**
 * Standardized section container with consistent spacing and responsive behavior
 */
export function SectionContainer({ 
  children, 
  className,
  size = "lg",
  spacing = "lg",
  background = "default",
  as: Component = "section",
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SectionContainerProps) {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-none"
  };

  const spacingClasses = {
    none: "py-0",
    sm: "section-spacing-sm",
    md: "section-spacing-md", 
    lg: "section-spacing-lg",
    xl: "section-spacing-xl"
  };

  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    card: "bg-card"
  };

  return (
    <Component 
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "w-full",
        backgroundClasses[background],
        spacingClasses[spacing],
        // Ensure proper focus management for accessibility
        "focus-within:outline-none",
        className
      )}
      {...props}
    >
      <div className={cn(
        "container mx-auto container-padding",
        sizeClasses[size]
      )}>
        {children}
      </div>
    </Component>
  );
}