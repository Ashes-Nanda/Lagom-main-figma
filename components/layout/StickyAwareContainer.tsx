import { ReactNode, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface StickyAwareContainerProps {
  children: ReactNode;
  className?: string;
  offsetSelector?: string;
  additionalOffset?: number;
  as?: "div" | "main" | "section";
}

/**
 * Container that automatically adjusts its top padding based on sticky navigation height
 * Prevents content overlap with sticky headers and ensures proper spacing
 */
export function StickyAwareContainer({
  children,
  className,
  offsetSelector = "header",
  additionalOffset = 0,
  as: Component = "div"
}: StickyAwareContainerProps) {
  const [topOffset, setTopOffset] = useState(64); // Default header height

  useEffect(() => {
    const updateOffset = () => {
      const stickyElement = document.querySelector(offsetSelector);
      if (stickyElement) {
        const height = stickyElement.getBoundingClientRect().height;
        setTopOffset(height + additionalOffset);
      }
    };

    // Update on mount
    updateOffset();

    // Update on resize
    window.addEventListener('resize', updateOffset);
    
    // Update when DOM changes (for dynamic content)
    const observer = new MutationObserver(updateOffset);
    const targetNode = document.querySelector(offsetSelector);
    if (targetNode) {
      observer.observe(targetNode, { 
        attributes: true, 
        childList: true, 
        subtree: true 
      });
    }

    return () => {
      window.removeEventListener('resize', updateOffset);
      observer.disconnect();
    };
  }, [offsetSelector, additionalOffset]);

  return (
    <Component
      className={cn(
        "w-full",
        className
      )}
      style={{
        paddingTop: `${topOffset}px`
      }}
    >
      {children}
    </Component>
  );
}