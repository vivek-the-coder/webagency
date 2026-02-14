import React, {JSX} from "react";
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
    <section id="pricing" className="py-32 px-4 transition-colors duration-300">
      <Container>
        {/* Heading */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="font-medium">Pricing</span>
            <span className="text-muted-foreground">
              Transparent & Value-Driven
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            Investment for Success
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the package that best aligns with your digital goals. We deliver premium quality at every tier.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col bg-muted/20 backdrop-blur-sm border-border/60 rounded-3xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-muted/30 ${
                tier.highlighted
                  ? "border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10"
                  : ""
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 right-0">
                  <span className="inline-flex rounded-bl-3xl bg-primary px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    {tier.badge}
                  </span>
                </div>
              )}

              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold tracking-tight">{tier.name}</CardTitle>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-lg">{tier.period}</span>
                </div>

                <CardDescription className="mt-4 text-base leading-relaxed">
                  {tier.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-0 flex-1">
                <div className="h-px w-full bg-border/40 mb-8" />
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-base text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-8 pt-0">
                <Button
                  className={`w-full h-14 rounded-2xl text-lg font-bold transition-all duration-300 ${
                    tier.highlighted 
                    ? "bg-primary text-primary-foreground hover:scale-[1.02] shadow-xl shadow-primary/20" 
                    : "bg-muted/50 hover:bg-muted/80"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
