import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../../context/StoreContext'
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Layers, 
  Palette, 
  Type, 
  Layout, 
  Image as ImageIcon, 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react'

const COLOR_PRESETS = [
  { hex: '#00DC82', name: 'Emerald' },
  { hex: '#14B8A6', name: 'Teal' },
  { hex: '#6366f1', name: 'Indigo' },
  { hex: '#f59e0b', name: 'Amber' },
  { hex: '#ef4444', name: 'Rose' },
  { hex: '#ec4899', name: 'Pink' },
  { hex: '#000000', name: 'Obsidian' }
]

const FONT_PRESETS = [
  { value: 'Inter', name: 'Inter' },
  { value: 'Plus Jakarta Sans', name: 'Plus Jakarta' },
  { value: 'Roboto', name: 'Roboto' },
  { value: 'Georgia', name: 'Georgia' }
]

const HERO_PRESETS = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1000&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop&q=80'
]

export default function StoreBuilder() {
  const { 
    settings, 
    updateSettings, 
    resetSettings,
    activeSection,
    setActiveSection,
    previewDevice,
    setPreviewDevice
  } = useStore()

  // Publishing flow state
  const [isPublishing, setIsPublishing] = useState(false)
  const [publishStep, setPublishStep] = useState(0)
  const [publishSuccess, setPublishSuccess] = useState(false)

  // Simulation steps for publishing
  const publishSteps = [
    'Initializing production build sequence...',
    'Compiling storefront assets...',
    'Deploying code bundle to edge servers...',
    'Securing custom SSL certificate...',
    'Allocating database nodes...'
  ]

  const handlePublish = () => {
    setIsPublishing(true)
    setPublishStep(0)
    setPublishSuccess(false)
  }

  useEffect(() => {
    if (isPublishing && publishStep < publishSteps.length) {
      const timer = setTimeout(() => {
        setPublishStep(prev => prev + 1)
      }, 1200)
      return () => clearTimeout(timer)
    } else if (isPublishing && publishStep === publishSteps.length) {
      setPublishSuccess(true)
    }
  }, [isPublishing, publishStep])

  // Get active color styling
  const primaryBg = settings.themeColor
  const fontClass = settings.fontFamily.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="h-full flex flex-col bg-slate-50 dark:bg-dark overflow-hidden">
      {/* Builder Topbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border">
        <div className="flex items-center gap-3">
          <span className="font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            <Sparkles size={18} className="text-primary" />
            Store Customizer
          </span>
          <span className="badge-primary px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider">Live Preview</span>
        </div>

        {/* Device selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-card p-1 rounded-xl">
          {[
            { id: 'desktop', icon: Laptop, tooltip: 'Desktop View' },
            { id: 'tablet', icon: Tablet, tooltip: 'Tablet View' },
            { id: 'mobile', icon: Smartphone, tooltip: 'Mobile View' }
          ].map(device => {
            const Icon = device.icon
            return (
              <button
                key={device.id}
                onClick={() => setPreviewDevice(device.id)}
                className={`p-2 rounded-lg transition-all ${
                  previewDevice === device.id
                    ? 'bg-white dark:bg-dark-surface text-primary shadow-sm'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                }`}
                title={device.tooltip}
              >
                <Icon size={16} />
              </button>
            )
          })}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={resetSettings}
            className="px-4 py-2 rounded-xl border border-gray-200 dark:border-dark-border text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-card transition-all"
          >
            Reset
          </button>
          <button 
            onClick={handlePublish}
            className="px-4 py-2 rounded-xl bg-primary text-dark text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-1.5"
          >
            Publish Store
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Navigation & Sections */}
        <div className="w-64 bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-border overflow-y-auto p-5 flex-shrink-0 flex flex-col gap-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Customizer Sections</p>
            <div className="space-y-1.5">
              {[
                { id: 'general', label: 'Theme & Branding', icon: Palette },
                { id: 'header', label: 'Header Navigation', icon: Layout },
                { id: 'hero', label: 'Hero Section', icon: ImageIcon },
                { id: 'products', label: 'Featured Products', icon: Layers }
              ].map(s => {
                const Icon = s.icon
                const isActive = activeSection === s.id
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all border ${
                      isActive 
                        ? 'bg-primary/5 border-primary/20 text-primary font-semibold' 
                        : 'border-transparent hover:bg-slate-50 dark:hover:bg-dark-card text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 text-xs">
                      <Icon size={16} className={isActive ? 'text-primary' : 'text-gray-400'} />
                      {s.label}
                    </div>
                    <ChevronRight size={14} className={isActive ? 'text-primary' : 'text-gray-400'} />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
            <h4 className="text-xs font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-1.5">
              <Sparkles size={12} className="text-primary" />
              SaaS Live Link
            </h4>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
              Publishing will make your online store publicly accessible.
            </p>
            <a 
              href="/store-preview" 
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-dark dark:hover:bg-dark-card text-gray-700 dark:text-gray-300 text-[10px] font-bold flex items-center justify-center gap-1 transition-all border border-gray-200 dark:border-dark-border"
            >
              Preview Store <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* Center: Canvas Live Preview */}
        <div className="flex-1 bg-slate-100 dark:bg-dark/40 overflow-auto p-6 flex flex-col items-center justify-center">
          <div 
            className={`w-full transition-all duration-300 bg-white dark:bg-dark-card rounded-2xl shadow-xl border border-gray-200 dark:border-dark-border overflow-hidden min-h-[500px] flex flex-col ${
              previewDevice === 'mobile' ? 'max-w-sm' : previewDevice === 'tablet' ? 'max-w-xl' : 'max-w-4xl'
            }`}
          >
            {/* Store Preview Header */}
            <div className="h-14 flex items-center justify-between px-6 border-b border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card">
              <div className="font-extrabold text-sm tracking-tight text-gray-800 dark:text-white" style={{ fontFamily: settings.fontFamily }}>
                {settings.storeName}
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400" style={{ fontFamily: settings.fontFamily }}>
                <span className="hover:text-primary transition-all cursor-pointer">Products</span>
                <span className="hover:text-primary transition-all cursor-pointer">About</span>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-105" 
                  style={{ backgroundColor: settings.themeColor }}
                >
                  <span className="text-xs font-bold">🛒</span>
                </div>
              </div>
            </div>

            {/* Store Preview Hero */}
            <div 
              className="relative py-16 px-8 flex items-center justify-center text-center overflow-hidden bg-cover bg-center min-h-[260px]"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85)), url(${settings.bannerImage})` }}
            >
              <div className="max-w-md relative z-10">
                <h2 
                  className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight"
                  style={{ fontFamily: settings.fontFamily }}
                >
                  {settings.heroTitle}
                </h2>
                <p 
                  className="text-gray-300 text-xs md:text-sm mb-5 font-normal max-w-sm mx-auto leading-relaxed"
                  style={{ fontFamily: settings.fontFamily }}
                >
                  {settings.heroSubtitle}
                </p>
                <button 
                  className="px-5 py-2 font-bold text-xs shadow-md transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: settings.themeColor, 
                    borderRadius: `${settings.borderRadius}px`,
                    color: settings.themeColor === '#000000' ? '#ffffff' : '#0f172a'
                  }}
                >
                  {settings.heroButtonText}
                </button>
              </div>
            </div>

            {/* Store Preview Featured Products */}
            <div className="p-6 flex-1 bg-white dark:bg-dark-card">
              <h3 
                className="font-bold text-base text-gray-800 dark:text-white mb-4"
                style={{ fontFamily: settings.fontFamily }}
              >
                Featured Products
              </h3>
              <div className={`grid gap-4 ${settings.layoutType === 'list' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                {[
                  { emoji: '🧥', name: 'Premium Leather Jacket', price: '$299' },
                  { emoji: '🎧', name: 'Wireless Headphones', price: '$199' },
                  { emoji: '✨', name: 'Luxury Face Serum', price: '$89' }
                ].map((product, idx) => (
                  <div 
                    key={idx} 
                    className={`border border-gray-100 dark:border-dark-border cursor-pointer group hover:shadow-md transition-all ${
                      settings.layoutType === 'list' ? 'flex items-center gap-4 p-3' : ''
                    }`}
                    style={{ borderRadius: `${settings.borderRadius}px` }}
                  >
                    <div 
                      className={`bg-slate-50 dark:bg-dark flex items-center justify-center text-2xl group-hover:bg-primary/5 transition-colors ${
                        settings.layoutType === 'list' ? 'w-16 h-16 rounded-lg' : 'h-24'
                      }`}
                    >
                      {product.emoji}
                    </div>
                    <div className="p-3 flex-1">
                      <div className="text-xs font-semibold text-gray-800 dark:text-white leading-snug">{product.name}</div>
                      <div className="text-[10px] font-bold mt-1" style={{ color: settings.themeColor }}>{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Active Section Properties controls */}
        <div className="w-64 bg-white dark:bg-dark-surface border-l border-gray-200 dark:border-dark-border p-5 overflow-y-auto flex-shrink-0">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Properties Configuration</p>

          <AnimatePresence mode="wait">
            {activeSection === 'general' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-5"
              >
                {/* Store Name input */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Store Branding Name</label>
                  <input
                    type="text"
                    value={settings.storeName}
                    onChange={(e) => updateSettings({ storeName: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                  />
                </div>

                {/* Primary Theme color */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Primary Theme Color</label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {COLOR_PRESETS.map(c => (
                      <button
                        key={c.hex}
                        onClick={() => updateSettings({ themeColor: c.hex })}
                        className="w-8 h-8 rounded-lg cursor-pointer transition-all hover:scale-110 flex items-center justify-center relative border border-black/5"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {settings.themeColor === c.hex && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white mix-blend-difference" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Preset select */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Font Typography</label>
                  <select
                    value={settings.fontFamily}
                    onChange={(e) => updateSettings({ fontFamily: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                  >
                    {FONT_PRESETS.map(font => (
                      <option key={font.value} value={font.value}>{font.name}</option>
                    ))}
                  </select>
                </div>

                {/* Border Radius */}
                <div>
                  <div className="flex justify-between text-[10px] font-semibold text-gray-400 mb-1.5 uppercase">
                    <span>Card Corner Radius</span>
                    <span className="text-gray-600 dark:text-gray-300 font-bold">{settings.borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={settings.borderRadius}
                    onChange={(e) => updateSettings({ borderRadius: parseInt(e.target.value) })}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>

                {/* Layout Type Selection */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Products Layout</label>
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-100 dark:bg-dark-card p-1 rounded-xl">
                    <button
                      onClick={() => updateSettings({ layoutType: 'grid' })}
                      className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        settings.layoutType === 'grid'
                          ? 'bg-white dark:bg-dark shadow-sm text-primary'
                          : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      onClick={() => updateSettings({ layoutType: 'list' })}
                      className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        settings.layoutType === 'list'
                          ? 'bg-white dark:bg-dark shadow-sm text-primary'
                          : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      List
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'header' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Header Logo Text</label>
                  <input
                    type="text"
                    value={settings.storeName}
                    onChange={(e) => updateSettings({ storeName: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                  />
                </div>
                <div className="p-3 bg-slate-50 dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border">
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    💡 Header links are automatically configured to route customer traffic to the live collection page.
                  </p>
                </div>
              </motion.div>
            )}

            {activeSection === 'hero' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4"
              >
                {/* Hero Title */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Hero Title Text</label>
                  <textarea
                    rows={2}
                    value={settings.heroTitle}
                    onChange={(e) => updateSettings({ heroTitle: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white resize-none"
                  />
                </div>

                {/* Hero Subtitle */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Hero Subtitle</label>
                  <textarea
                    rows={3}
                    value={settings.heroSubtitle}
                    onChange={(e) => updateSettings({ heroSubtitle: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white resize-none"
                  />
                </div>

                {/* Hero Button Text */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Button Text</label>
                  <input
                    type="text"
                    value={settings.heroButtonText}
                    onChange={(e) => updateSettings({ heroButtonText: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                  />
                </div>

                {/* Hero Preset Background Images */}
                <div>
                  <label className="text-[10px] font-semibold text-gray-400 block mb-1.5 uppercase">Hero Image</label>
                  <div className="grid grid-cols-3 gap-2">
                    {HERO_PRESETS.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => updateSettings({ bannerImage: img })}
                        className={`h-12 rounded-lg bg-cover bg-center border-2 transition-all relative overflow-hidden ${
                          settings.bannerImage === img ? 'border-primary' : 'border-transparent'
                        }`}
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'products' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4"
              >
                <div>
                  <div className="flex justify-between text-[10px] font-semibold text-gray-400 mb-1.5 uppercase">
                    <span>Layout Spacing</span>
                    <span className="text-gray-600 dark:text-gray-300 font-bold">{settings.spacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="48"
                    value={settings.spacing}
                    onChange={(e) => updateSettings({ spacing: parseInt(e.target.value) })}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
                <div className="p-3 bg-slate-50 dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border">
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    💡 Products lists are synchronized directly from your Catalog database. To manage inventory, go to the Products tab in the sidebar.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Publishing Flow Overlay */}
      <AnimatePresence>
        {isPublishing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-md px-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-card rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 dark:border-dark-border text-center"
            >
              {!publishSuccess ? (
                <div className="space-y-6 py-4">
                  <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                    <Sparkles className="w-6 h-6 text-primary absolute animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Publishing Storefront</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Deploying to the global edge network...</p>
                  </div>
                  <div className="space-y-2 text-left bg-slate-50 dark:bg-dark p-4 rounded-2xl border border-gray-100 dark:border-dark-border min-h-[140px] flex flex-col justify-center">
                    {publishSteps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        {publishStep > index ? (
                          <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                        ) : publishStep === index ? (
                          <Loader2 size={14} className="text-primary animate-spin flex-shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-300 dark:border-dark-border flex-shrink-0" />
                        )}
                        <span className={`${publishStep > index ? 'text-gray-950 dark:text-gray-100 font-semibold' : 'text-gray-400'}`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6 py-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Store Published Successfully!</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Your site is compiled and live globally.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark border border-gray-100 dark:border-dark-border flex items-center justify-between text-left">
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase">Production Domain</p>
                      <p className="text-sm font-bold text-gray-800 dark:text-white tracking-tight">
                        {settings.storeName.toLowerCase().replace(/\s+/g, '-')}.cartify.design
                      </p>
                    </div>
                    <a 
                      href="/store-preview" 
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-primary hover:bg-primary/95 text-dark font-bold transition-all shadow-md shadow-primary/10 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsPublishing(false)}
                      className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-card transition-all"
                    >
                      Back to Editor
                    </button>
                    <a
                      href="/store-preview"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-dark font-bold text-xs flex items-center justify-center gap-1 shadow-md shadow-primary/10"
                    >
                      Open Live Site <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
