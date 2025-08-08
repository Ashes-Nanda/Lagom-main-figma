import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
    contact?: React.ReactNode;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-8 lg:pb-8 lg:pt-12 bg-[#0BB8C6] text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2 text-black"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold text-xl text-black">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label} rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-black/20 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[1/4]">
            <ul className="list-none flex flex-col space-y-2 text-sm">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-black/80 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/7]">
            <ul className="list-none flex flex-col space-y-2 text-sm">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-black/70 underline-offset-4 hover:underline hover:text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-black/70 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[7/11] flex flex-col gap-2">
            <div className="text-black">{copyright.text}</div>
            {copyright.license && <div className="text-black">{copyright.license}</div>}
            {copyright.contact && <div className="flex items-center space-x-2 text-black">{copyright.contact}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Usage example for Being.Lagom content
export function BeingLagomFooter() {
  return (
    <Footer
      logo={<img src="/lagom-logo.png" alt="Being.Lagom" className="h-10 w-auto brightness-0 opacity-90 hover:opacity-100 transition-opacity" />}
      brandName="Being.Lagom"
      socialLinks={[
        { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/being.lagom", label: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/being_lagom", label: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/being.lagom", label: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/being-lagom", label: "LinkedIn" },
        { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/being.lagom", label: "YouTube" },
      ]}
      mainLinks={[
        { href: "/directory", label: "Connect with Care" },
        { href: "/resources", label: "Self-Help Resources" },
        { href: "/assessment", label: "Assessment Tool" },
        { href: "/contact", label: "Crisis Support" },
        { href: "/contact", label: "Contact Us" },
        { href: "/about", label: "About Us" },
        { href: "/faq", label: "FAQ" },
      ]}
      legalLinks={[
        { href: "/compliance", label: "Compliance & Legal" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/cookie-policy", label: "Cookie Policy" },
      ]}
      copyright={{
        text: "© 2025 Being.Lagom.",
        license: "All rights reserved.",
        contact: <><Mail className="w-4 h-4 text-black/80" /><span className="text-sm text-black/80">support@being.lagom</span></>,
      }}
    />
  );
}