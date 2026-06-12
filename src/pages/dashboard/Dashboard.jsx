import { motion } from 'framer-motion'
import { TrendingUp, ShoppingCart, Users, DollarSign, ArrowUpRight, Eye, Package, AlertCircle } from 'lucide-react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { revenueData, weeklyData, orders, products } from '../../data/mockData'

const stats = [
  { label: 'Total Revenue', value: '$124,500', change: '+23.5%', up: true, icon: DollarSign, color: '#00DC82', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { label: 'Total Orders', value: '3,842', change: '+18.2%', up: true, icon: ShoppingCart, color: '#6366f1', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  { label: 'Customers', value: '12,481', change: '+8.7%', up: true, icon: Users, color: '#14B8A6', bg: 'bg-teal-50 dark:bg-teal-500/10' },
  { label: 'Store Views', value: '84,290', change: '-2.1%', up: false, icon: Eye, color: '#f59e0b', bg: 'bg-amber-50 dark:bg-amber-500/10' },
]

const statusColors = {
  Delivered: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  Processing: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  Shipped: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
  Cancelled: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-xl text-xs">
        <p className="text-gray-500 mb-1">{label}</p>
        <p className="font-bold text-primary">${(payload[0].value / 1000).toFixed(0)}K</p>
      </div>
    )
  }
  return null
}

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Jane! Here's what's happening with your store.</p>
      </motion.div>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20"
      >
        <AlertCircle size={18} className="text-amber-500 flex-shrink-0" />
        <p className="text-sm text-amber-700 dark:text-amber-300">
          <strong>4 products</strong> are low on stock. <a href="/dashboard/products" className="underline font-medium">Review inventory →</a>
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -2 }}
            className="stat-card"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
            <div className={`text-xs font-semibold flex items-center gap-1 ${stat.up ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
              <ArrowUpRight size={12} className={stat.up ? '' : 'rotate-180'} />
              {stat.change} vs last month
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 stat-card"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
              <p className="text-xs text-gray-400 mt-0.5">12-month performance</p>
            </div>
            <span className="badge-primary text-xs">+42.3% YoY</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00DC82" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#00DC82" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" stroke="#00DC82" strokeWidth={2} fill="url(#revenue)" dot={false} activeDot={{ r: 4, fill: '#00DC82' }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Weekly Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="stat-card"
        >
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 dark:text-white">This Week</h3>
            <p className="text-xs text-gray-400 mt-0.5">Daily sales breakdown</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}K`} />
              <Tooltip />
              <Bar dataKey="sales" fill="#00DC82" radius={[4, 4, 0, 0]} opacity={0.85} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Orders + Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 stat-card overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900 dark:text-white">Recent Orders</h3>
            <a href="/dashboard/orders" className="text-xs text-primary hover:text-primary-400 font-medium">View all →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-100 dark:border-dark-border">
                  {['Order', 'Customer', 'Amount', 'Status'].map(h => (
                    <th key={h} className="text-left pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
                {orders.slice(0, 5).map(order => (
                  <tr key={order.id} className="table-row">
                    <td className="py-3 pr-4">
                      <div className="font-medium text-gray-900 dark:text-white">{order.id}</div>
                      <div className="text-xs text-gray-400">{order.date}</div>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-xs text-white font-bold">{order.avatar}</div>
                        <span className="text-gray-700 dark:text-gray-300">{order.customer}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">${order.amount}</td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="stat-card"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900 dark:text-white">Top Products</h3>
            <a href="/dashboard/products" className="text-xs text-primary font-medium">View all →</a>
          </div>
          <div className="space-y-4">
            {products.slice(0, 5).map((product, i) => (
              <div key={product.id} className="flex items-center gap-3">
                <span className="text-lg">{product.image}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{product.name}</div>
                  <div className="text-xs text-gray-400">{product.sold} sold</div>
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">${(product.revenue / 1000).toFixed(0)}K</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
