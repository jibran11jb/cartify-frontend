import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bell, Search, Menu } from 'lucide-react'
import DashboardSidebar from '../../components/dashboard/DashboardSidebar'

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-dark overflow-hidden">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <DashboardSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileSidebarOpen(false)} />
          <div className="relative">
            <DashboardSidebar collapsed={false} onToggle={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-card"
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-dark-card border border-transparent focus:border-primary/30 text-sm outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Notifications */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-card transition-colors">
              <Bell size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-dark-border">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-dark text-xs font-bold">
                JD
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Jane Doe</div>
                <div className="text-xs text-gray-400">Growth Plan</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  )
}
