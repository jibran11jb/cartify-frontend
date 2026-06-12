import { motion } from 'framer-motion'
import { integrations } from '../../data/mockData'

export default function IntegrationsSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20 dark:opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-accent mx-auto mb-4">🔗 Integrations</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Connect your favorite{' '}
            <span className="gradient-text">tools</span>
          </h2>
          <p className="section-sub">
            Cartify integrates with 200+ platforms so you can use the tools you love without changing your workflow.
          </p>
        </motion.div>

        {/* Integration Hub */}
        <div className="relative flex justify-center items-center">
          {/* Center Hub */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-80 h-80 rounded-full border border-primary/10 border-dashed pointer-events-none hidden lg:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-52 h-52 rounded-full border border-accent/10 border-dashed pointer-events-none hidden lg:block"
          />

          {/* Cartify center */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow-lg mb-8 lg:mb-0"
          >
            <span className="text-2xl font-bold text-dark">C</span>
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-xl" />
          </motion.div>

          {/* Integration cards in a grid for mobile, positioned for desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:hidden gap-4 w-full mt-0">
            {integrations.map((integ, i) => (
              <motion.div
                key={integ.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="p-4 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary/30"
              >
                <div className="text-3xl mb-2">{integ.icon}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{integ.name}</div>
                <div className="text-xs text-gray-400">{integ.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Desktop positioned cards */}
          <div className="hidden lg:block">
            {integrations.map((integ, i) => {
              const angle = (i / integrations.length) * 360 - 90
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={integ.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  animate={{ y: [0, -6, 0] }}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px - 44px)`,
                    top: `calc(50% + ${y}px - 44px)`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.5}s`,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                  }}
                  className="w-22 h-22 p-3 rounded-2xl border bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary/30 text-center cursor-pointer"
                >
                  <div className="text-2xl mb-1">{integ.icon}</div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white whitespace-nowrap">{integ.name}</div>
                  <div className="text-xs text-gray-400">{integ.desc}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Desktop spacer */}
          <div className="hidden lg:block h-[420px] w-[420px]" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm"
        >
          + 200 more integrations available in the Cartify App Store
        </motion.p>
      </div>
    </section>
  )
}
