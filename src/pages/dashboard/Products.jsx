import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus, Edit, Trash2, Eye, MoreHorizontal } from 'lucide-react'
import { products } from '../../data/mockData'

const statusColors = {
  Active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  'Low Stock': 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  'Out of Stock': 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
}

export default function Products() {
  const [search, setSearch] = useState('')
  const [selectedProducts, setSelectedProducts] = useState([])
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const toggleSelect = (id) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>
          <p className="text-sm text-gray-500 mt-0.5">{products.length} products total</p>
        </div>
        <button className="btn-primary text-sm px-4 py-2.5">
          <Plus size={16} /> Add Product
        </button>
      </motion.div>

      {/* Toolbar */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="input-field pl-9 text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border text-sm text-gray-600 dark:text-gray-400 hover:border-primary/30 transition-all">
          <Filter size={15} /> Filter
        </button>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-dark-surface">
              <tr className="border-b border-gray-200 dark:border-dark-border">
                <th className="w-10 px-4 py-4">
                  <input type="checkbox" className="rounded accent-primary" />
                </th>
                {['Product', 'Category', 'Price', 'Stock', 'Sold', 'Revenue', 'Status', ''].map(h => (
                  <th key={h} className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
              {filtered.map((product, i) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="table-row group"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => toggleSelect(product.id)}
                      className="rounded accent-primary"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{product.image}</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.name}</div>
                        <div className="text-xs text-gray-400">ID: #{product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{product.category}</td>
                  <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">${product.price}</td>
                  <td className="px-4 py-4">
                    <span className={`font-medium ${product.stock === 0 ? 'text-red-500' : product.stock < 30 ? 'text-amber-500' : 'text-gray-900 dark:text-white'}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">{product.sold.toLocaleString()}</td>
                  <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                    ${(product.revenue / 1000).toFixed(1)}K
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-muted text-gray-400 hover:text-primary transition-colors">
                        <Edit size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-muted text-gray-400 hover:text-primary transition-colors">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
