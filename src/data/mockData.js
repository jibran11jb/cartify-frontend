// Mock data for charts, products, orders, customers, etc.

export const revenueData = [
  { month: 'Jan', revenue: 42000, orders: 320, visitors: 8200 },
  { month: 'Feb', revenue: 58000, orders: 410, visitors: 9800 },
  { month: 'Mar', revenue: 51000, orders: 380, visitors: 8900 },
  { month: 'Apr', revenue: 73000, orders: 520, visitors: 12400 },
  { month: 'May', revenue: 89000, orders: 640, visitors: 15600 },
  { month: 'Jun', revenue: 95000, orders: 710, visitors: 18200 },
  { month: 'Jul', revenue: 112000, orders: 830, visitors: 21000 },
  { month: 'Aug', revenue: 128000, orders: 940, visitors: 24500 },
  { month: 'Sep', revenue: 108000, orders: 790, visitors: 20100 },
  { month: 'Oct', revenue: 145000, orders: 1060, visitors: 28000 },
  { month: 'Nov', revenue: 178000, orders: 1290, visitors: 34500 },
  { month: 'Dec', revenue: 210000, orders: 1520, visitors: 42000 },
]

export const weeklyData = [
  { day: 'Mon', sales: 4200, returns: 120 },
  { day: 'Tue', sales: 5800, returns: 180 },
  { day: 'Wed', sales: 3900, returns: 95 },
  { day: 'Thu', sales: 7200, returns: 210 },
  { day: 'Fri', sales: 9100, returns: 280 },
  { day: 'Sat', sales: 11400, returns: 340 },
  { day: 'Sun', sales: 8700, returns: 260 },
]

export const categoryData = [
  { name: 'Fashion', value: 35, color: '#00DC82' },
  { name: 'Electronics', value: 28, color: '#14B8A6' },
  { name: 'Beauty', value: 18, color: '#6366f1' },
  { name: 'Furniture', value: 12, color: '#f59e0b' },
  { name: 'Food', value: 7, color: '#ef4444' },
]

export const products = [
  { id: 1, name: 'Premium Leather Jacket', category: 'Fashion', price: 299, stock: 45, sold: 234, status: 'Active', image: '🧥', revenue: 69966 },
  { id: 2, name: 'Wireless Noise-Cancel Headphones', category: 'Electronics', price: 199, stock: 128, sold: 891, status: 'Active', image: '🎧', revenue: 177309 },
  { id: 3, name: 'Luxury Face Serum', category: 'Beauty', price: 89, stock: 312, sold: 1204, status: 'Active', image: '✨', revenue: 107156 },
  { id: 4, name: 'Ergonomic Office Chair', category: 'Furniture', price: 449, stock: 23, sold: 67, status: 'Low Stock', image: '🪑', revenue: 30083 },
  { id: 5, name: 'Artisan Coffee Blend', category: 'Food', price: 34, stock: 500, sold: 3421, status: 'Active', image: '☕', revenue: 116314 },
  { id: 6, name: 'Smart Watch Pro', category: 'Electronics', price: 349, stock: 76, sold: 445, status: 'Active', image: '⌚', revenue: 155305 },
  { id: 7, name: 'Yoga Mat Premium', category: 'Fashion', price: 79, stock: 0, sold: 892, status: 'Out of Stock', image: '🧘', revenue: 70468 },
  { id: 8, name: 'Digital Art Course', category: 'Digital', price: 149, stock: 999, sold: 2341, status: 'Active', image: '🎨', revenue: 348809 },
]

