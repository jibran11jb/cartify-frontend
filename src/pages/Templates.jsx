import { motion } from 'framer-motion'
import TemplatesSection from '../components/sections/TemplatesSection'
import CTASection from '../components/sections/CTASection'

export default function Templates() {
  return (
    <div className="pt-20">
      <div className="bg-secondary dark:bg-[#060c18] py-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-heading text-white mb-4">
          Templates <span className="gradient-text">Marketplace</span>
        </motion.h1>
        <p className="section-sub text-gray-400">100+ professionally designed templates across every industry.</p>
      </div>
      <TemplatesSection />
      <CTASection />
    </div>
  )
}
