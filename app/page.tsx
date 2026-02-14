import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { GlowingEffectDemo } from "@/components/DefineUs"
import { AnimatedTestimonialsDemo } from "@/components/Testimonial"
import { TechStack } from "@/components/tech-stack"
// import { BentoSection } from "@/components/Grid"
import PricingCards from "@/components/Pricing"
import FAQ from "@/components/Faq"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <GlowingEffectDemo />
      <TechStack />
      <AnimatedTestimonialsDemo />
      {/* <BentoSection /> */}
      <PricingCards />
      <FAQ />
      <Footer />
    </main>
  )
}