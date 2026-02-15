"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

export function ContactSection() {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="py-24 px-4 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your vision into reality? Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="shadow-input rounded-2xl bg-card border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="John" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Doe" type="text" required />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="john@company.com" type="email" required />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your Company" type="text" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </LabelInputContainer>

              <button
                className="group/btn relative block h-12 w-full rounded-lg bg-foreground text-background font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
                type="submit"
              >
                Send Message
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="shadow-input rounded-2xl bg-card border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                <ContactInfo
                  icon={<IconMail className="h-5 w-5" />}
                  title="Email"
                  content="hello@agency.com"
                  href="mailto:hello@agency.com"
                />
                <ContactInfo
                  icon={<IconPhone className="h-5 w-5" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactInfo
                  icon={<IconMapPin className="h-5 w-5" />}
                  title="Location"
                  content="San Francisco, CA"
                />
              </div>
            </div>

            <div className="shadow-input rounded-2xl bg-card border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Why work with us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Scalable solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ongoing support & maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const ContactInfo = ({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => {
  const Content = (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {Content}
      </a>
    );
  }

  return Content;
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
