import { motion } from 'framer-motion'
import { Search, UserPlus } from 'lucide-react'
import { customers } from '../../data/mockData'
import { useState } from 'react'

const statusColors = {
  VIP: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
  Active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  New: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
}

export default function Customers() {
  const [search, setSearch] = useState('')
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h1>
          <p className="text-sm text-gray-500 mt-0.5">{customers.length} customers</p>
        </div>
        <button className="btn-primary text-sm px-4 py-2.5"><UserPlus size={15} /> Add Customer</button>
      </motion.div>

      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search customers..." className="input-field pl-9 text-sm" />
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((customer, i) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="stat-card cursor-pointer hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {customer.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-gray-900 dark:text-white">{customer.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColors[customer.status]}`}>{customer.status}</span>
                </div>
                <div className="text-xs text-gray-400 truncate">{customer.email}</div>
                <div className="text-xs text-gray-400">{customer.location}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-dark-border">
              <div>
                <div className="text-xs text-gray-400">Orders</div>
                <div className="font-bold text-gray-900 dark:text-white">{customer.orders}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Total Spent</div>
                <div className="font-bold text-gray-900 dark:text-white">${customer.spent.toLocaleString()}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
