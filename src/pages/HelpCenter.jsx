import { motion } from 'framer-motion'
import { Search, ChevronRight, MessageCircle, Book, Video, Users } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../data/mockData'

const helpCategories = [
  { icon: '🚀', title: 'Getting Started', desc: 'Set up your store in minutes', count: 24 },
  { icon: '📦', title: 'Products & Inventory', desc: 'Manage your catalog', count: 18 },
  { icon: '💳', title: 'Payments & Billing', desc: 'Accept payments globally', count: 32 },
  { icon: '🚢', title: 'Shipping & Fulfillment', desc: 'Deliver orders worldwide', count: 15 },
  { icon: '📊', title: 'Analytics & Reports', desc: 'Understand your business', count: 12 },
  { icon: '🔧', title: 'Technical & API', desc: 'Developer resources', count: 41 },
]

export default function HelpCenter() {
  const [search, setSearch] = useState('')

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-[#080d18]">
      {/* Hero */}
      <div className="bg-secondary dark:bg-[#060c18] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-2xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-heading text-white mb-4">
            How can we <span className="gradient-text">help you?</span>
          </motion.h1>
          <p className="text-gray-400 mb-8">Search our help center or browse categories below.</p>
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for answers..." className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-gray-500 outline-none focus:border-primary/50 text-base" />
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap gap-3 justify-center -mt-6 relative z-10">
        {[
          { icon: MessageCircle, label: 'Live Chat', sub: '~5 min wait' },
          { icon: Book, label: 'Documentation', sub: '500+ articles' },
          { icon: Video, label: 'Video Tutorials', sub: '120+ videos' },
          { icon: Users, label: 'Community', sub: '50K members' },
        ].map(link => (
          <motion.div key={link.label} whileHover={{ y: -3 }} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-card cursor-pointer hover:border-primary/30 transition-all">
            <link.icon size={18} className="text-primary" />
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{link.label}</div>
              <div className="text-xs text-gray-400">{link.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {helpCategories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-primary/30 cursor-pointer transition-all group">
              <div className="text-3xl">{cat.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{cat.title}</div>
                <div className="text-xs text-gray-400">{cat.desc} · {cat.count} articles</div>
              </div>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Questions */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Questions</h2>
        <div className="space-y-3">
          {faqs.slice(0, 5).map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-primary/30 cursor-pointer transition-all group">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs font-bold">Q</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors text-sm">{faq.q}</p>
              </div>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
