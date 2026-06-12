import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Book, Code, Layers, Zap, ChevronRight } from 'lucide-react'

const docs = [
  {
    category: 'Getting Started',
    icon: Zap,
    color: '#00DC82',
    items: ['Quick Start Guide', 'Setting Up Your Store', 'Adding Your First Product', 'Configuring Payments', 'Custom Domain Setup'],
  },
  {
    category: 'Store Management',
    icon: Layers,
    color: '#6366f1',
    items: ['Product Management', 'Inventory Tracking', 'Order Fulfillment', 'Returns & Refunds', 'Customer Management'],
  },
  {
    category: 'Marketing',
    icon: Book,
    color: '#14B8A6',
    items: ['Email Campaigns', 'Discount Codes', 'SEO Optimization', 'Social Media Integration', 'Referral Programs'],
  },
  {
    category: 'API Reference',
    icon: Code,
    color: '#f59e0b',
    items: ['Authentication', 'Products API', 'Orders API', 'Customers API', 'Webhooks'],
  },
]

export default function Docs() {
  const [search, setSearch] = useState('')

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-[#080d18]">
      {/* Hero */}
      <div className="bg-secondary dark:bg-[#060c18] py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-2xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-heading text-white mb-4">
            Documentation
          </motion.h1>
          <p className="text-gray-400 mb-8">Everything you need to build on Cartify.</p>
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search docs..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-gray-500 outline-none focus:border-primary/50 text-base"
            />
          </div>
        </div>
      </div>

      {/* Docs Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${section.color}15` }}>
                <section.icon size={20} style={{ color: section.color }} />
              </div>
              <h2 className="font-bold text-gray-900 dark:text-white">{section.category}</h2>
            </div>
            <ul className="space-y-2">
              {section.items.map(item => (
                <li key={item}>
                  <a href="#" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-all group">
                    {item}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
