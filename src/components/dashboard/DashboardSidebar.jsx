import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Package, ShoppingCart, Users, BarChart3,
  Settings, Store, Zap, ChevronLeft, ChevronRight, Bell,
  Search, Moon, Sun, LogOut, HelpCircle
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Store Builder', icon: Store, href: '/dashboard/builder' },
  { label: 'Products', icon: Package, href: '/dashboard/products' },
  { label: 'Orders', icon: ShoppingCart, href: '/dashboard/orders' },
  { label: 'Customers', icon: Users, href: '/dashboard/customers' },
  { label: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
]

export default function DashboardSidebar({ collapsed, onToggle }) {
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative flex flex-col h-screen bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-border overflow-hidden flex-shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-200 dark:border-dark-border">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow">
          <Zap size={18} className="text-dark fill-dark" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-lg font-bold font-display text-gray-900 dark:text-white whitespace-nowrap"
            >
              Carti<span className="text-primary">fy</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
        {navItems.map(item => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`sidebar-link ${isActive ? 'active' : ''} ${collapsed ? 'justify-center px-2' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={20} className="flex-shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="py-4 px-2 space-y-1 border-t border-gray-200 dark:border-dark-border">
        <button
          onClick={toggleTheme}
          className={`sidebar-link w-full ${collapsed ? 'justify-center px-2' : ''}`}
        >
          {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="whitespace-nowrap"
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <Link to="/help" className={`sidebar-link ${collapsed ? 'justify-center px-2' : ''}`}>
          <HelpCircle size={20} />
          {!collapsed && <span className="whitespace-nowrap">Help Center</span>}
        </Link>

        <Link to="/" className={`sidebar-link ${collapsed ? 'justify-center px-2' : ''}`}>
          <LogOut size={20} />
          {!collapsed && <span className="whitespace-nowrap">Sign Out</span>}
        </Link>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border flex items-center justify-center shadow-sm hover:border-primary/40 hover:text-primary transition-all z-10"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </motion.aside>
  )
}
