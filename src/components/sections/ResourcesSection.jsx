import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { blogPosts } from '../../data/mockData'

const resources = [
  { icon: '📖', title: 'Blog', desc: 'E-commerce tips, strategies, and success stories from top merchants.', href: '/blog', color: '#00DC82' },
  { icon: '📚', title: 'Guides', desc: 'Step-by-step guides for every aspect of running your online store.', href: '/docs', color: '#6366f1' },
  { icon: '⚙️', title: 'Documentation', desc: 'Full API reference, integration docs, and technical resources.', href: '/docs', color: '#14B8A6' },
  { icon: '💬', title: 'Community', desc: 'Connect with 500K+ merchants. Share tips, ask questions, grow together.', href: '#', color: '#f59e0b' },
]

export default function ResourcesSection() {
  return (
    <section className="py-24 bg-secondary dark:bg-[#060c18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-primary mx-auto mb-4">📚 Resources</div>
          <h2 className="section-heading text-white mb-4">
            Learn, grow,{' '}
            <span className="gradient-text">succeed</span>
          </h2>
          <p className="section-sub text-gray-400">
            Everything you need to become a successful e-commerce entrepreneur.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {resources.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group block"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-2xl"
                style={{ backgroundColor: `${r.color}15` }}
              >
                {r.icon}
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{r.desc}</p>
              <div className="flex items-center gap-1 text-xs font-medium" style={{ color: r.color }}>
                Explore {r.title} <ArrowRight size={12} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">Latest from the Blog</h3>
          <Link to="/blog" className="text-sm text-primary hover:text-primary-400 flex items-center gap-1 font-medium">
            View all posts <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.slice(0, 2).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">
                  {post.image}
                </div>
                <div className="flex-1">
                  {post.tag && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-bold mb-2">
                      {post.tag}
                    </span>
                  )}
                  <h4 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