export const orders = [
  { id: '#ORD-8821', customer: 'Sarah Johnson', email: 'sarah@example.com', product: 'Premium Leather Jacket', amount: 299, status: 'Delivered', date: '2024-12-10', avatar: 'SJ' },
  { id: '#ORD-8820', customer: 'Michael Chen', email: 'mchen@example.com', product: 'Wireless Headphones', amount: 199, status: 'Processing', date: '2024-12-10', avatar: 'MC' },
  { id: '#ORD-8819', customer: 'Emma Davis', email: 'emma@example.com', product: 'Luxury Face Serum', amount: 178, status: 'Shipped', date: '2024-12-09', avatar: 'ED' },
  { id: '#ORD-8818', customer: 'James Wilson', email: 'jwilson@example.com', product: 'Smart Watch Pro', amount: 698, status: 'Delivered', date: '2024-12-09', avatar: 'JW' },
  { id: '#ORD-8817', customer: 'Olivia Martinez', email: 'olivia@example.com', product: 'Ergonomic Chair', amount: 449, status: 'Cancelled', date: '2024-12-08', avatar: 'OM' },
  { id: '#ORD-8816', customer: 'Noah Brown', email: 'noah@example.com', product: 'Digital Art Course', amount: 149, status: 'Delivered', date: '2024-12-08', avatar: 'NB' },
  { id: '#ORD-8815', customer: 'Ava Thompson', email: 'ava@example.com', product: 'Artisan Coffee', amount: 102, status: 'Processing', date: '2024-12-07', avatar: 'AT' },
  { id: '#ORD-8814', customer: 'Liam Anderson', email: 'liam@example.com', product: 'Yoga Mat Premium', amount: 79, status: 'Shipped', date: '2024-12-07', avatar: 'LA' },
]

export const customers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', orders: 12, spent: 3490, location: 'New York, US', joined: '2023-01-15', avatar: 'SJ', status: 'VIP' },
  { id: 2, name: 'Michael Chen', email: 'mchen@example.com', orders: 8, spent: 2100, location: 'San Francisco, US', joined: '2023-03-22', avatar: 'MC', status: 'Active' },
  { id: 3, name: 'Emma Davis', email: 'emma@example.com', orders: 24, spent: 5670, location: 'London, UK', joined: '2022-11-08', avatar: 'ED', status: 'VIP' },
  { id: 4, name: 'James Wilson', email: 'jwilson@example.com', orders: 3, spent: 890, location: 'Toronto, CA', joined: '2024-02-14', avatar: 'JW', status: 'Active' },
  { id: 5, name: 'Olivia Martinez', email: 'olivia@example.com', orders: 16, spent: 4230, location: 'Madrid, ES', joined: '2023-07-30', avatar: 'OM', status: 'VIP' },
  { id: 6, name: 'Noah Brown', email: 'noah@example.com', orders: 1, spent: 149, location: 'Sydney, AU', joined: '2024-11-20', avatar: 'NB', status: 'New' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'Founder, LuxeStyle Co.',
    avatar: 'AC',
    rating: 5,
    text: 'Cartify completely transformed our business. We went from $10K to $180K monthly revenue in just 8 months. The analytics dashboard alone is worth every penny.',
    metrics: '+1700% Revenue Growth',
    color: '#00DC82',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CEO, TechGadgets Store',
    avatar: 'MR',
    rating: 5,
    text: "The store builder is incredibly intuitive. We launched our store in under 2 hours without any coding knowledge. Our conversion rate improved by 340% compared to our old platform.",
    metrics: '340% Higher Conversions',
    color: '#14B8A6',
  },
  {
    id: 3,
    name: 'Sarah Park',
    role: 'Owner, Bloom Beauty',
    avatar: 'SP',
    rating: 5,
    text: 'Switching to Cartify was the best business decision we made. The inventory management and marketing tools save us 20+ hours weekly. Absolutely phenomenal platform.',
    metrics: '20+ Hours Saved Weekly',
    color: '#6366f1',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Director, FreshMart Global',
    avatar: 'DK',
    rating: 5,
    text: 'We manage 3 stores across 12 countries with Cartify. The multi-currency support and enterprise features are outstanding. Customer support is world-class.',
    metrics: '3 Stores, 12 Countries',
    color: '#f59e0b',
  },
  {
    id: 5,
    name: 'Emily Watson',
    role: 'Co-founder, DigitalCraft',
    avatar: 'EW',
    rating: 5,
    text: 'The digital products feature is a game-changer. We sell courses and digital downloads seamlessly. Processing $2M+ annually with zero issues.',
    metrics: '$2M+ Annual Revenue',
    color: '#ec4899',
  },
]

