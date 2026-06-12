import { motion } from 'framer-motion'
import { blogPosts } from '../data/mockData'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-[#080d18]">
      <div className="bg-secondary dark:bg-[#060c18] py-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-heading text-white mb-4">
          Cartify <span className="gradient-text">Blog</span>
        </motion.h1>
        <p className="section-sub text-gray-400">Tips, strategies, and stories from the world of e-commerce.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...blogPosts, ...blogPosts].map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card overflow-hidden cursor-pointer hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="h-36 bg-gradient-to-br from-secondary to-dark flex items-center justify-center text-5xl relative overflow-hidden">
                <span className="group-hover:scale-125 transition-transform duration-500">{post.image}</span>
                {post.tag && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-dark text-xs font-bold">{post.tag}</div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-accent text-xs">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-white font-bold">{post.author[0]}</div>
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <button className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
