import { motion } from 'framer-motion'
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { revenueData, weeklyData, categoryData } from '../../data/mockData'
import { TrendingUp, Users, ShoppingCart, Percent } from 'lucide-react'

const COLORS = ['#00DC82', '#14B8A6', '#6366f1', '#f59e0b', '#ef4444']

export default function Analytics() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-sm text-gray-500 mt-0.5">In-depth insights for your store performance</p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Revenue This Month', value: '$124,500', change: '+23.5%', icon: TrendingUp, color: '#00DC82' },
          { label: 'New Customers', value: '1,284', change: '+12.1%', icon: Users, color: '#6366f1' },
          { label: 'Orders', value: '3,842', change: '+18.2%', icon: ShoppingCart, color: '#14B8A6' },
          { label: 'Conversion Rate', value: '4.8%', change: '+0.6%', icon: Percent, color: '#f59e0b' },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">{s.label}</span>
              <s.icon size={16} style={{ color: s.color }} />
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-emerald-500 font-medium mt-0.5">{s.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 stat-card">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Annual Revenue</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="gr1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00DC82" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#00DC82" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}K`} />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#00DC82" strokeWidth={2} fill="url(#gr1)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="stat-card">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={3}>
                {categoryData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => [`${v}%`, 'Share']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {categoryData.map((c, i) => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-gray-600 dark:text-gray-400">{c.name}</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{c.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Weekly + Orders Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="stat-card">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Weekly Sales</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}K`} />
              <Tooltip />
              <Bar dataKey="sales" fill="#00DC82" radius={[4, 4, 0, 0]} />
              <Bar dataKey="returns" fill="#ef444440" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="stat-card">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Monthly Orders vs Visitors</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="gr2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gr3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="orders" stroke="#14B8A6" strokeWidth={2} fill="url(#gr2)" dot={false} />
              <Area type="monotone" dataKey="visitors" stroke="#6366f1" strokeWidth={2} fill="url(#gr3)" dot={false} />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}
