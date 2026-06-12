import { createContext, useContext, useState, useEffect } from 'react'

const StoreContext = createContext()

const DEFAULT_SETTINGS = {
  storeName: 'My Store',
  logoText: 'My Store',
  themeColor: '#00DC82',
  fontFamily: 'Inter',
  borderRadius: 12,
  spacing: 24,
  heroTitle: 'Welcome to My Store',
  heroSubtitle: 'Discover amazing products curated just for you.',
  heroButtonText: 'Shop Now',
  bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80',
  layoutType: 'grid', // grid or list
  geminiApiKey: '',
}

export function StoreProvider({ children }) {
  // Load settings from localStorage or fall back to default settings
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('cartify_builder_settings')
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS
    } catch {
      return DEFAULT_SETTINGS
    }
  })

  // Customer Shopping Cart state for the storefront preview
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cartify_storefront_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Active customizer section (e.g. 'general', 'hero', 'products', 'header')
  const [activeSection, setActiveSection] = useState('general')
  
  // Customizer preview device ('desktop', 'tablet', 'mobile')
  const [previewDevice, setPreviewDevice] = useState('desktop')

  // Save settings when changed
  useEffect(() => {
    localStorage.setItem('cartify_builder_settings', JSON.stringify(settings))
  }, [settings])

  // Save cart when changed
  useEffect(() => {
    localStorage.setItem('cartify_storefront_cart', JSON.stringify(cart))
  }, [cart])

  const updateSettings = (updates) => {
    setSettings(prev => ({ ...prev, ...updates }))
  }

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS)
  }

  // Cart helper functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.product.id === product.id)
      if (existing) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <StoreContext.Provider value={{
      settings,
      updateSettings,
      resetSettings,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      activeSection,
      setActiveSection,
      previewDevice,
      setPreviewDevice
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}
