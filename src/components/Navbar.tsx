import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About Us", hasDropdown: false, href: "/", badge: undefined },
  { label: "Services", hasDropdown: false, href: "/services", badge: undefined },
  { label: "Our Team", hasDropdown: false, href: "/", badge: undefined },
  { label: "Success Stories", hasDropdown: false, href: "/", badge: undefined },
  { label: "Contact", hasDropdown: false, href: "/", badge: undefined },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  return (
    <motion.nav 
      className="bg-background sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <motion.a 
          href="/" 
          className="flex items-center gap-1"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1 }}
        >
          <span className="font-heading text-xl lg:text-2xl font-bold tracking-tight">
              <span className="text-black">Beyond</span>
              <span className="text-red-600">Bridge</span>
              <span className="text-red-400">.</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.a 
              key={item.label} 
              href={item.href} 
              className="nav-link flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
            >
              {item.label}
              {item.badge && (
                <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-1">
                  {item.badge}
                </span>
              )}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </motion.a>
          ))}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <Button variant="hero" size="sm" className="btn-animate hover-lift">
              Consult Now
            </Button>
          </motion.div> */}
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="lg:hidden bg-background border-t px-4 pb-4 space-y-3 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navItems.map((item) => (
              <motion.a 
                key={item.label} 
                href={item.href} 
                className="block nav-link py-2 hover-scale"
                variants={mobileItemVariants}
                whileHover={{ x: 10 }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {item.badge && (
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-2">
                    {item.badge}
                  </span>
                )}
              </motion.a>
            ))}
            <motion.div variants={mobileItemVariants}>
              <Button variant="hero" size="sm" className="w-full btn-animate">
                Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
