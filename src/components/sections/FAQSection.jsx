import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/mockData'

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-24 bg-white dark:bg-[#080d18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-10 dark:opacity-30" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge-primary mx-auto mb-4">❓ FAQ</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="section-sub">
            Can't find your answer? <a href="/contact" className="text-primary hover:underline">Chat with our team</a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-primary/30 bg-primary/5 dark:bg-primary/5'
                  : 'border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold text-base pr-4 ${open === i ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
