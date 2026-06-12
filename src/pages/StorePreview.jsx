import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../context/StoreContext'
import { products as initialProducts } from '../data/mockData'
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  ArrowLeft,
  Sparkles
} from 'lucide-react'

// Simple helper to darken hex colors for hover states
const darkenColor = (hex) => {
  if (hex === '#000000') return '#1e293b'
  return `${hex}ee` // opacity hover
}

export default function StorePreview() {
  const { 
    settings, 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart 
  } = useStore()

  // State
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState('form') // form -> loading -> success
  
  // Checkout Form fields
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  // Calculate Subtotals
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15
  const total = subtotal + shipping
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Handle Checkout submission
  const handleCheckoutSubmit = (e) => {
    e.preventDefault()
    setCheckoutStep('loading')
    setTimeout(() => {
      setCheckoutStep('success')
    }, 2500)
  }

  const handleFinishOrder = () => {
    clearCart()
    setIsCheckoutOpen(false)
    setIsCartOpen(false)
    setCheckoutStep('form')
    // Reset form fields
    setEmail('')
    setName('')
    setAddress('')
    setCardNumber('')
    setExpiry('')
    setCvc('')
  }

  // Active theme colors
  const primaryColor = settings.themeColor
  const textOnPrimary = primaryColor === '#000000' ? '#ffffff' : '#0f172a'
  const hoverColor = darkenColor(primaryColor)

  return (
    <div 
      className="min-h-screen bg-slate-50 dark:bg-dark text-slate-900 dark:text-slate-100 flex flex-col transition-all duration-300"
      style={{ fontFamily: settings.fontFamily }}
    >
      {/* Customer Header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-dark-surface/85 backdrop-blur-md border-b border-gray-200/60 dark:border-dark-border/60 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {settings.storeName}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-primary transition-colors">Catalog</a>
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Back to admin button */}
            <a 
              href="/dashboard/builder" 
              className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 border border-gray-200 dark:border-dark-border px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft size={12} /> Customize
            </a>

            {/* Shopping Cart button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-dark-card transition-all"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span 
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shadow-md border border-white dark:border-dark"
                  style={{ backgroundColor: primaryColor, color: textOnPrimary }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-24 md:py-32 px-4 md:px-8 text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.8)), url(${settings.bannerImage})` }}
      >
        <div className="max-w-2xl mx-auto relative z-10 text-white space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {settings.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-200 text-sm md:text-base font-normal max-w-lg mx-auto leading-relaxed"
          >
            {settings.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <a 
              href="#catalog"
              className="px-6 py-3 font-bold text-xs shadow-lg transition-all hover:scale-105 inline-flex items-center gap-1.5"
              style={{ 
                backgroundColor: primaryColor, 
                borderRadius: `${settings.borderRadius}px`,
                color: textOnPrimary
              }}
            >
              {settings.heroButtonText} <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Catalog Products Section */}
      <main id="catalog" className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">All Products</h2>
        
        <div className={`grid gap-6 ${settings.layoutType === 'list' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}>
          {initialProducts.slice(0, 6).map((product) => (
            <motion.div 
              key={product.id} 
              whileHover={{ y: -6 }}
              className={`bg-white dark:bg-dark-surface border border-gray-200/60 dark:border-dark-border/60 overflow-hidden shadow-sm hover:shadow-md transition-all ${
                settings.layoutType === 'list' ? 'flex items-center gap-6 p-4' : 'flex flex-col h-full'
              }`}
              style={{ 
                borderRadius: `${settings.borderRadius}px`,
                gap: `${settings.spacing}px`
              }}
            >
              <div 
                className={`bg-slate-100 dark:bg-dark flex items-center justify-center text-4xl select-none flex-shrink-0 ${
                  settings.layoutType === 'list' ? 'w-24 h-24 rounded-xl' : 'h-48 w-full'
                }`}
              >
                {product.image}
              </div>
              
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                    High quality materials and custom manufacturing for standard performance.
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 font-bold text-xs shadow-md transition-all hover:scale-105"
                    style={{ 
                      backgroundColor: primaryColor, 
                      borderRadius: `${settings.borderRadius}px`,
                      color: textOnPrimary
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-dark/50 backdrop-blur-sm">
            {/* Backdrop click */}
            <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white dark:bg-dark-surface h-full shadow-2xl flex flex-col border-l border-gray-200 dark:border-dark-border"
            >
              {/* Header */}
              <div className="p-5 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-gray-900 dark:text-white" />
                  <h3 className="font-bold text-base text-gray-900 dark:text-white">Shopping Cart</h3>
                  <span className="bg-slate-100 dark:bg-dark-card px-2 py-0.5 rounded-full text-xs font-bold text-gray-500">
                    {totalItems}
                  </span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg border border-gray-200 dark:border-dark-border text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-dark-card transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="text-5xl mb-4 text-slate-300">🛍️</div>
                    <p className="font-bold text-gray-800 dark:text-white">Your cart is empty</p>
                    <p className="text-xs text-gray-400 mt-1 max-w-[200px]">Browse our products catalog to add items here.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div 
                      key={item.product.id}
                      className="flex gap-4 p-3 bg-slate-50 dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border relative"
                    >
                      <div className="w-16 h-16 rounded-xl bg-slate-200 dark:bg-dark flex items-center justify-center text-2xl flex-shrink-0">
                        {item.product.image}
                      </div>
                      
                      <div className="flex-1 min-w-0 pr-6">
                        <h4 className="font-bold text-xs text-gray-900 dark:text-white truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-0.5">Unit price: ${item.product.price}</p>
                        
                        <div className="flex items-center gap-2.5 mt-2.5">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-md bg-white dark:bg-dark border border-gray-200 dark:border-dark-border text-gray-500 hover:text-gray-800 dark:hover:text-white"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs font-bold text-gray-800 dark:text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-md bg-white dark:bg-dark border border-gray-200 dark:border-dark-border text-gray-500 hover:text-gray-800 dark:hover:text-white"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between items-end">
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={12} />
                        </button>
                        <span className="text-xs font-extrabold text-gray-900 dark:text-white">
                          ${item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-gray-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card space-y-4">
                  <div className="space-y-1.5 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900 dark:text-white">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {shipping === 0 ? 'Free' : `$${shipping}`}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-[10px] text-right text-gray-400">Add ${(150 - subtotal).toFixed(0)} more for Free Shipping!</p>
                    )}
                    <div className="border-t border-gray-200 dark:border-dark-border pt-3 flex justify-between text-sm font-extrabold text-gray-900 dark:text-white">
                      <span>Total Amount</span>
                      <span>${total}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full py-3 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg"
                    style={{ 
                      backgroundColor: primaryColor, 
                      borderRadius: `${settings.borderRadius}px`,
                      color: textOnPrimary
                    }}
                  >
                    Proceed to Checkout <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Checkout Drawer Overlay */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-md px-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-dark-surface rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-gray-100 dark:border-dark-border flex flex-col max-h-[90vh] overflow-hidden"
            >
              {checkoutStep === 'form' && (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-dark-border mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <CreditCard size={18} style={{ color: primaryColor }} /> Checkout Payment
                    </h3>
                    <button 
                      onClick={() => setIsCheckoutOpen(false)}
                      className="p-1.5 rounded-lg border border-gray-200 dark:border-dark-border text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <form onSubmit={handleCheckoutSubmit} className="space-y-4 overflow-y-auto flex-1 pr-1">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-semibold text-gray-400 block mb-1 uppercase">Customer Name</label>
                        <input 
                          type="text" 
                          required 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-gray-400 block mb-1 uppercase">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-gray-400 block mb-1 uppercase">Shipping Address</label>
                      <input 
                        type="text" 
                        required 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street Address, City, Zip"
                        className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-slate-50 dark:bg-dark outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                      />
                    </div>

                    {/* Stripe Card mock UI */}
                    <div className="bg-slate-50 dark:bg-dark p-4 rounded-2xl border border-gray-200/60 dark:border-dark-border/60 space-y-3">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        <Lock size={10} /> Secure Credit Card Payment
                      </p>
                      
                      <div>
                        <label className="text-[9px] font-semibold text-gray-400 block mb-1 uppercase">Card Number</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            required 
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g,'').substring(0, 16))}
                            placeholder="4242 4242 4242 4242"
                            className="w-full text-xs pl-8 pr-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-white dark:bg-dark-card outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                          />
                          <CreditCard size={14} className="absolute left-2.5 top-3 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[9px] font-semibold text-gray-400 block mb-1 uppercase">Expiration Date</label>
                          <input 
                            type="text" 
                            required 
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value.substring(0, 5))}
                            placeholder="MM / YY"
                            className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-white dark:bg-dark-card outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-semibold text-gray-400 block mb-1 uppercase">CVC Code</label>
                          <input 
                            type="text" 
                            required 
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value.replace(/\D/g,'').substring(0, 3))}
                            placeholder="123"
                            className="w-full text-xs px-3 py-2 border border-gray-200 dark:border-dark-border rounded-xl bg-white dark:bg-dark-card outline-none focus:border-primary/50 text-gray-800 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs font-bold py-3 border-t border-gray-200 dark:border-dark-border mt-4">
                      <span className="text-gray-500">Order Total Amount:</span>
                      <span className="text-lg text-gray-900 dark:text-white font-extrabold">${total}</span>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-black/5"
                      style={{ 
                        backgroundColor: primaryColor, 
                        borderRadius: `${settings.borderRadius}px`,
                        color: textOnPrimary
                      }}
                    >
                      Authorize & Pay ${total}
                    </button>
                  </form>
                </>
              )}

              {checkoutStep === 'loading' && (
                <div className="py-12 text-center space-y-4">
                  <div className="relative w-16 h-16 mx-auto">
                    <div 
                      className="w-16 h-16 rounded-full border-4 border-slate-100 dark:border-dark-card animate-spin"
                      style={{ borderTopColor: primaryColor }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">Processing Secure Payment</h3>
                    <p className="text-xs text-gray-400 mt-1">Interfacing with secure Stripe checkout gateways...</p>
                  </div>
                </div>
              )}

              {checkoutStep === 'success' && (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Order Completed Successfully!</h3>
                    <p className="text-xs text-gray-400 mt-2">Thank you! A confirmation receipt has been sent to {email}.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark border border-gray-100 dark:border-dark-border space-y-2 text-left max-w-sm mx-auto text-xs">
                    <div className="flex justify-between text-gray-500">
                      <span>Receipt ID:</span>
                      <span className="font-bold text-gray-800 dark:text-white">#PAY-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Ship To Name:</span>
                      <span className="font-bold text-gray-800 dark:text-white">{name}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Total Paid:</span>
                      <span className="font-bold text-gray-800 dark:text-white">${total}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleFinishOrder}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-primary/15 hover:scale-105"
                      style={{ backgroundColor: primaryColor, color: textOnPrimary }}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Customer Footer */}
      <footer className="bg-slate-100 dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border py-12 text-center text-xs text-gray-400 mt-auto">
        <p className="font-semibold text-gray-600 dark:text-gray-300 mb-2">{settings.storeName}</p>
        <p>© 2026. Powered by Cartify SaaS Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}
