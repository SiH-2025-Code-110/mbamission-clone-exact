import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Who We Are", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "AccelerateTrack", badge: "NEW" },
  { label: "Free Guides", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <a href="/" className="flex items-center gap-1">
          <span className="font-heading text-xl lg:text-2xl font-bold tracking-tight">
            <span className="text-secondary">admit</span>
            <span className="text-primary">Pro.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href="#" className="nav-link flex items-center gap-1">
              {item.label}
              {item.badge && (
                <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-1">
                  {item.badge}
                </span>
              )}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
          <Button variant="hero" size="sm">
            Free Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href="#" className="block nav-link py-2">
              {item.label}
              {item.badge && (
                <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-2">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full">
            Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
