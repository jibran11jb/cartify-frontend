import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, ShoppingCart, Star, Package } from 'lucide-react'
import { useRef } from 'react'

const statsCards = [
  { label: 'Monthly Revenue', value: '$124,500', change: '+23.5%', icon: TrendingUp, color: 'text-emerald-400' },
  { label: 'Total Orders', value: '3,842', change: '+18.2%', icon: ShoppingCart, color: 'text-blue-400' },
  { label: 'Avg. Rating', value: '4.9 ★', change: '+0.3', icon: Star, color: 'text-yellow-400' },
  { label: 'Products Active', value: '1,240', change: '+45', icon: Package, color: 'text-purple-400' },
]

const floatingCards = [
  { pos: 'top-8 right-8', delay: 0, content: { label: 'New Sale!', value: '$299', sub: 'Leather Jacket — 2s ago', dot: 'bg-green-400' } },
  { pos: 'bottom-16 left-4', delay: 1.5, content: { label: 'Revenue Today', value: '$8,429', sub: '↑ 34% vs yesterday', dot: 'bg-primary' } },
  { pos: 'top-1/2 -right-4', delay: 0.8, content: { label: 'Conversion Rate', value: '4.8%', sub: '↑ Industry avg: 1.9%', dot: 'bg-accent' } },
]

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary dark:bg-[#060c18]"
    >
      {/* Animated gradient bg */}
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="absolute inset-0 grid-dots opacity-30" />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div style={{ y, opacity }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              🚀 Now with AI-powered store builder
              <ArrowRight size={14} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold font-display text-white leading-[1.1] mb-6"
            >
              Build, Launch, and{' '}
              <span className="gradient-text">Grow</span>
              {' '}Your Online Store
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Everything you need to sell online, manage products, process orders, and scale your business. Trusted by 500,000+ merchants worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/signup" className="btn-primary text-base px-7 py-4">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <button className="btn-secondary text-base px-7 py-4">
                <Play size={18} className="fill-white" /> Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> 14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> Cancel anytime
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative glass rounded-3xl p-6 shadow-2xl"
            >
              {/* Browser Bar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/5 text-xs text-gray-400">
                  dashboard.cartify.com
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {statsCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">{card.label}</span>
                      <card.icon size={14} className={card.color} />
                    </div>
                    <div className="text-lg font-bold text-white">{card.value}</div>
                    <div className="text-xs text-emerald-400">{card.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mini Chart */}
              <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-3 flex items-end gap-1.5">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t-sm ${i === 11 ? 'bg-primary' : 'bg-primary/30'} origin-bottom`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.3 }}
                className={`absolute ${card.pos} glass px-4 py-3 rounded-2xl shadow-glass min-w-[160px]`}
                style={{
                  animation: `float ${4 + i}s ease-in-out ${card.delay}s infinite`,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${card.content.dot} animate-pulse`} />
                  <span className="text-xs text-gray-400">{card.content.label}</span>
                </div>
                <div className="text-sm font-bold text-white">{card.content.value}</div>
                <div className="text-xs text-gray-400">{card.content.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary dark:from-[#060c18] to-transparent" />
    </section>
  )
}
