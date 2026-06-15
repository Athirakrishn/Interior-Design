import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Phone, Mail, MapPin, Send } from 'lucide-react'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const socialLinks = [
    { 
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      href: '#', 
      label: 'Instagram' 
    },
    { 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ), 
      href: '#', 
      label: 'Facebook' 
    },
    { 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      href: '#', 
      label: 'LinkedIn' 
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      href: '#',
      label: 'Twitter'
    }
  ]

  return (
    <footer className="bg-brand-950 text-purple-100/80 border-t border-brand-900 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand Block */}
        <div className="space-y-6">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-tr from-brand-500 to-accent-500 rounded-lg shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Luxe<span className="text-accent-400 font-light">Space</span>
            </span>
          </a>
          <p className="text-sm leading-relaxed text-purple-200/60">
            Designing bespoke interior solutions that seamlessly combine contemporary aesthetic brilliance with warm, residential utility.
          </p>
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-900/60 border border-brand-800 text-purple-300 hover:text-white hover:border-accent-500 hover:bg-gradient-to-tr hover:from-brand-600 hover:to-accent-500 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5 md:pl-8">
          <h3 className="font-display font-semibold text-white tracking-wider text-sm uppercase">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-accent-400 transition-colors duration-300 block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="font-display font-semibold text-white tracking-wider text-sm uppercase">The Studio</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
              <span className="text-purple-200/70">104 Ocean Drive, Design District, Los Angeles, CA 90025</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent-500 shrink-0" />
              <span className="text-purple-200/70">+1 (310) 555-0199</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent-500 shrink-0" />
              <span className="text-purple-200/70">studio@luxespace.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-5">
          <h3 className="font-display font-semibold text-white tracking-wider text-sm uppercase">Newsletter</h3>
          <p className="text-sm text-purple-200/60 leading-relaxed">
            Subscribe to receive our latest interior trend forecasts and portfolio releases.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-brand-900/40 border border-brand-800 text-white placeholder-purple-300/40 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300 pr-10"
              />
              <button
                type="submit"
                className="absolute right-2 text-purple-300 hover:text-accent-400 p-1.5 transition-colors duration-200"
                aria-label="Submit"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
          {subscribed && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent-400 text-xs font-semibold"
            >
              Thank you! You've successfully subscribed.
            </motion.div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-purple-300/40 space-y-4 md:space-y-0 relative z-10">
        <p>&copy; {new Date().getFullYear()} LuxeSpace Interiors. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-purple-100 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-100 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
