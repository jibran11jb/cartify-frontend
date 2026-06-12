import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { templates } from '../../data/mockData'
import { Link } from 'react-router-dom'

const categories = ['All', 'Fashion', 'Electronics', 'Beauty', 'Furniture', 'Food', 'Digital']

export default function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? templates
    : templates.filter(t => t.category === activeCategory)

  return (
    <section className="py-24 bg-secondary dark:bg-[#060c18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge-primary mx-auto mb-4">🎨 Templates</div>
          <h2 className="section-heading text-white mb-4">
            Start with a{' '}
            <span className="gradient-text">stunning template</span>
          </h2>
          <p className="section-sub text-gray-400">
            100+ professionally designed templates for every industry. Fully customizable, always beautiful.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-dark'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:border-primary/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((template, i) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
            >
              {/* Preview */}
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}
              >
                <span className="text-5xl group-hover:scale-125 transition-transform duration-500">
                  {template.preview}
                </span>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-primary text-dark text-xs font-semibold">
                      Use Template
                    </button>
                    <button className="p-1.5 rounded-lg bg-white/20 text-white">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                {/* Tag */}
                {template.tag && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-dark text-xs font-bold">
                    {template.tag}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 bg-white/5 dark:bg-white/3 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white text-sm">{template.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star size={10} className="fill-yellow-400" />
                    {template.rating}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{template.category}</span>
                  <span className="text-xs text-gray-500">{template.reviews} reviews</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/templates" className="btn-outline border-primary/50 text-primary hover:bg-primary hover:text-dark">
            Browse All 100+ Templates →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
