import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  withTopPadding?: boolean;
  fullHeight?: boolean;
  spacing?: "none" | "sm" | "md" | "lg";
}

/**
 * Standardized page wrapper that provides consistent spacing and prevents content overlap with sticky navigation
 */
export function PageLayout({ 
  children, 
  className, 
  withTopPadding = true,
  fullHeight = true,
  spacing = "none"
}: PageLayoutProps) {
  const spacingClasses = {
    none: "",
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 lg:px-8", 
    lg: "container-padding"
  };

  return (
    <div 
      className={cn(
        // Full height layout
        fullHeight && "min-h-screen",
        // Add top padding to prevent content overlap with sticky header
        withTopPadding && "pt-20", // Increased from header-offset to pt-20 for more spacing
        // Apply consistent spacing if requested
        spacing !== "none" && spacingClasses[spacing],
        // Ensure proper safe area handling on mobile devices
        "safe-area-bottom",
        className
      )}
    >
      {children}
    </div>
  );
}