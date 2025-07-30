import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

interface NavigationDropdownProps {
  item: NavigationItem;
  className?: string;
}

export function NavigationDropdown({ item, className }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.children?.some(child => location.pathname === child.path) || location.pathname === item.path;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!hasChildren) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        setFocusedIndex(-1);
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < (item.children?.length || 0) - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : (item.children?.length || 0) - 1
          );
        }
        break;
    }
  };

  const handleButtonClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  if (!hasChildren) {
    return (
      <Link
        to={item.path}
        className={cn(
          "transition-colors whitespace-nowrap px-2 py-1 rounded-md text-xs sm:text-sm md:text-base",
          isActive
            ? "text-accent font-medium bg-accent/10"
            : "text-foreground hover:text-accent hover:bg-accent/5",
          className
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div 
      ref={dropdownRef}
      className={cn("relative", className)}
    >
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex items-center gap-1 transition-colors whitespace-nowrap px-2 py-1 rounded-md text-xs sm:text-sm md:text-base",
          isActive
            ? "text-accent font-medium bg-accent/10"
            : "text-foreground hover:text-accent hover:bg-accent/5"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown 
          className={cn(
            "w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[160px] bg-background border border-border rounded-md shadow-lg z-50 py-1">
          {item.children?.map((child, index) => (
            <Link
              key={child.path}
              to={child.path}
              onClick={handleItemClick}
              className={cn(
                "block px-3 py-2 text-sm transition-colors",
                location.pathname === child.path
                  ? "text-accent font-medium bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5",
                focusedIndex === index && "bg-accent/5"
              )}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}