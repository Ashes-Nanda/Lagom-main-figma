import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationDropdown } from "./navigation/NavigationDropdown";
import { MobileNavigation } from "./navigation/MobileNavigation";

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

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
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
              <span className="font-bold text-lg text-primary hidden lg:block">
                Being.Lagom
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-2 sm:mx-4">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
              {navItems.map((item) => (
                <NavigationDropdown
                  key={item.label}
                  item={item}
                />
              ))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex-1 flex justify-end mr-2">
            <MobileNavigation items={navItems} />
          </div>

          {/* Crisis Support Button */}
          <div className="flex flex-shrink-0 ml-2">
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive text-xs sm:text-sm px-2 sm:px-3 whitespace-nowrap"
              >
                <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden md:inline">Crisis Support</span>
                <span className="md:hidden">Crisis</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
