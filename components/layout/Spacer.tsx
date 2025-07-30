import { cn } from "../../lib/utils";

interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  direction?: "vertical" | "horizontal" | "both";
  className?: string;
  responsive?: boolean;
  as?: "div" | "span";
}

/**
 * Utility component for consistent spacing between elements
 */
export function Spacer({ 
  size = "md", 
  direction = "vertical",
  className,
  responsive = false,
  as: Component = "div"
}: SpacerProps) {
  const sizeClasses = {
    xs: responsive ? "1 sm:2" : "1",
    sm: responsive ? "2 sm:4" : "2", 
    md: responsive ? "4 sm:6 md:8" : "4",
    lg: responsive ? "6 sm:8 md:12" : "6",
    xl: responsive ? "8 sm:12 md:16" : "8",
    "2xl": responsive ? "12 sm:16 md:20" : "12",
    "3xl": responsive ? "16 sm:20 md:24" : "16",
    "4xl": responsive ? "20 sm:24 md:32" : "20"
  };

  const getDirectionClasses = (sizeValue: string) => {
    const sizes = sizeValue.split(" ");
    return {
      vertical: sizes.map(s => `h-${s}`).join(" "),
      horizontal: sizes.map(s => `w-${s}`).join(" "),
      both: sizes.map(s => `h-${s} w-${s}`).join(" ")
    };
  };

  const directionClasses = getDirectionClasses(sizeClasses[size]);

  return (
    <Component 
      className={cn(
        directionClasses[direction],
        direction === "vertical" && "w-full",
        direction === "horizontal" && "h-full",
        // Ensure spacer doesn't interfere with screen readers
        "select-none pointer-events-none",
        className
      )}
      aria-hidden="true"
      role="presentation"
    />
  );
}