"use client";

import React from "react";
import { Brain, Cpu, Layers, LineChart, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Pointer } from "@/components/ui/pointer";
import { Container } from "@/components/ui/container";

function AnimatedHeartPointer() {
  return (
    <motion.div
      animate={{
        scale: [0.8, 1, 0.8],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-600"
      >
        <motion.path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}

function CustomShapePointer() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" className="fill-purple-500" />
      <circle cx="12" cy="12" r="5" className="fill-white" />
    </svg>
  );
}

type PointerConfig =
  | { content: React.ReactNode }
  | { className: string };

const cardPointers: PointerConfig[] = [
  { content: <AnimatedHeartPointer key="0" /> },
  { className: "fill-amber-500" },
  { content: <CustomShapePointer key="2" /> },
  { className: "fill-sky-500" },
  { content: <div key="4" className="text-2xl">👆</div> },
  { className: "fill-emerald-500" },
];

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

export function GlowingEffectDemo() {
  return (
    <div className="mt-10 relative font-jakarta">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold text-center md:ml-[170px] mb-10 tracking-tight text-[#547792] dark:text-[#AAC4F5]">How we actually work</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <GridItem
                key={pillar.title}
                pointerIndex={index}
                icon={<pillar.icon className="h-4 w-4 text-black dark:text-neutral-400" />}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </ul>
        </Container>
      </motion.div>
    </div>
  );
}

interface GridItemProps {
  pointerIndex: number;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ pointerIndex, icon, title, description }: GridItemProps) => {
  const pointerConfig = cardPointers[pointerIndex];
  const pointerClassName = "className" in pointerConfig ? pointerConfig.className : undefined;
  const pointerContent = "content" in pointerConfig ? pointerConfig.content : undefined;

  return (
    <li className="min-h-[14rem] list-none relative">
      <Pointer className={pointerClassName}>{pointerContent}</Pointer>
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
