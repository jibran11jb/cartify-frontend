import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Alex Rivera', role: 'CEO & Co-Founder', emoji: '👨‍💼', color: 'from-primary/20 to-accent/20' },
  { name: 'Sarah Kim', role: 'CTO & Co-Founder', emoji: '👩‍💻', color: 'from-indigo-500/20 to-violet-500/20' },
  { name: 'Marcus Chen', role: 'Head of Design', emoji: '🎨', color: 'from-pink-500/20 to-rose-500/20' },
  { name: 'Priya Patel', role: 'Head of Growth', emoji: '📈', color: 'from-amber-500/20 to-orange-500/20' },
  { name: 'David Lee', role: 'Head of Engineering', emoji: '⚙️', color: 'from-teal-500/20 to-cyan-500/20' },
  { name: 'Emma Wilson', role: 'Head of Customer Success', emoji: '💬', color: 'from-purple-500/20 to-indigo-500/20' },
]

const values = [
  { icon: '🚀', title: 'Merchant-First', desc: "Every decision we make starts with one question: how does this help our merchants succeed?" },
  { icon: '🌍', title: 'Global by Default', desc: "We build for merchants everywhere, from small towns to major cities across 150+ countries." },
  { icon: '⚡', title: 'Move Fast', desc: "We ship meaningful improvements to our platform every week, not every quarter." },
  { icon: '🔒', title: 'Trust & Security', desc: "We take the responsibility of handling millions in transactions seriously, every single day." },
]

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-[#080d18]">
      {/* Hero */}
      <div className="bg-secondary dark:bg-[#060c18] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="badge-primary mx-auto mb-4">🏢 About Us</div>
            <h1 className="section-heading text-white mb-4">
              We're building the future of <span className="gradient-text">commerce</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Cartify was founded in 2020 with a simple mission: make it easy for anyone to start and grow an online business, regardless of their technical background or resources.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: '500K+', label: 'Active Merchants' },
          { value: '$2.4B+', label: 'GMV Processed' },
          { value: '150+', label: 'Countries Served' },
          { value: '98%', label: 'Customer Satisfaction' },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
            <div className="text-4xl font-bold gradient-text mb-1">{s.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Values */}
      <div className="bg-gray-50 dark:bg-dark-surface py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="feature-card">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="text-center p-6 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-primary/30 transition-all">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl mx-auto mb-3`}>{member.emoji}</div>
              <div className="font-semibold text-gray-900 dark:text-white">{member.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{member.role}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-secondary dark:bg-[#060c18] py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join us in building the future</h2>
        <p className="text-gray-400 mb-6">We're always looking for passionate people to join our team.</p>
        <Link to="/contact" className="btn-primary px-8 py-4">View Open Roles →</Link>
      </div>
    </div>
  )
}
