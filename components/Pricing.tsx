"use client";

import React, { JSX } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/project",
    description: "Perfect for startups and simple landing pages.",
    features: [
      "Custom UI/UX Design",
      "Next.js Development",
      "Mobile Responsive",
      "Basic SEO Optimization",
      "1 Month Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "/project",
    description: "Comprehensive solutions for growing businesses.",
    badge: "Most Popular",
    features: [
      "Advanced Web Application",
      "E-commerce Integration",
      "Custom Animations",
      "Advanced SEO & Performance",
      "CMS Implementation",
      "3 Months Support",
    ],
    cta: "Start Your Project",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored complex systems for large scale operations.",
    features: [
      "Custom AI Integrations",
      "Scalable Backend Architecture",
      "Multi-platform Ecosystem",
      "Dedicated Project Manager",
      "24/7 Priority Support",
      "Cloud Infrastructure Setup",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function PricingCards(): JSX.Element {
  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4 font-jakarta">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          {/* Heading */}
          <div className="mb-12 md:mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/20 px-4 py-1.5 text-sm text-foreground">
              <span className="font-bold">Pricing</span>
              <span className="text-foreground/70">
                Transparent & Value-Driven
              </span>
            </div>

            <h2 className="mb-4 md:mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl text-foreground">
              Investment for Success
            </h2>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
              Choose the package that best aligns with your digital goals. We deliver premium quality at every tier.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col bg-foreground/5 backdrop-blur-xl border-none rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(66,122,118,0.1)] ${tier.highlighted
                  ? "ring-2 ring-primary md:scale-105 z-10"
                  : ""
                  }`}
              >
                {tier.badge && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-flex rounded-bl-3xl bg-primary px-6 py-2 text-xs font-bold uppercase tracking-widest text-foreground">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold tracking-tight text-foreground">{tier.name}</CardTitle>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tracking-tighter text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-foreground/50 text-lg font-medium">{tier.period}</span>
                  </div>

                  <CardDescription className="mt-4 text-base leading-relaxed text-foreground/70 font-medium">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8 pt-0 flex-1">
                  <div className="h-px w-full bg-foreground/10 mb-8" />
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                          <Check className="h-3.5 w-3.5 text-foreground" strokeWidth={3} />
                        </div>
                        <span className="text-base text-foreground/70 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <button
                    className={cn(
                      "w-full h-14 rounded-2xl text-lg font-bold transition-all duration-300 active:scale-[0.98] touch-manipulation",
                      tier.highlighted
                        ? "bg-primary text-foreground hover:scale-[1.02] shadow-xl shadow-primary/20"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    )}
                  >
                    {tier.cta}
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
