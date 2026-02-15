import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Pointer } from "@/components/ui/pointer";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

function DeliverablesPointer() {
  return (
    <Pointer>
      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-primary/20 shadow-lg ring-2 ring-primary/30 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
    </Pointer>
  )
}

export function BentoSection() {
  return (
    <section id="deliverables" className="py-24 px-4 transition-colors duration-300 relative">
      <DeliverablesPointer />
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            What We Deliver
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We build future-proof digital products that combine technical excellence with artistic vision to drive measurable business growth.
          </p>
        </div>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 || i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}

const Skeleton = ({ className, image }: { className?: string; image: string }) => (
  <div className={cn("relative flex flex-1 w-full h-full min-h-[10rem] rounded-xl overflow-hidden border border-border/10", className)}>
    <Image
      src={image}
      alt="Deliverable"
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
  </div>
);

const items = [
  {
    title: "High-Performance Web Apps",
    description: "Scalable, lightning-fast applications built with React, Next.js, and modern tech stacks.",
    header: <Skeleton image="/deliverables/web-apps.png" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Strategic Brand Identity",
    description: "Cohesive design systems that define your market presence and resonate with your audience.",
    header: <Skeleton image="/deliverables/branding.png" />,
    icon: <IconSignature className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Conversion-Led UX",
    description: "User journeys engineered with psychological precision to turn visitors into loyal customers.",
    header: <Skeleton image="/deliverables/ux.png" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "AI-Enhanced Systems",
    description: "Intelligent automation and smart data-driven features to future-proof your business operations.",
    header: <Skeleton image="/deliverables/ai.png" />,
    icon: <IconTableColumn className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Robust Backend Architecture",
    description: "Secure, reliable server-side infrastructure designed for data-intensive and high-traffic operations.",
    header: <Skeleton image="/deliverables/backend.png" />,
    icon: <IconFileBroken className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Seamless API Integrations",
    description: "Connecting your entire digital ecosystem for a fluid, synchronized, and automated experience.",
    header: <Skeleton image="/deliverables/api.png" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Future-Proof Scalability",
    description: "Architecture designed to grow effortlessly with your business, ensuring long-term technical stability.",
    header: <Skeleton image="/deliverables/scalability.png" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-indigo-500" />,
  },
];



