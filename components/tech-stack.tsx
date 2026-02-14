"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { 
  IconBrandNextjs, 
  IconBrandNodejs, 
  IconBrandGolang, 
  IconBrandTypescript, 
  IconBrandJavascript, 
  IconBrandMongodb, 
  IconBrandMysql, 
  IconBrandDocker, 
  IconDatabase,
  IconBrandFramerMotion,
  IconBrandCss3 as IconGsap,
  IconBrandSupabase,
  IconServer
} from "@tabler/icons-react";
import { Container } from "@/components/ui/container";

import { motion } from "framer-motion";

// ... existing imports

export function TechStack() {
  return (
    <section className="py-24 font-jakarta overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/20 px-4 py-1.5 text-sm text-foreground">
              <span className="font-bold">Our Stack</span>
              <span className="text-foreground/70">Modern & Scalable</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Top-tier technologies for <br /> world-class products.
            </h2>
          </div>
        </Container>
        
        <div className=" flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStack}
            direction="left"
            speed="slow"
          />
        </div>
      </motion.div>
    </section>
  );
}

const techStack = [
  {
    name: "Next.js",
    icon: <IconBrandNextjs className="w-12 h-12 text-black dark:text-white" />,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs className="w-12 h-12 text-[#339933]" />,
  },
  {
    name: "Golang",
    icon: <IconBrandGolang className="w-12 h-12 text-[#00ADD8]" />,
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript className="w-12 h-12 text-[#3178C6]" />,
  },
  {
    name: "JavaScript",
    icon: <IconBrandJavascript className="w-12 h-12 text-[#F7DF1E]" />,
  },
  {
    name: "Framer Motion",
    icon: <IconBrandFramerMotion className="w-12 h-12 text-black dark:text-white" />,
  },
  {
    name: "GSAP",
    icon: <IconGsap className="w-12 h-12 text-[#88CE02]" />,
  },
  {
    name: "Express.js",
    icon: <IconServer className="w-12 h-12 text-black dark:text-white" />,
  },
  {
    name: "MongoDB",
    icon: <IconBrandMongodb className="w-12 h-12 text-[#47A248]" />,
  },
  {
    name: "MySQL",
    icon: <IconBrandMysql className="w-12 h-12 text-[#00758F]" />,
  },
  {
    name: "Redis",
    icon: <IconDatabase className="w-12 h-12 text-[#DC382D]" />,
  },
  {
    name: "PostgreSQL",
    icon: <IconDatabase className="w-12 h-12 text-[#336791]" />,
  },
  {
    name: "Supabase",
    icon: <IconBrandSupabase className="w-12 h-12 text-[#3ECF8E]" />,
  },
  {
    name: "Docker",
    icon: <IconBrandDocker className="w-12 h-12 text-[#2496ED]" />,
  },
];
