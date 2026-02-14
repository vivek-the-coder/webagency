"use client"

import React, { JSX } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

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
    <section id="faq" className="py-32 px-4 font-jakarta">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
      <Container>
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-32">
          
          {/* Left side */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
              FAQ
            </h2>
            <p className="text-foreground/70 text-xl max-w-[300px] leading-relaxed font-medium">
              Everything you need to know about working with AGENCY and our delivery process.
            </p>
          </div>

          {/* Right side */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-none rounded-2xl px-6 bg-foreground/5 transition-all duration-300 group overflow-hidden mb-4 hover:shadow-[0_10px_20px_rgba(66,122,118,0.05)]"
                >
                  <AccordionTrigger className="text-left text-xl lg:text-2xl font-bold py-6 hover:no-underline transition-all group-hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-foreground/70 text-lg leading-relaxed pb-6 font-medium">
                    {faq.answer}
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </Container>
      </motion.div>
    </section>
  )
}
