import HeroSection from '../components/sections/HeroSection'
import TrustedBySection from '../components/sections/TrustedBySection'
import FeaturesSection from '../components/sections/FeaturesSection'
import StoreBuilderSection from '../components/sections/StoreBuilderSection'
import AnalyticsSection from '../components/sections/AnalyticsSection'
import TemplatesSection from '../components/sections/TemplatesSection'
import PricingSection from '../components/sections/PricingSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import IntegrationsSection from '../components/sections/IntegrationsSection'
import ResourcesSection from '../components/sections/ResourcesSection'
import FAQSection from '../components/sections/FAQSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <StoreBuilderSection />
      <AnalyticsSection />
      <TemplatesSection />
      <PricingSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <ResourcesSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
