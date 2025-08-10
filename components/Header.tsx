import { Button } from "./ui/button";
import { Home, Heart, BookOpen, Info, ClipboardCheck, Gamepad2, ShoppingBag, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { ExpandableTabs } from "./ui/expandable-tabs";
import * as React from "react";

const beingLagomLogo = "/lagom-logo.png";

interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export function Header() {
  const navigate = useNavigate();
  
  const navItems: NavigationItem[] = [
    { path: "/", label: "Home" },
    { path: "/directory", label: "Connect with Care" },
    {
      path: "#",
      label: "Wellness",
      children: [
        { path: "/resources", label: "Resources" },
        { path: "/mindfulness", label: "Lagom Lab" },
        { path: "/merchandise", label: "Merchandise" },
      ],
    },
    { path: "/about", label: "About" },
    { path: "/assessment", label: "Assessment" },
  ];

  // ExpandableTabs configuration
  const expandableTabs = [
    { title: "Home", icon: Home },
    { title: "Connect with Care", icon: Heart },
    { type: "separator" as const },
    { title: "Resources", icon: BookOpen },
    { title: "Lagom Lab", icon: Gamepad2 },
    { title: "Merchandise", icon: ShoppingBag },
    { type: "separator" as const },
    { title: "About", icon: Info },
    { title: "Assessment", icon: ClipboardCheck },
  ];

  const handleTabChange = (index: number | null) => {
    if (index === null) return;
    
    const routes = ["/", "/directory", null, "/resources", "/mindfulness", "/merchandise", null, "/about", "/assessment"];
    const route = routes[index];
    
    if (route) {
      navigate(route);
    }
  };

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

          {/* Desktop ExpandableTabs Navigation */}
          <div className="hidden md:flex items-center ml-auto">
            <ExpandableTabs 
              tabs={expandableTabs}
              onChange={handleTabChange}
              className="bg-[#FFFBF5] border-gray-200"
              activeColor="text-primary"
            />
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
