import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileNavigation } from "./navigation/MobileNavigation";
import * as React from "react";

const beingLagomLogo = "/lagom-logo.png";

interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export function Header() {
  const navItems: NavigationItem[] = [
    { path: "/", label: "Home" },
    { path: "/directory", label: "Directory" },
    {
      path: "#",
      label: "Wellness",
      children: [
        { path: "/resources", label: "Resources" },
        { path: "/mindfulness", label: "Mindfulness" },
        { path: "/merchandise", label: "Merchandise" }
      ]
    },
    { path: "/about", label: "About" },
    { path: "/assessment", label: "Assessment" },
    { path: "/contact", label: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuButtonRef = React.useRef(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFBF5] text-black">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={beingLagomLogo}
                alt="Being.Lagom"
                className="h-10 w-auto sm:h-12 transition-transform hover:scale-105"
              />
              <span className="font-bold text-lg hidden lg:block">
                Being.Lagom
              </span>
            </Link>
          </div>

          {/* Desktop Hamburger Menu (now on the far right) */}
          <div className="hidden md:flex items-center ml-auto relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-black"
              onClick={() => setMenuOpen((open) => !open)}
              ref={menuButtonRef}
              aria-label="Open menu"
            >
              <Menu className="w-9 h-9" />
            </Button>
            {menuOpen && (
              <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded shadow-lg border border-gray-200 z-50">
                <ul className="py-2">
                  {navItems.map((item) =>
                    item.children ? (
                      <React.Fragment key={item.label}>
                        <li className="px-4 py-2 font-semibold text-xs uppercase text-gray-500">{item.label}</li>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.path}
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </React.Fragment>
                    ) : (
                      <li key={item.label}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex-1 flex justify-end mr-2">
            <MobileNavigation items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
