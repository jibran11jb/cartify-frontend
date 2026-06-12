import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary dark:bg-[#060c18]">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-0 grid-dots opacity-20" />

      {/* Large glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl mb-6 inline-block"
          >
            🚀
          </motion.div>

          <div className="badge-primary mx-auto mb-6">Limited Time: 3 Months Free on Annual Plans</div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-[1.1]">
            Start Selling Online{' '}
            <span className="gradient-text">Today</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500,000+ merchants who use Cartify to build and grow their online stores. Start your free 14-day trial — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup" className="btn-primary text-lg px-8 py-4">
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              <MessageCircle size={20} /> Contact Sales
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {['14-day free trial', 'No credit card required', 'Cancel anytime', '24/7 support'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { value: '500K+', label: 'Active Merchants' },
              { value: '$2.4B+', label: 'Revenue Processed' },
              { value: '150+', label: 'Countries Served' },
              { value: '4.9/5', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
