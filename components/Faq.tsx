"use client"

import React, { JSX } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/ui/container"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What services does DevStudio offer?",
    answer:
      "We specialize in high-performance web applications, strategic brand identity, custom AI integrations, and scalable cloud infrastructure. From initial design to final deployment, we provide a full-cycle development experience tailored to your business goals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on complexity. A dedicated landing page can take 2-3 weeks, while a complex SaaS platform or enterprise internal tool typically spans 3-6 months. We follow an iterative approach with regular milestones to ensure transparency.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. We provide flexible maintenance packages that include security updates, performance monitoring, and feature enhancements. Our goal is to be a long-term partner in your digital growth.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We believe in radical transparency. You'll have dedicated access to a project dashboard (usually Slack or Linear), weekly sync calls, and a staging environment where you can track live progress at any time.",
  },
  {
    question: "Can you work with my existing team/stack?",
    answer:
      "Yes, we often collaborate with internal technical teams or take over existing codebases. We have deep expertise in React, Next.js, Node.js, and modern cloud architectures (AWS/GCP/Vercel).",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "Each project is unique. We provide custom quotes based on project scope, technical requirements, and timeline. Contact us for a free consultation and a detailed proposal tailored to your vision.",
  },
]

export default function FAQ(): JSX.Element {
  return (
    <section id="faq" className="py-32 px-4 bg-background/50 border-t border-border/50">
      <Container>
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-32">
          
          {/* Left side */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
              FAQ
            </h2>
            <p className="text-muted-foreground text-lg max-w-[300px] leading-relaxed">
              Everything you need to know about working with DevStudio and our delivery process.
            </p>
          </div>

          {/* Right side */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border border-border/60 rounded-2xl px-4 bg-muted/20 backdrop-blur-sm hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 group overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-xl lg:text-2xl font-bold py-4 hover:no-underline transition-all group-hover:pl-2">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-4 pl-2">
                    {faq.answer}
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </Container>
    </section>
  )
}
