"use client"
import {
  Navbar as NavbarContainer,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Process", link: "#process" },
    { name: "Testimonials", link: "#testimonials" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer className="mt-4 px-4">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler
            className={cn(
              "relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            )}
            aria-label="Toggle theme"
          />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-background/95 backdrop-blur-xl border border-border"
        >
          <div className="flex flex-col gap-5 py-2">
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 touch-manipulation"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex w-full flex-col gap-4 mt-auto pt-4 pb-2 border-t border-border">
            <AnimatedThemeToggler
              className={cn(
                "relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/50 transition-all duration-300 hover:bg-muted"
              )}
              aria-label="Toggle theme"
            />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarContainer>
  );
}

