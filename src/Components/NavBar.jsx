import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // منع تمرير الصفحة لما القائمة مفتوحة
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // دالة لعمل scroll يدوي للعنصر مع تعويض offset، وتعامل مع عدم وجود العنصر
  const handleLinkClick = (to) => {
    setIsMenuOpen(false)
    const element = document.getElementById(to)
    if (element) {
      const yOffset = -70 // تعويض ارتفاع الـ Navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    } else {
      // لو العنصر مش موجود (مثلاً في صفحة أخرى)، نرجع لفوق الصفحة
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70 // تعويض ارتفاع الـ Navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
      <div className='container flex items-center justify-between '>
        <span
          onClick={() => scrollToSection('hero')}
          className='cursor-pointer text-xl font-bold text-primary flex items-center select-none'
        >
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>
              Ammar Brakat
            </span>
            {" "} Portfolio
          </span>
        </span>

        {/* desktop nav */}
        <div className='hidden md:flex space-x-8'>
          {navItems.map((e, index) => (
            <span
              key={index}
              onClick={() => handleLinkClick(e.href.substring(1))}
              className='cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300'
            >
              {e.name}
            </span>
          ))}
        </div>

        {/* phone nav button */}
        <button
          className='md:hidden p-2 text-foreground z-50'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* phone nav menu */}
        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center overflow-auto",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className='flex flex-col space-y-8 text-xl'>
            {navItems.map((e, index) => (
              <span
                key={index}
                onClick={() => handleLinkClick(e.href.substring(1))}
                className='cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300'
              >
                {e.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
