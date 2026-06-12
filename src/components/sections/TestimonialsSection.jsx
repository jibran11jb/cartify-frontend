import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/mockData'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(p => (p + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const go = (dir) => {
    setDirection(dir)
    setCurrent(p => (p + dir + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
  }

  return (
    <section className="py-24 bg-secondary dark:bg-[#060c18] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-primary mx-auto mb-4">⭐ Testimonials</div>
          <h2 className="section-heading text-white mb-4">
            Loved by merchants{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="section-sub text-gray-400">
            Don't take our word for it — here's what our customers say about Cartify.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass rounded-3xl p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </blockquote>

              {/* Metric badge */}
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
                style={{ backgroundColor: `${testimonials[current].color}20`, color: testimonials[current].color, border: `1px solid ${testimonials[current].color}40` }}
              >
                📈 {testimonials[current].metrics}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: testimonials[current].color }}
                >
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-primary/50 hover:text-primary transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-primary/50 hover:text-primary transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-primary' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* All avatars row */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`w-10 h-10 rounded-full text-xs font-bold transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-primary scale-110'
                  : 'opacity-50 hover:opacity-80'
              }`}
              style={{ backgroundColor: t.color, color: 'white' }}
            >
              {t.avatar}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
