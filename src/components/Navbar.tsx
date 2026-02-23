import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <a href="#hero" className="flex-shrink-0">
          <img src="/images/logo.png" alt="Austin Elite Smiles" className="h-14 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:5128663800" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (512) 866-3800
          </a>
          <Button asChild className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-6">
            <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Schedule Online</a>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border/50 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-3 space-y-2">
            <a href="tel:5128663800" className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="w-4 h-4" /> (512) 866-3800
            </a>
            <Button asChild className="w-full bg-primary hover:bg-teal-dark rounded-full">
              <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Schedule Online</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
