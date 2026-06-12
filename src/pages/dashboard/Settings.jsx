import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Store, Bell, CreditCard, Shield, Globe, Palette, Save } from 'lucide-react'

const tabs = [
  { label: 'Profile', icon: User },
  { label: 'Store', icon: Store },
  { label: 'Notifications', icon: Bell },
  { label: 'Billing', icon: CreditCard },
  { label: 'Security', icon: Shield },
  { label: 'Localization', icon: Globe },
  { label: 'Appearance', icon: Palette },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-sm text-gray-500 mt-0.5">Manage your account and store preferences</p>
      </motion.div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-48 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`sidebar-link w-full text-left ${activeTab === tab.label ? 'active' : ''}`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 stat-card space-y-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-dark-border pb-4">
            {activeTab} Settings
          </h2>

          {activeTab === 'Profile' && (
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-dark font-bold text-xl">JD</div>
                <div>
                  <button className="btn-outline text-sm px-4 py-2">Change Photo</button>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG or GIF. Max 5MB.</p>
                </div>
              </div>
              {[
                { label: 'Full Name', value: 'Jane Doe', type: 'text' },
                { label: 'Email Address', value: 'jane@mystore.com', type: 'email' },
                { label: 'Phone Number', value: '+1 (555) 000-0000', type: 'tel' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{f.label}</label>
                  <input type={f.type} defaultValue={f.value} className="input-field text-sm" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Store' && (
            <div className="space-y-5">
              {[
                { label: 'Store Name', value: 'My Awesome Store' },
                { label: 'Store URL', value: 'my-awesome-store.cartify.com' },
                { label: 'Store Email', value: 'store@example.com' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{f.label}</label>
                  <input type="text" defaultValue={f.value} className="input-field text-sm" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Store Description</label>
                <textarea rows={3} className="input-field text-sm resize-none" defaultValue="Welcome to my awesome store! We sell amazing products at great prices." />
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-4">
              {[
                { label: 'New Order', desc: 'Notify me when a new order is placed', on: true },
                { label: 'Low Stock Alert', desc: 'Alert when product stock is running low', on: true },
                { label: 'Customer Review', desc: 'Notify me when a customer leaves a review', on: false },
                { label: 'Weekly Report', desc: 'Receive weekly performance summary', on: true },
                { label: 'Marketing Tips', desc: 'Get tips to improve your store performance', on: false },
              ].map(n => (
                <div key={n.label} className="flex items-start justify-between p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{n.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{n.desc}</div>
                  </div>
                  <button className={`relative w-11 h-6 rounded-full transition-colors ${n.on ? 'bg-primary' : 'bg-gray-200 dark:bg-dark-muted'}`}>
                    <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${n.on ? 'left-5' : 'left-0.5'}`} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Billing' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Growth Plan</span>
                  <span className="badge-primary">Active</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">$79<span className="text-sm font-normal text-gray-400">/month</span></div>
                <p className="text-xs text-gray-500 mt-1">Next billing: January 12, 2025</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-dark-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">💳</div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Visa ending in 4242</div>
                    <div className="text-xs text-gray-400">Expires 12/27</div>
                  </div>
                </div>
                <button className="text-sm text-primary hover:text-primary-400 font-medium">Update payment method</button>
              </div>
            </div>
          )}

          {!['Profile', 'Store', 'Notifications', 'Billing'].includes(activeTab) && (
            <div className="text-center py-12 text-gray-400">
              <div className="text-4xl mb-3">⚙️</div>
              <p>{activeTab} settings coming soon</p>
            </div>
          )}

          {activeTab !== 'Billing' && (
            <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-dark-border">
              <button onClick={handleSave} className={`btn-primary px-6 py-2.5 text-sm ${saved ? 'bg-emerald-500' : ''}`}>
                {saved ? '✓ Saved!' : <><Save size={15} /> Save Changes</>}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