export const faqs = [
  {
    q: 'How quickly can I launch my store?',
    a: 'Most merchants launch their store within 24 hours. Our guided setup wizard walks you through everything — from choosing a template to adding products and setting up payments. No technical skills required.',
  },
  {
    q: 'What payment methods does Cartify support?',
    a: 'Cartify supports 100+ payment methods including Stripe, PayPal, Apple Pay, Google Pay, and local payment gateways in 150+ countries. We also support buy-now-pay-later options like Klarna and Afterpay.',
  },
  {
    q: 'Can I migrate from Shopify or WooCommerce?',
    a: 'Absolutely! We have a one-click migration tool that imports your products, customers, orders, and blog posts from Shopify, WooCommerce, BigCommerce, and most other platforms. Migration typically takes under 30 minutes.',
  },
  {
    q: 'Is there a transaction fee?',
    a: 'Cartify does not charge additional transaction fees on top of payment processor fees. This alone saves most merchants 0.5-2% compared to other platforms, which adds up to thousands of dollars annually.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'All plans include 24/7 live chat support. Growth and Enterprise plans also include priority phone support, a dedicated account manager, and access to our expert onboarding team.',
  },
  {
    q: 'Can I use my own domain?',
    a: 'Yes! You can connect any custom domain you already own, or purchase a new domain directly through Cartify. We handle SSL certificates automatically at no extra cost.',
  },
  {
    q: 'Is Cartify suitable for large businesses?',
    a: 'Definitely. Our Enterprise plan is built for high-volume merchants processing millions in sales. We offer custom API integrations, dedicated infrastructure, SLAs, and white-glove onboarding for enterprise clients.',
  },
]

export const integrations = [
  { name: 'Stripe', icon: '💳', color: '#635BFF', desc: 'Payments' },
  { name: 'PayPal', icon: '🅿️', color: '#003087', desc: 'Checkout' },
  { name: 'Meta Ads', icon: '📘', color: '#1877F2', desc: 'Marketing' },
  { name: 'Google', icon: '🔍', color: '#4285F4', desc: 'Analytics' },
  { name: 'Mailchimp', icon: '📧', color: '#FFE01B', desc: 'Email' },
  { name: 'Zapier', icon: '⚡', color: '#FF4A00', desc: 'Automation' },
  { name: 'Klaviyo', icon: '📊', color: '#00B4B6', desc: 'Marketing' },
  { name: 'ShipStation', icon: '📦', color: '#46ABE4', desc: 'Shipping' },
]

export const templates = [
  { id: 1, name: 'LuxeMode', category: 'Fashion', preview: '👗', rating: 4.9, reviews: 234, tag: 'Popular', colors: ['#1a1a2e', '#e94560'] },
  { id: 2, name: 'TechPulse', category: 'Electronics', preview: '💻', rating: 4.8, reviews: 187, tag: 'New', colors: ['#0f0c29', '#302b63'] },
  { id: 3, name: 'GlowUp', category: 'Beauty', preview: '💄', rating: 4.9, reviews: 312, tag: 'Popular', colors: ['#ffecd2', '#fcb69f'] },
  { id: 4, name: 'HomeNest', category: 'Furniture', preview: '🛋️', rating: 4.7, reviews: 156, tag: '', colors: ['#d4a853', '#2c3e50'] },
  { id: 5, name: 'FreshBites', category: 'Food', preview: '🍕', rating: 4.8, reviews: 201, tag: 'Trending', colors: ['#ff6b35', '#004e89'] },
  { id: 6, name: 'DigitalHub', category: 'Digital', preview: '🎮', rating: 4.9, reviews: 445, tag: 'Best Seller', colors: ['#6c5ce7', '#00cec9'] },
  { id: 7, name: 'SportZone', category: 'Fashion', preview: '👟', rating: 4.7, reviews: 178, tag: '', colors: ['#2d3436', '#00b894'] },
  { id: 8, name: 'ArtSpace', category: 'Digital', preview: '🎨', rating: 4.8, reviews: 267, tag: 'New', colors: ['#fd79a8', '#6c5ce7'] },
  { id: 9, name: 'PetLove', category: 'Food', preview: '🐾', rating: 4.9, reviews: 123, tag: 'Trending', colors: ['#fdcb6e', '#e17055'] },
  { id: 10, name: 'CleanSkin', category: 'Beauty', preview: '🧴', rating: 4.8, reviews: 298, tag: '', colors: ['#dfe6e9', '#74b9ff'] },
  { id: 11, name: 'GadgetPro', category: 'Electronics', preview: '📱', rating: 4.7, reviews: 192, tag: 'Popular', colors: ['#2d3436', '#0984e3'] },
  { id: 12, name: 'CozyHouse', category: 'Furniture', preview: '🏠', rating: 4.8, reviews: 145, tag: 'New', colors: ['#b2bec3', '#636e72'] },
]

