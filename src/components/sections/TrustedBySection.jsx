import { motion } from 'framer-motion'

const brands = [
  { name: 'Shopify', logo: '🛒' },
  { name: 'Stripe', logo: '💳' },
  { name: 'Tesla', logo: '⚡' },
  { name: 'Airbnb', logo: '🏠' },
  { name: 'Notion', logo: '📝' },
  { name: 'Figma', logo: '🎨' },
  { name: 'Vercel', logo: '▲' },
  { name: 'Linear', logo: '◇' },
  { name: 'Framer', logo: '⬡' },
  { name: 'Loom', logo: '🎬' },
  { name: 'Intercom', logo: '💬' },
  { name: 'Webflow', logo: '🌊' },
]

const BrandCard = ({ brand }) => (
  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 dark:bg-white/3 border border-white/10 backdrop-blur-sm mx-3 min-w-[140px] hover:border-primary/30 transition-all duration-300 group">
    <span className="text-2xl">{brand.logo}</span>
    <span className="text-sm font-semibold text-gray-400 dark:text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
      {brand.name}
    </span>
  </div>
)

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-secondary/95 dark:bg-[#070d1a] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest"
        >
          Trusted by 500,000+ merchants from the world's best companies
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary dark:from-[#070d1a] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary dark:from-[#070d1a] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-slide-left" style={{ width: 'max-content' }}>
          {[...brands, ...brands].map((brand, i) => (
            <BrandCard key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}
