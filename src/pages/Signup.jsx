import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Zap, ArrowRight, Check } from 'lucide-react'

const perks = [
  '14-day free trial',
  'No credit card required',
  '24/7 expert support',
  'Cancel anytime',
]

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', password: '', storeName: '', category: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) { setStep(2); return }
    setLoading(true)
    setTimeout(() => { window.location.href = '/dashboard' }, 1500)
  }

  return (
    <div className="min-h-screen bg-secondary dark:bg-[#060c18] flex relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 grid-dots opacity-20" />

      {/* Left Panel (desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap size={18} className="text-dark fill-dark" />
          </div>
          <span className="text-xl font-bold font-display text-white">Carti<span className="text-primary">fy</span></span>
        </Link>

        <div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Join 500,000+ merchants building their dream stores
          </h2>
          <div className="space-y-4 mb-8">
            {perks.map(p => (
              <div key={p} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={13} className="text-primary" />
                </div>
                <span className="text-gray-300">{p}</span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="glass rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-dark font-bold text-sm">AC</div>
              <div>
                <div className="text-sm font-semibold text-white">Alexandra Chen</div>
                <div className="text-xs text-gray-400">LuxeStyle Co. · New York</div>
              </div>
              <div className="ml-auto text-yellow-400 text-xs">★★★★★</div>
            </div>
            <p className="text-sm text-gray-300 italic">"We went from $10K to $180K monthly in just 8 months with Cartify!"</p>
          </div>
        </div>

        <p className="text-xs text-gray-600">© 2024 Cartify Inc.</p>
      </div>

      {/* Right Panel — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12 relative">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap size={18} className="text-dark fill-dark" />
              </div>
              <span className="text-xl font-bold font-display text-white">Carti<span className="text-primary">fy</span></span>
            </Link>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2].map(s => (
              <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= s ? 'bg-primary' : 'bg-white/10'}`} />
            ))}
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            {step === 1 ? 'Create your account' : 'Set up your store'}
          </h1>
          <p className="text-gray-400 mb-8">
            {step === 1 ? 'Start your 14-day free trial today' : 'Tell us about your business'}
          </p>

          <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Jane Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={e => setForm({...form, password: e.target.value})}
                        placeholder="Min. 8 characters"
                        required minLength={8}
                        className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Store Name</label>
                    <input
                      type="text"
                      value={form.storeName}
                      onChange={e => setForm({...form, storeName: e.target.value})}
                      placeholder="My Awesome Store"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Store Category</label>
                    <select
                      value={form.category}
                      onChange={e => setForm({...form, category: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
                    >
                      <option value="" className="bg-dark">Select a category</option>
                      {['Fashion & Apparel', 'Electronics', 'Beauty & Cosmetics', 'Food & Beverages', 'Furniture & Home', 'Digital Products', 'Sports & Fitness', 'Other'].map(c => (
                        <option key={c} value={c} className="bg-dark">{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-gray-300">
                    🎉 You're almost ready! Your store URL will be: <span className="text-primary font-medium">{form.storeName?.toLowerCase().replace(/\s/g, '-') || 'your-store'}.cartify.com</span>
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3.5 text-base justify-center mt-2"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                  />
                ) : step === 1 ? (
                  <>Continue <ArrowRight size={18} /></>
                ) : (
                  <>Launch My Store 🚀</>
                )}
              </button>
            </form>

            {step === 1 && (
              <p className="text-center text-xs text-gray-500 mt-4">
                By signing up, you agree to our{' '}
                <a href="#" className="text-primary">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-primary">Privacy Policy</a>
              </p>
            )}

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:text-primary-400 font-medium">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
