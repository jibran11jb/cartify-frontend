import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { pricingPlans } from '../../data/mockData'
import { Link } from 'react-router-dom'

export default function PricingSection() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="py-24 bg-white dark:bg-[#080d18] relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-mesh opacity-20 dark:opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge-primary mx-auto mb-4">💰 Pricing</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="section-sub mb-8">
            No hidden fees. No transaction charges. Just straightforward plans that scale with your business.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-2xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                !yearly ? 'bg-white dark:bg-dark shadow-sm text-gray-900 dark:text-white' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-white dark:bg-dark shadow-sm text-gray-900 dark:text-white' : 'text-gray-500'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-bold">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`pricing-card ${
                plan.popular
                  ? 'bg-secondary dark:bg-dark-card border-primary/50 shadow-glow ring-1 ring-primary/30'
                  : 'bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-dark text-sm font-bold shadow-glow">
                    <Zap size={14} className="fill-dark" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-end gap-2"
                  >
                    <span className={`text-5xl font-bold font-display ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 mb-2">/month</span>
                  </motion.div>
                </AnimatePresence>
                {yearly && (
                  <p className="text-xs text-primary mt-1">
                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </p>
                )}
              </div>

              <Link
                to="/signup"
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'bg-primary text-dark hover:bg-primary-400 shadow-glow hover:shadow-glow-lg'
                    : 'border-2 border-gray-200 dark:border-dark-border text-gray-900 dark:text-white hover:border-primary hover:text-primary'
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.color }}
                    />
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
