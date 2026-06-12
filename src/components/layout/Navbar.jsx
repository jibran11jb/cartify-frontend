import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, ChevronDown, Zap } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { label: 'Features', href: '/features', hasDropdown: true },
  { label: 'Solutions', href: '/solutions', hasDropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources', hasDropdown: true },
  { label: 'Templates', href: '/templates' },
  { label: 'Enterprise', href: '/enterprise' },
]

const featuresMenu = [
  { label: 'Store Builder', desc: 'Visual drag & drop builder', icon: '🏗️' },
  { label: 'Product Management', desc: 'Manage your inventory', icon: '📦' },
  { label: 'Analytics', desc: 'Deep business insights', icon: '📊' },
  { label: 'Marketing Tools', desc: 'Grow your audience', icon: '📢' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const isDashboard = location.pathname.startsWith('/dashboard')
  if (isDashboard) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-white/90 dark:bg-dark/95 backdrop-blur-xl shadow-md border-b border-gray-200/50 dark:border-white/5'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              <Zap size={18} className="text-dark fill-dark" />
            </div>
            <span className="text-xl font-bold font-display text-gray-900 dark:text-white">
              Carti<span className="text-primary">fy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg text-sm ${
                    scrolled
                      ? 'text-gray-700 dark:text-gray-300'
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 glass-card-light dark:glass-card p-2 shadow-card-hover"
                    >
                      {featuresMenu.map(item => (
                        <Link
                          key={item.label}
                          to="#"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.label}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={18} className="text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={18} className="text-gray-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              to="/login"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-3 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10">
              {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gray-200/50 dark:border-white/5 bg-white/95 dark:bg-dark/98 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 font-medium transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <Link to="/login" className="btn-outline w-full text-center">Login</Link>
                <Link to="/signup" className="btn-primary w-full text-center">Start Free Trial</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
