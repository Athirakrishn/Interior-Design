import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const location = useLocation()
  const isHome = location.pathname === '/'

  // Nav items: route-based for /about, anchor-based for all homepage sections
  const navLinks = [
    { name: 'Home',         href: '/',            isRoute: true  },
    { name: 'About',        href: '/about',        isRoute: true  },
    { name: 'Services',     href: '/#services',    isRoute: false },
    { name: 'Portfolio',    href: '/#portfolio',   isRoute: false },
    { name: 'Testimonials', href: '/#testimonials',isRoute: false },
    { name: 'Contact',      href: '/#contact',     isRoute: false },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-purple-100 py-3 shadow-md'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-brand-600 to-accent-500 rounded-xl shadow-md group-hover:rotate-6 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
            Luxe<span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Space</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="font-sans text-sm font-medium tracking-wide text-slate-600 hover:text-brand-600 transition-colors duration-300 relative py-1.5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-slate-600 hover:text-brand-600 transition-colors duration-300 relative py-1.5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-full" />
              </a>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 text-xs font-sans font-bold tracking-widest uppercase bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-700 hover:to-accent-600 text-white transition-all duration-300 rounded-full shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 hover:-translate-y-0.5 block transform"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-800 focus:outline-none hover:text-brand-600 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-sans text-base font-semibold tracking-wide text-slate-700 hover:text-brand-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-sans text-base font-semibold tracking-wide text-slate-700 hover:text-brand-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-3.5 text-xs font-sans font-bold tracking-widest uppercase bg-gradient-to-r from-brand-600 to-accent-500 text-white rounded-full shadow-lg shadow-brand-500/15"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
