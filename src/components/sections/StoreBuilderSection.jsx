import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MousePointer2, Palette, Eye, Layers, Smartphone, Zap } from 'lucide-react'

const builderFeatures = [
  {
    icon: MousePointer2,
    title: 'Drag & Drop Builder',
    desc: 'Visually design your store layout by dragging elements exactly where you want them. No code required.',
    preview: 'drag-drop',
  },
  {
    icon: Palette,
    title: 'Theme Customization',
    desc: 'Choose from 100+ premium themes and customize every pixel — colors, fonts, layouts, and more.',
    preview: 'theme',
  },
  {
    icon: Eye,
    title: 'Live Preview',
    desc: 'See your changes in real-time across desktop, tablet, and mobile before publishing.',
    preview: 'preview',
  },
  {
    icon: Layers,
    title: 'Section-Based Editing',
    desc: 'Add, remove, and reorder sections with a click. Your store adapts to any layout in seconds.',
    preview: 'sections',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Every store is perfectly optimized for mobile by default — where 70% of shoppers browse.',
    preview: 'mobile',
  },
  {
    icon: Zap,
    title: 'AI Design Assistant',
    desc: "Describe your store and our AI will generate a complete design in seconds. It's like magic.",
    preview: 'ai',
  },
]

const MockupVisualization = ({ type }) => {
  const visuals = {
    'drag-drop': (
      <div className="space-y-3">
        {['Header Banner', 'Featured Products', 'Newsletter Signup'].map((item, i) => (
          <motion.div
            key={item}
            animate={{ x: i === 1 ? [0, 8, 0] : 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 cursor-grab"
          >
            <div className="flex flex-col gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-white">{item}</div>
              <div className="text-xs text-gray-400">Click to edit</div>
            </div>
            <div className="text-xs text-primary">✓</div>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-3 p-3 rounded-xl border-2 border-dashed border-primary/40 text-center"
        >
          <span className="text-primary text-xs w-full">+ Drop here</span>
        </motion.div>
      </div>
    ),
    'theme': (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['#1a1a2e', '#e94560'],
            ['#0f0c29', '#00DC82'],
            ['#ffecd2', '#fcb69f'],
            ['#2d3436', '#00b894'],
            ['#6c5ce7', '#fd79a8'],
            ['#0B1220', '#14B8A6'],
          ].map((colors, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className={`h-12 rounded-xl cursor-pointer border-2 ${i === 1 ? 'border-primary' : 'border-transparent'}`}
              style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
            />
          ))}
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <div className="text-xs text-gray-400 mb-2">Active Theme: Dark Pro</div>
          <div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
      </div>
    ),
    'preview': (
      <div className="space-y-2">
        <div className="flex gap-2 mb-3">
          {['Desktop', 'Tablet', 'Mobile'].map((d, i) => (
            <motion.button
              key={d}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${i === 0 ? 'bg-primary text-dark' : 'bg-white/5 text-gray-400'}`}
            >
              {d}
            </motion.button>
          ))}
        </div>
        <div className="h-40 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
          <div className="h-8 bg-white/10 flex items-center px-3 gap-2">
            <div className="w-16 h-2 rounded bg-primary/50" />
            <div className="flex-1" />
            <div className="w-12 h-2 rounded bg-white/20" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-3 rounded bg-white/10 w-3/4" />
            <div className="h-3 rounded bg-white/10 w-1/2" />
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[1,2,3].map(i => (
                <div key={i} className="h-16 rounded-lg bg-white/5 border border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    'sections': (
      <div className="space-y-2">
        {['Hero', 'Products', 'About', 'Testimonials', 'Footer'].map((s, i) => (
          <motion.div
            key={s}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className="w-2 h-8 rounded-full bg-gradient-to-b from-primary/60 to-accent/60 group-hover:from-primary group-hover:to-accent transition-colors" />
            <span className="text-sm text-white">{s}</span>
            <div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs">↑</div>
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs">↓</div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    'mobile': (
      <div className="flex justify-center">
        <div className="w-32 h-56 rounded-3xl border-4 border-white/20 bg-white/5 overflow-hidden">
          <div className="h-6 bg-white/10 flex items-center justify-center">
            <div className="w-12 h-1.5 rounded bg-white/20" />
          </div>
          <div className="p-2 space-y-2">
            <div className="h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-2xl">🛍️</div>
            <div className="h-2 rounded bg-white/15" />
            <div className="h-2 rounded bg-white/10 w-3/4" />
            <div className="h-6 rounded-lg bg-primary/70 flex items-center justify-center">
              <div className="text-xs text-dark font-bold">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    ),
    'ai': (
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <div className="text-xs text-gray-400 mb-2">AI Prompt</div>
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-white"
          >
            "Luxury fashion store with dark theme and gold accents..."
          </motion.div>
        </div>
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="text-xs text-primary font-medium mb-1">✨ AI is generating...</div>
          <div className="space-y-1.5">
            {[80, 60, 90, 40].map((w, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }}
                animate={{ width: `${w}%` }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="h-1.5 rounded bg-primary/40"
              />
            ))}
          </div>
        </motion.div>
      </div>
    ),
  }
  return visuals[type] || null
}

export default function StoreBuilderSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-24 bg-secondary dark:bg-[#060c18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-primary mx-auto mb-4">🏗️ Store Builder</div>
          <h2 className="section-heading text-white mb-4">
            Build your dream store{' '}
            <span className="gradient-text">visually</span>
          </h2>
          <p className="section-sub text-gray-400">
            Our intuitive drag-and-drop builder makes creating professional stores effortless. No design skills needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Feature List */}
          <div className="space-y-3">
            {builderFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveFeature(i)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeFeature === i
                    ? 'bg-white/10 border-primary/40 shadow-glow'
                    : 'bg-white/3 border-white/10 hover:bg-white/7'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    activeFeature === i ? 'bg-primary text-dark' : 'bg-white/10 text-gray-400'
                  }`}>
                    <feature.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Browser Mockup */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-3 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-gray-400 flex items-center gap-2">
                  <span className="text-primary">●</span>
                  builder.cartify.com — Store Builder
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 min-h-[320px]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {builderFeatures[activeFeature].title}
                  </span>
                  <span className="badge-primary text-xs">Live Preview</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MockupVisualization type={builderFeatures[activeFeature].preview} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
