"use client";

import { Box, Lock, Search, Settings, Sparkles, Brain, Rocket, ShieldCheck, Cpu, Users, LineChart, Layers } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const pillars = [
  {
    title: "Strategic Vision",
    description:
      "We engineer solutions aligned with your long-term roadmap, ensuring every feature contributes to measurable business growth.",
    icon: Brain,
  },
  {
    title: "Rapid Execution",
    description:
      "Our streamlined workflows and modern tooling let us move from idea to production at startup speed without sacrificing stability.",
    icon: Rocket,
  },

  {
    title: "Advanced Technology Stack",
    description:
      "From modern frontend frameworks to distributed backend systems, we use battle-tested technologies built for performance and scale.",
    icon: Cpu,
  },
  {
    title: "User-Centered Design",
    description:
      "Every product decision starts with user behavior, ensuring intuitive interfaces that drive engagement and retention.",
    icon: Users,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "We integrate analytics, performance metrics, and behavioral insights to continuously refine and optimize your product.",
    icon: LineChart,
  },
  {
    title: "Scalable Architecture",
    description:
      "Our systems are designed for growth — whether you're serving hundreds of users today or millions tomorrow.",
    icon: Layers,
  },
];

import { motion } from "framer-motion";

// ... existing imports

export function GlowingEffectDemo() {
  return (
    <div className="py-20 relative font-jakarta">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight text-[#547792] dark:text-[#AAC4F5]">How we actually work</h2>
        <ul className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <GridItem
              key={pillar.title}
              icon={<pillar.icon className="h-4 w-4 text-black dark:text-neutral-400" />}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
