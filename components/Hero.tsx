import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <div className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden antialiased">

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="currentColor"
      />
      <Container className="relative z-10 p-4 pt-40 md:pt-0">
        <h1 className="mt-24 bg-opacity-50 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-center text-5xl font-bold text-transparent md:text-8xl leading-tight">
          Elevate Your <br /> Digital Presence.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg font-normal text-muted-foreground leading-relaxed">
          We build high-performance, aesthetically stunning digital experiences
          that captivate your audience and convert users into customers.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            Explore Our Work
          </button>
          <button className="px-8 py-3 rounded-full border border-border bg-muted/20 backdrop-blur-sm text-foreground font-semibold text-lg hover:bg-muted/30 transition-all duration-300">
            Book a Strategy Call
          </button>
        </div>
      </Container>
    </div>
  );
}

