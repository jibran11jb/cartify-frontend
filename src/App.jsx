import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { StoreProvider } from './context/StoreContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Pricing from './pages/Pricing'
import Templates from './pages/Templates'
import Blog from './pages/Blog'
import Docs from './pages/Docs'
import Contact from './pages/Contact'
import About from './pages/About'
import HelpCenter from './pages/HelpCenter'
import StorePreview from './pages/StorePreview'

// Dashboard
import DashboardLayout from './pages/dashboard/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Products from './pages/dashboard/Products'
import Orders from './pages/dashboard/Orders'
import Customers from './pages/dashboard/Customers'
import Analytics from './pages/dashboard/Analytics'
import StoreBuilder from './pages/dashboard/StoreBuilder'
import Settings from './pages/dashboard/Settings'

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
          {/* Public routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/pricing" element={<PublicLayout><Pricing /></PublicLayout>} />
          <Route path="/templates" element={<PublicLayout><Templates /></PublicLayout>} />
          <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
          <Route path="/docs" element={<PublicLayout><Docs /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/help" element={<PublicLayout><HelpCenter /></PublicLayout>} />
          <Route path="/features" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/solutions" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/enterprise" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/integrations" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/resources" element={<PublicLayout><Blog /></PublicLayout>} />

          {/* Auth routes (no nav/footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/store-preview" element={<StorePreview />} />

          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="builder" element={<StoreBuilder />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={
            <PublicLayout>
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="text-8xl mb-6">🛒</div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
                <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-primary px-6 py-3">Go Home →</a>
              </div>
            </PublicLayout>
          } />
        </Routes>
      </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  )
}
