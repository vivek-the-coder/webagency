import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Brain, Rocket, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Strategic Vision",
    description: "We don't just build; we engineer solutions that align with your long-term business trajectory.",
    icon: <Brain className="w-8 h-8 text-primary" />,
  },
  {
    title: "Rapid Execution",
    description: "From concept to deployment, we leverage elite-tier tech stacks to ensure your product hits the market at speed.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
  {
    title: "Uncompromising Quality",
    description: "Every line of code is a reflection of our commitment to excellence, security, and scalability.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
];

export function DefineUs() {
  return (
    <section id="about" className="py-24 bg-background/50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Card 
              key={idx} 
              className="bg-muted/20 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 group rounded-3xl"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {pillar.icon}
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
