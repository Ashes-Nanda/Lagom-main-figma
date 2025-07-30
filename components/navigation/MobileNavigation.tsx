import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

interface MobileNavigationProps {
  items: NavigationItem[];
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedItems(new Set());
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const isActive = (path: string) => location.pathname === path;
  const hasActiveChild = (item: NavigationItem) => 
    item.children?.some(child => location.pathname === child.path);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-background border-t border-border overflow-y-auto">
            <nav className="p-4">
              <div className="space-y-2">
                {items.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedItems.has(item.label);
                  const itemIsActive = isActive(item.path) || hasActiveChild(item);

                  return (
                    <div key={item.label}>
                      {hasChildren ? (
                        <button
                          onClick={() => toggleExpanded(item.label)}
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-2 text-left rounded-md transition-colors",
                            itemIsActive
                              ? "text-accent font-medium bg-accent/10"
                              : "text-foreground hover:text-accent hover:bg-accent/5"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown 
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              isExpanded && "rotate-180"
                            )} 
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className={cn(
                            "block px-3 py-2 rounded-md transition-colors",
                            itemIsActive
                              ? "text-accent font-medium bg-accent/10"
                              : "text-foreground hover:text-accent hover:bg-accent/5"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Submenu items */}
                      {hasChildren && isExpanded && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-md transition-colors",
                                isActive(child.path)
                                  ? "text-accent font-medium bg-accent/10"
                                  : "text-foreground hover:text-accent hover:bg-accent/5"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}