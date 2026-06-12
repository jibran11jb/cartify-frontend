import { motion } from 'framer-motion'
import { Store, Package, CreditCard, BarChart3, Mail, TrendingUp, Shield, Globe } from 'lucide-react'

const features = [
  {
    icon: Store,
    title: 'Online Store Builder',
    desc: 'Create stunning stores visually with our drag-and-drop builder. No code needed — launch in hours, not weeks.',
    color: '#00DC82',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
  {
    icon: Package,
    title: 'Product Management',
    desc: 'Manage thousands of products, variants, collections, and inventory with ease. Bulk import/export included.',
    color: '#6366f1',
    gradient: 'from-indigo-500/10 to-purple-500/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    desc: 'Accept 100+ payment methods globally. Zero transaction fees. PCI DSS compliant with 3D Secure support.',
    color: '#14B8A6',
    gradient: 'from-teal-500/10 to-cyan-500/5',
    border: 'border-teal-500/20 hover:border-teal-500/40',
  },
  {
    icon: TrendingUp,
    title: 'Inventory Tracking',
    desc: 'Track stock levels in real-time. Get low-stock alerts, forecasting, and automated reorder points.',
    color: '#f59e0b',
    gradient: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-500/20 hover:border-amber-500/40',
  },
  {
    icon: Mail,
    title: 'Marketing Tools',
    desc: 'Run email campaigns, SMS promotions, discount codes, and loyalty programs all from one dashboard.',
    color: '#ec4899',
    gradient: 'from-pink-500/10 to-rose-500/5',
    border: 'border-pink-500/20 hover:border-pink-500/40',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Get deep insights into revenue, traffic, conversion funnels, and customer behavior with live charts.',
    color: '#00DC82',
    gradient: 'from-emerald-500/10 to-green-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Bank-level SSL encryption, fraud detection, GDPR compliance, and 99.99% uptime SLA.',
    color: '#8b5cf6',
    gradient: 'from-violet-500/10 to-purple-500/5',
    border: 'border-violet-500/20 hover:border-violet-500/40',
  },
  {
    icon: Globe,
    title: 'Global Commerce',
    desc: 'Sell in 150+ countries with multi-currency, local tax rules, translated storefronts, and global shipping.',
    color: '#14B8A6',
    gradient: 'from-cyan-500/10 to-teal-500/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d18] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-30 dark:opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-primary mx-auto mb-4">
            ⚡ Powerful Features
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Everything you need to{' '}
            <span className="gradient-text">succeed online</span>
          </h2>
          <p className="section-sub">
            From building your store to scaling to millions — Cartify has every tool you need in one unified platform.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`feature-card group bg-gradient-to-br ${feature.gradient} border ${feature.border} relative overflow-hidden`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={22} style={{ color: feature.color }} />
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px ${feature.color}08` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
