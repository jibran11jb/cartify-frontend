import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Download, Eye, RefreshCw } from 'lucide-react'
import { orders } from '../../data/mockData'

const statusColors = {
  Delivered: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  Processing: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  Shipped: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
  Cancelled: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
}

export default function Orders() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = orders.filter(o => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || o.status === statusFilter
    return matchSearch && matchStatus
  })

  const statusCounts = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Orders</h1>
          <p className="text-sm text-gray-500 mt-0.5">{orders.length} orders total</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border text-sm hover:border-primary/30 transition-all">
          <Download size={15} /> Export
        </button>
      </motion.div>

      {/* Status Tabs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex gap-2 overflow-x-auto">
        {statusCounts.map(s => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              statusFilter === s
                ? 'bg-primary text-dark'
                : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-muted'
            }`}
          >
            {s}
          </button>
        ))}
      </motion.div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search orders..."
          className="input-field pl-9 text-sm"
        />
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="bg-gray-50 dark:bg-dark-surface">
              <tr className="border-b border-gray-200 dark:border-dark-border">
                {['Order ID', 'Customer', 'Product', 'Amount', 'Date', 'Status', 'Action'].map(h => (
                  <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
              {filtered.map((order, i) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="table-row group"
                >
                  <td className="px-5 py-4 font-mono text-xs text-primary font-semibold">{order.id}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-xs font-bold text-dark">{order.avatar}</div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{order.customer}</div>
                        <div className="text-xs text-gray-400">{order.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600 dark:text-gray-400 max-w-[160px] truncate">{order.product}</td>
                  <td className="px-5 py-4 font-bold text-gray-900 dark:text-white">${order.amount}</td>
                  <td className="px-5 py-4 text-gray-500 dark:text-gray-400 text-xs">{order.date}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-muted text-gray-400 hover:text-primary transition-colors">
                        <Eye size={14} />
                      </button>
                      {order.status === 'Processing' && (
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-muted text-gray-400 hover:text-accent transition-colors">
                          <RefreshCw size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
