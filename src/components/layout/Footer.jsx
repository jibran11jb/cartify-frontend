import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Twitter, Github, Linkedin, Instagram, ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Templates', href: '/templates' },
    { label: 'Store Builder', href: '/dashboard/builder' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Help Center', href: '/help' },
    { label: 'Community', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Guides', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-400' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-300' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-secondary dark:bg-[#080d18] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap size={18} className="text-dark fill-dark" />
              </div>
              <span className="text-xl font-bold font-display">
                Carti<span className="text-primary">fy</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              The modern e-commerce platform built for ambitious entrepreneurs and growing businesses worldwide.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-all duration-200 ${color}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                Stay in the loop
              </h4>
              <p className="text-sm text-gray-400">Get the latest e-commerce tips, updates, and success stories.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
                >
                  ✓ You're subscribed!
                </motion.div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all w-64"
                  />
                  <button type="submit" className="btn-primary text-sm px-4 py-3 whitespace-nowrap">
                    Subscribe <ArrowRight size={14} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Cartify Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            Made with <span className="text-red-400 mx-1">❤️</span> for merchants worldwide
          </div>
        </div>
      </div>
    </footer>
  )
}
