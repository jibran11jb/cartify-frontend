import { motion } from 'framer-motion'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import CTASection from '../components/sections/CTASection'

export default function Pricing() {
  return (
    <div className="pt-20">
      <div className="bg-secondary dark:bg-[#060c18] py-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-heading text-white mb-4">
          Simple, transparent <span className="gradient-text">pricing</span>
        </motion.h1>
        <p className="section-sub text-gray-400">Choose the plan that fits your business. No surprises.</p>
      </div>
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
