import { motion } from 'framer-motion'
import { MousePointer2, Palette, Smartphone, Layers, Plus } from 'lucide-react'

export default function StoreBuilder() {
  return (
    <div className="h-full flex flex-col bg-gray-50 dark:bg-dark overflow-hidden">
      {/* Builder Topbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-900 dark:text-white">Store Builder</span>
          <span className="badge-primary">Live Preview</span>
        </div>
        <div className="flex items-center gap-2">
          {['Desktop', 'Tablet', 'Mobile'].map((d, i) => (
            <button key={d} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${i === 0 ? 'bg-primary text-dark' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-card'}`}>
              {d}
            </button>
          ))}
          <div className="w-px h-4 bg-gray-200 dark:bg-dark-border mx-1" />
          <button className="px-4 py-1.5 rounded-lg bg-primary text-dark text-xs font-semibold">Publish</button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel — Elements */}
        <div className="w-56 bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-border overflow-y-auto p-4 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Sections</p>
          <div className="space-y-2">
            {['Header', 'Hero Banner', 'Featured Products', 'Categories', 'Testimonials', 'Newsletter', 'Footer'].map(s => (
              <motion.div
                key={s}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-card cursor-grab text-sm text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-dark-border"
              >
                <Layers size={14} className="text-gray-400" />
                {s}
              </motion.div>
            ))}
          </div>

          <p className="text-xs font-semibold text-gray-500 uppercase mb-3 mt-6">Elements</p>
          <div className="grid grid-cols-2 gap-2">
            {['Button', 'Text', 'Image', 'Video', 'Divider', 'Icon'].map(e => (
              <motion.div
                key={e}
                whileHover={{ scale: 1.04 }}
                className="p-2 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border text-xs text-center text-gray-600 dark:text-gray-400 cursor-grab hover:border-primary/30 hover:text-primary transition-all"
              >
                {e}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-100 dark:bg-dark overflow-auto p-8 flex justify-center">
          <div className="w-full max-w-2xl bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden min-h-[600px]">
            {/* Store Navbar */}
            <div className="h-14 flex items-center justify-between px-6 border-b border-gray-100 dark:border-dark-border">
              <div className="font-bold text-lg text-gray-800 dark:text-white">My Store</div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="hover:text-primary cursor-pointer">Products</span>
                <span className="hover:text-primary cursor-pointer">About</span>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
                  <span className="text-dark text-xs font-bold">🛒</span>
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative group cursor-pointer">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome to My Store</div>
                <div className="text-gray-500 mb-4">Discover amazing products</div>
                <button className="px-6 py-2.5 rounded-xl bg-primary text-dark font-semibold text-sm">Shop Now</button>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-none pointer-events-none transition-all" />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-dark text-xs px-2 py-1 rounded font-medium">
                Click to edit
              </div>
            </div>

            {/* Products Grid */}
            <div className="p-6">
              <h2 className="font-bold text-xl text-gray-800 dark:text-white mb-4">Featured Products</h2>
              <div className="grid grid-cols-3 gap-4">
                {['🧥', '🎧', '✨'].map((emoji, i) => (
                  <motion.div key={i} whileHover={{ y: -4 }} className="rounded-xl overflow-hidden border border-gray-100 dark:border-dark-border cursor-pointer group">
                    <div className="h-24 bg-gray-50 dark:bg-dark flex items-center justify-center text-3xl group-hover:bg-primary/5 transition-colors">{emoji}</div>
                    <div className="p-3">
                      <div className="text-sm font-semibold text-gray-800 dark:text-white">Product {i + 1}</div>
                      <div className="text-xs text-gray-400">$99.00</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel — Properties */}
        <div className="w-56 bg-white dark:bg-dark-surface border-l border-gray-200 dark:border-dark-border p-4 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Properties</p>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Background</label>
              <div className="grid grid-cols-5 gap-1">
                {['#00DC82', '#14B8A6', '#6366f1', '#f59e0b', '#ef4444'].map(c => (
                  <div key={c} className="w-8 h-8 rounded-lg cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-primary" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Font</label>
              <select className="w-full px-2 py-1.5 rounded-lg border border-gray-200 dark:border-dark-border text-xs bg-white dark:bg-dark-card outline-none">
                <option>Inter</option>
                <option>Plus Jakarta Sans</option>
                <option>Roboto</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Spacing</label>
              <input type="range" className="w-full accent-primary" defaultValue={50} />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Border Radius</label>
              <input type="range" className="w-full accent-primary" defaultValue={8} max={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
