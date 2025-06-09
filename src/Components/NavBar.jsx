import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // منع تمرير الصفحة عند فتح المينيو
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isMenuOpen]);

  const handleLinkClick = (to) => {
    setIsMenuOpen(false);
    const element = document.getElementById(to);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
    )}>
      <div className="container flex items-center justify-between px-4">
        {/* Logo */}
        <span
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer text-xl font-bold text-primary flex items-center select-none"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ammar Brakat</span> Portfolio
          </span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => handleLinkClick(item.href.substring(1))}
              className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Menu button (mobile) */}
        <button
          className="md:hidden p-2 text-foreground z-[10001]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div className={cn(
          "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg z-[10000] flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, index) => (
              <span
                key={index}
                onClick={() => handleLinkClick(item.href.substring(1))}
                className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
