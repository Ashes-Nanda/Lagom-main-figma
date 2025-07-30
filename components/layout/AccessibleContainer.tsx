import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AccessibleContainerProps {
  children: ReactNode;
  className?: string;
  touchTargets?: boolean;
  focusManagement?: boolean;
  spacing?: "compact" | "comfortable" | "spacious";
  interactive?: boolean;
  as?: "div" | "section" | "article" | "nav" | "main";
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

/**
 * Container that ensures accessibility compliance with proper touch targets,
 * focus management, and WCAG-compliant spacing
 */
export function AccessibleContainer({
  children,
  className,
  touchTargets = false,
  focusManagement = true,
  spacing = "comfortable",
  interactive = false,
  as: Component = "div",
  role,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  ...props
}: AccessibleContainerProps) {
  const spacingClasses = {
    compact: "space-y-2 [&>*]:p-2",
    comfortable: "space-y-4 [&>*]:p-4", 
    spacious: "space-y-6 [&>*]:p-6"
  };

  return (
    <Component
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className={cn(
        // Base container styles
        "w-full",
        
        // Apply spacing based on preference
        spacingClasses[spacing],
        
        // Ensure touch targets meet accessibility requirements
        touchTargets && "[&_button]:touch-target [&_a]:touch-target [&_[role=button]]:touch-target",
        
        // Focus management for keyboard navigation
        focusManagement && [
          "focus-within:outline-none",
          "[&_:focus-visible]:focus-ring"
        ],
        
        // Interactive container styles
        interactive && [
          "cursor-pointer",
          "transition-colors duration-200",
          "hover:bg-muted/50",
          "focus-visible:bg-muted/50"
        ],
        
        // Ensure proper spacing for interactive elements
        "[&_button+button]:ml-2",
        "[&_a+a]:ml-2",
        
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}