export const blogPosts = [
  {
    id: 1,
    title: '10 Proven Strategies to Increase Your E-Commerce Conversion Rate',
    excerpt: 'Learn the battle-tested techniques that top Cartify merchants use to convert browsers into buyers and grow their revenue by 300%+.',
    category: 'Growth',
    readTime: '8 min read',
    date: 'Dec 10, 2024',
    author: 'Riya Patel',
    authorRole: 'Growth Expert',
    image: '📈',
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'The Complete Guide to Product Photography for Online Stores',
    excerpt: 'Beautiful product photos are the #1 driver of online sales. Here\'s how to create stunning visuals on any budget.',
    category: 'Marketing',
    readTime: '12 min read',
    date: 'Dec 8, 2024',
    author: 'Alex Morgan',
    authorRole: 'Design Lead',
    image: '📸',
    tag: '',
  },
  {
    id: 3,
    title: 'How to Use Email Marketing to Build Customer Loyalty',
    excerpt: 'Email marketing delivers $42 for every $1 spent. Here\'s our complete playbook for building sequences that convert and retain.',
    category: 'Email',
    readTime: '10 min read',
    date: 'Dec 5, 2024',
    author: 'Sam Lee',
    authorRole: 'Email Strategist',
    image: '📧',
    tag: 'Popular',
  },
  {
    id: 4,
    title: 'Global Expansion: How to Sell in 50+ Countries with Cartify',
    excerpt: 'Going global? Here\'s everything you need to know about currencies, taxes, shipping, and localization with Cartify\'s tools.',
    category: 'Enterprise',
    readTime: '15 min read',
    date: 'Dec 3, 2024',
    author: 'Chris Han',
    authorRole: 'Enterprise Lead',
    image: '🌍',
    tag: '',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: 'Perfect for new entrepreneurs and small stores',
    color: '#6366f1',
    popular: false,
    features: [
      'Up to 100 products',
      '2 staff accounts',
      'Basic analytics',
      '24/7 chat support',
      'SSL certificate',
      'Custom domain',
      'Abandoned cart recovery',
      'Mobile-optimized store',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    monthlyPrice: 79,
    yearlyPrice: 63,
    description: 'For growing businesses ready to scale',
    color: '#00DC82',
    popular: true,
    features: [
      'Unlimited products',
      '15 staff accounts',
      'Advanced analytics',
      'Priority support + phone',
      'Everything in Starter',
      'Marketing automation',
      'Inventory forecasting',
      'Multi-currency support',
      'API access',
      'Gift cards & loyalty',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 299,
    yearlyPrice: 239,
    description: 'Custom solutions for high-volume merchants',
    color: '#14B8A6',
    popular: false,
    features: [
      'Everything in Growth',
      'Unlimited staff accounts',
      'Dedicated account manager',
      'Custom API integrations',
      'SLA guarantee',
      'White-glove onboarding',
      'Custom reporting',
      'Multi-store management',
      'Enterprise SSO',
      'Custom contract & billing',
    ],
    cta: 'Contact Sales',
  },
]
