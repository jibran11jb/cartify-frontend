import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-[#080d18]">
      <div className="bg-secondary dark:bg-[#060c18] py-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-heading text-white mb-4">
          Get in <span className="gradient-text">Touch</span>
        </motion.h1>
        <p className="section-sub text-gray-400">Our team typically responds within 2 hours.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
          {[
            { icon: Mail, label: 'Email Us', value: 'hello@cartify.com', sub: 'We respond within 2 hours' },
            { icon: Phone, label: 'Call Us', value: '+1 (800) CARTIFY', sub: 'Mon–Fri, 9am–6pm EST' },
            { icon: MapPin, label: 'HQ', value: '123 Commerce St', sub: 'San Francisco, CA 94105' },
            { icon: MessageCircle, label: 'Live Chat', value: 'Available 24/7', sub: 'Average response: 5 mins' },
          ].map(info => (
            <motion.div key={info.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <info.icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">{info.label}</div>
                <div className="font-semibold text-gray-900 dark:text-white">{info.value}</div>
                <div className="text-xs text-gray-400">{info.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
          {sent ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message sent!</h3>
              <p className="text-gray-500">We'll get back to you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field text-sm" required placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-field text-sm" required placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="input-field text-sm">
                  <option value="">Choose a topic</option>
                  <option>General Inquiry</option>
                  <option>Sales</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input-field text-sm resize-none" required placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 text-base justify-center">
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
