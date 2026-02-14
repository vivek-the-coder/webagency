import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { DefineUs } from "@/components/DefineUs"
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
      <DefineUs />
      <TechStack />
      {/* <BentoSection /> */}
      <PricingCards />
      <FAQ />
      <Footer />
    </main>
  )
}