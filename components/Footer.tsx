"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="h-10 w-10 bg-foreground rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-background"
      >
        <path
          d="M12 4L4 20H8L12 12L16 20H20L12 4Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <span className="text-2xl font-bold tracking-tighter text-foreground">
      DevStudio
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
    <footer className="relative w-full bg-background px-4 py-24 border-t border-border overflow-hidden transition-colors duration-300">
      {/* Background Large Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05]">
        <h1 className="text-[20vw] font-bold tracking-tighter text-foreground whitespace-nowrap">
          DevStudio
        </h1>
      </div>

      <Container className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
        <div className="flex flex-col items-start justify-start gap-4 mb-2 lg:mb-0">
          <Logo />
          {/* <p className="text-muted-foreground/60 text-sm tracking-tight mt-2">
            © copyright DevStudios 2024. All rights reserved.
          </p> */}
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-24 w-full lg:w-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col items-start justify-start gap-6">
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase">
                {section.title}
              </h4>
              <div className="flex flex-col items-start justify-start gap-4">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="text-[15px] text-muted-foreground hover:text-foreground transition-colors duration-200"
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
