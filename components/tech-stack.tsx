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

export function TechStack() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Our Arsenal
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-foreground">
            Top-tier technologies for world-class products.
          </p>
        </div>
      </Container>
      
      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={techStack}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}

const techStack = [
  {
    name: "Next.js",
    icon: <IconBrandNextjs className="w-6 h-6" />,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs className="w-6 h-6" />,
  },
  {
    name: "Golang",
    icon: <IconBrandGolang className="w-6 h-6" />,
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript className="w-6 h-6" />,
  },
  {
    name: "JavaScript",
    icon: <IconBrandJavascript className="w-6 h-6" />,
  },
  {
    name: "Framer Motion",
    icon: <IconBrandFramerMotion className="w-6 h-6" />,
  },
  {
    name: "GSAP",
    icon: <IconGsap className="w-6 h-6" />,
  },
  {
    name: "Express.js",
    icon: <IconServer className="w-6 h-6" />,
  },
  {
    name: "MongoDB",
    icon: <IconBrandMongodb className="w-6 h-6" />,
  },
  {
    name: "MySQL",
    icon: <IconBrandMysql className="w-6 h-6" />,
  },
  {
    name: "Redis",
    icon: <IconDatabase className="w-6 h-6 text-red-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <IconDatabase className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Supabase",
    icon: <IconBrandSupabase className="w-6 h-6" />,
  },
  {
    name: "Docker",
    icon: <IconBrandDocker className="w-6 h-6" />,
  },
];
