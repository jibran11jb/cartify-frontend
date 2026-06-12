# Cartify 🛒

A premium, full-featured SaaS e-commerce platform frontend inspired by Shopify, Stripe, and Framer.

![Cartify](https://img.shields.io/badge/Cartify-E--Commerce%20Platform-00DC82?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

**🔗 [Live Demo](#) | 📖 [Documentation](#)**

## 📸 Screenshots

*(Replace these placeholders with actual screenshots of your app!)*

<p align="center">
  <img src="https://placehold.co/800x450/0f172a/00dc82?text=Landing+Page+Screenshot" width="48%" alt="Landing Page">
  <img src="https://placehold.co/800x450/0f172a/00dc82?text=Dashboard+Screenshot" width="48%" alt="Dashboard">
</p>
<p align="center">
  <img src="https://placehold.co/800x450/0f172a/00dc82?text=Store+Builder+Screenshot" width="48%" alt="Store Builder">
  <img src="https://placehold.co/800x450/0f172a/00dc82?text=AI+Chatbot+Screenshot" width="48%" alt="AI Chatbot">
</p>

## ✨ Features

- 🌙 **Dark / Light Mode** — System-aware with localStorage persistence
- 🎨 **Glassmorphism UI** — Premium frosted-glass cards and panels
- 🚀 **Framer Motion Animations** — Smooth page transitions, scroll-triggered reveals, floating elements
- 📊 **Recharts Dashboards** — Area, Bar, Pie charts with real-looking mock data
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- ⚡ **Vite 5** — Blazing fast development with HMR

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI Framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| React Router | 6 | Routing |
| Recharts | 2 | Charts |
| Lucide React | 0.4 | Icons |

## 🗂️ Pages

### Landing Page (16 Sections)
- Hero with floating dashboard mockup
- Infinite trusted-by carousel
- 8-feature card grid
- Interactive store builder showcase
- Analytics with animated counters
- 12-template marketplace
- 3-tier pricing with monthly/yearly toggle
- Auto-sliding testimonials
- Integrations orbital hub
- Resources & blog previews
- Accordion FAQ
- CTA with gradient mesh

### Auth
- `/login` — Glassmorphism login
- `/signup` — 2-step signup flow

### Dashboard (`/dashboard`)
- Main dashboard — Stats, charts, orders, products
- Store Builder — 3-panel drag-and-drop UI
- Products, Orders, Customers management
- Full Analytics page
- Settings with tab navigation

### Marketing
- Pricing, Templates, Blog, Docs, Contact, About, Help Center

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Primary | `#00DC82` | Buttons, highlights, CTAs |
| Accent | `#14B8A6` | Secondary actions, accents |
| Secondary | `#0F172A` | Dark backgrounds |
| Dark BG | `#0B1220` | Dark mode background |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # All landing page sections
│   └── dashboard/   # Dashboard sidebar
├── pages/
│   ├── dashboard/   # Dashboard pages
│   └── *.jsx        # Marketing & auth pages
├── context/         # ThemeContext (dark/light)
└── data/            # Mock data (products, orders, charts)
```

## 📄 License

MIT © 2024 Cartify
