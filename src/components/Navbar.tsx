import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [trackDialogOpen, setTrackDialogOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTrackOrder = () => {
    if (trackingNumber.trim()) {
      window.open(
        `https://core.fulflit.com/tracking?tracking_number=${encodeURIComponent(trackingNumber.trim())}`,
        "_blank"
      );
      setTrackDialogOpen(false);
      setTrackingNumber("");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Platform", href: "#platform" },
    { 
      name: "Services", 
      href: "#services",
      submenu: [
        { name: "Warehousing", href: "#warehousing" },
        { name: "Bulk Shipping", href: "#shipping" },
        { name: "COD Services", href: "#cod" },
      ]
    },
    { name: "Why Choose Us", href: "#why-us" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border" 
            : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                fulflit.
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm"
                    onMouseEnter={() => link.submenu && setSolutionsOpen(true)}
                    onMouseLeave={() => link.submenu && setSolutionsOpen(false)}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {link.submenu && (
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                          onMouseEnter={() => setSolutionsOpen(true)}
                          onMouseLeave={() => setSolutionsOpen(false)}
                        >
                          {link.submenu.map((sublink) => (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="default"
                onClick={() => setTrackDialogOpen(true)}
              >
                Track Order
              </Button>
              <Button 
                variant="hero" 
                size="default"
                onClick={() => window.open("https://core.fulflit.com/customer/register", "_blank")}
              >
                Sign up Here!
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-border bg-background"
              >
                <div className="py-4 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={() => {
                        setIsOpen(false);
                        setTrackDialogOpen(true);
                      }}
                    >
                      Track Order
                    </Button>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open("https://core.fulflit.com/customer/register", "_blank")}
                    >
                      Sign up Here!
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Track Order Dialog */}
      <Dialog open={trackDialogOpen} onOpenChange={setTrackDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Track Your Order
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Input
              placeholder="Please enter your tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrackOrder()}
              className="h-12 text-center border-2 border-border rounded-lg focus:border-primary"
            />
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleTrackOrder}
              className="w-full"
            >
              Track Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
