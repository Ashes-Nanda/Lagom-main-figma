import {
  Home,
  Heart,
  BookOpen,
  Info,
  ClipboardCheck,
  Gamepad2,
  ShoppingBag,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { ExpandableTabs } from "./ui/expandable-tabs";

const beingLagomLogo = "/Logo.png";

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

    const routes = [
      "/",
      "/directory",
      null,
      "/resources",
      "/mindfulness",
      "/merchandise",
      null,
      "/about",
      "/assessment",
    ];
    const route = routes[index];

    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full text-black">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32 lg:h-36 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={beingLagomLogo}
                alt="Being.Lagom"
                className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 transition-transform hover:scale-105"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop ExpandableTabs Navigation */}
          <div className="hidden md:flex items-center ml-auto">
            <ExpandableTabs
              tabs={expandableTabs}
              onChange={handleTabChange}
              className="bg-transparent border-transparent"
              activeColor="text-primary"
            />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex-1 flex justify-end mr-2">
            <MobileNavigation items={navItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
