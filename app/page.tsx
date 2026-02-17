import { Hero } from "@/components/Hero"
import { Skiper19 } from "@/components/Good-Animation"
import { Navbar } from "@/components/Navbar"
import { GlowingEffectDemo } from "@/components/DefineUs"
import { AnimatedTestimonialsDemo } from "@/components/Testimonial"
import { TechStack } from "@/components/tech-stack"
// import { BentoSection } from "@/components/Grid"
import PricingCards from "@/components/Pricing"
import FAQ from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { ContactSection } from "@/components/Contact"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <Skiper19 />
      </div>
      <GlowingEffectDemo />
      <TechStack />
      <AnimatedTestimonialsDemo />
      {/* <BentoSection /> */}
      <PricingCards />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}