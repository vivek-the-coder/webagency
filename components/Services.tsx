"use client";
import React from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Brand Strategy",
    description: "Crafting unique identities that resonate with your target audience and stand the test of time.",
    className: "md:col-span-2",
    icon: "🎨",
  },
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications using the latest modern tech stacks.",
    className: "md:col-span-1",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and aesthetically pleasing interfaces that enhance user engagement.",
    className: "md:col-span-1",
    icon: "✨",
  },
  {
    title: "AI Integration",
    description: "Leveraging cutting-edge AI to automate workflows and provide intelligent user experiences.",
    className: "md:col-span-2",
    icon: "🧠",
  },
];

export function Services() {
  return (
    <section id="services-detailed" className="py-24 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            Our Expertise
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide end-to-end solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative p-8 rounded-3xl border border-border bg-muted/20 backdrop-blur-sm hover:bg-muted/30 transition-all duration-300 overflow-hidden",
                service.className
              )}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-300 text-6xl">
                {service.icon}
              </div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
