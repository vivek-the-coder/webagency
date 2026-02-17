"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer font-jakarta">
    <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
      <div className="h-5 w-5 rounded-full bg-foreground" />
    </div>
    <span className="text-xl font-bold tracking-tighter text-foreground">
      DevStudios
    </span>
  </div>
);

export function Footer() {
  const sections = [
    {
      title: "Pages",
      links: [
        { label: "All Products", href: "#" },
        { label: "Studio", href: "#" },

      ],
    },
    {
      title: "Socials",
      links: [
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },

      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Register",
      links: [
        { label: "Sign Up", href: "#" },
        { label: "Login", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-background px-4 pt-24 sm:pt-36 md:pt-52 pb-24 sm:pb-40 md:pb-64 font-jakarta border-none overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[5%] pointer-events-none select-none opacity-[0.05]">
        <h1 className="text-[25vw] font-bold tracking-tighter text-foreground whitespace-nowrap leading-none">
          STALUX
        </h1>
      </div>

      <Container className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-40">
        <div className="flex flex-col items-start justify-start gap-4 mb-2 lg:mb-0">
          <Logo />
          {/* <p className="text-muted-foreground/60 text-sm tracking-tight mt-2">
            © copyright DevStudios 2024. All rights reserved.
          </p> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-16 sm:gap-x-12 sm:gap-y-24 lg:gap-x-24 w-full lg:w-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col items-start justify-start gap-8">
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase">
                {section.title}
              </h4>
              <div className="flex flex-col items-start justify-start gap-5">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
