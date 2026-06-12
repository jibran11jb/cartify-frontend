import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { revenueData } from '../../data/mockData'
import { TrendingUp, ShoppingBag, Users, Percent } from 'lucide-react'

const statsConfig = [
  { label: 'Total Revenue', value: 2840000, prefix: '$', suffix: '', format: n => n >= 1000000 ? `${(n/1000000).toFixed(1)}M` : `${(n/1000).toFixed(0)}K`, icon: TrendingUp, color: '#00DC82' },
  { label: 'Orders Processed', value: 142000, prefix: '', suffix: '+', format: n => `${(n/1000).toFixed(0)}K`, icon: ShoppingBag, color: '#14B8A6' },
  { label: 'Active Merchants', value: 500000, prefix: '', suffix: '+', format: n => `${(n/1000).toFixed(0)}K`, icon: Users, color: '#6366f1' },
  { label: 'Avg Conversion', value: 4.8, prefix: '', suffix: '%', format: n => n.toFixed(1), icon: Percent, color: '#f59e0b' },
]

function AnimatedStat({ stat, isActive, index }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const duration = 2000
    const increment = stat.value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(stat.value < 10 ? start : Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [stat.value, isActive])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="stat-card text-center"
    >
      <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
        <stat.icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-1">
        {stat.prefix}{stat.format(count)}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500">{stat.label}</div>
    </motion.div>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass px-4 py-3 rounded-xl border border-white/10 shadow-xl">
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        <p className="text-sm font-bold text-primary">${(payload[0].value / 1000).toFixed(0)}K</p>
      </div>
    )
  }
  return null
}

export default function AnalyticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-[#080d18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20 dark:opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-accent mx-auto mb-4">📊 Analytics Dashboard</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Data-driven decisions that{' '}
            <span className="gradient-text">drive growth</span>
          </h2>
          <p className="section-sub">
            Real-time analytics give you the insights to understand your customers, optimize your store, and grow revenue.
          </p>
        </motion.div>

        {/* Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {statsConfig.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} isActive={isInView} index={i} />
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-light dark:glass-card p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
              <p className="text-sm text-gray-500">Annual revenue tracking with monthly breakdown</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge-primary">+42.3% YoY</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00DC82" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00DC82" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" stroke="#00DC82" strokeWidth={2.5} fill="url(#colorRevenue)" dot={false} activeDot={{ r: 6, fill: '#00DC82', strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Mini Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[
            { label: 'Top Product', value: 'Wireless Headphones', sub: '$199 · 891 sold', emoji: '🎧', trend: '+18%' },
            { label: 'Traffic Source', value: 'Organic Search', sub: '42% of total traffic', emoji: '🔍', trend: '+31%' },
            { label: 'Return Rate', value: '2.4%', sub: 'Below industry avg of 8%', emoji: '↩️', trend: '-0.8%' },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card flex items-center gap-4"
            >
              <div className="text-3xl">{card.emoji}</div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">{card.label}</div>
                <div className="font-semibold text-gray-900 dark:text-white">{card.value}</div>
                <div className="text-xs text-gray-400">{card.sub}</div>
              </div>
              <div className="text-xs font-semibold text-emerald-500">{card.trend}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
