import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const beingLagomLogo = "/lagom-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Mission */}
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img 
                  src={beingLagomLogo} 
                  alt="Being.Lagom" 
                  className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Being.Lagom is a vital online sanctuary for healthcare professionals 
                seeking mental health support and community. Your lifeline, lantern, 
                and long-term movement.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://facebook.com/being.lagom" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://twitter.com/being_lagom" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://instagram.com/being.lagom" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://linkedin.com/company/being-lagom" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://youtube.com/being.lagom" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/directory" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Find a Therapist
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Self-Help Resources
                  </Link>
                </li>
                <li>
                  <Link to="/directory" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Wellness Events
                  </Link>
                </li>
                <li>
                  <Link to="/assessment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Assessment Tool
                  </Link>
                </li>
                <li>
                  <Link to="/mindfulness" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Mindfulness Games
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Crisis Support
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="https://forms.gle/Guidelines456" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-primary-foreground/80">
                © 2025 Being.Lagom. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="https://forms.gle/PrivacyPolicy789" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="https://forms.gle/Terms012" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="https://forms.gle/Cookies345" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Mail className="w-4 h-4 text-primary-foreground/80" />
              <span className="text-sm text-primary-foreground/80">
                support@being.lagom
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}