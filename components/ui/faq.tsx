import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: 'What does "Being.Lagom" mean, and how do you pronounce it?',
    content:
      '"Being.Lagom" is a Swedish term that roughly translates to "just the right amount" or "balanced living." Pronouncing it is as easy as finding that perfect balance – La-gom, just like sipping your favorite hot beverage!',
  },
  {
    id: "2",
    title: "How can I get involved in the Being.Lagom community?",
    content:
      "Dive right in! Connect with us on social media, attend local events, or start your own Being.Lagom chapter. It's all about finding your sweet spot within the community.",
  },
  {
    id: "3",
    title:
      "Can I really make a difference in addressing physician burnout and mental health issues?",
    content:
      "Absolutely! Every small effort adds up to create a big impact. It's like stacking Legos – one at a time, and soon you've built something incredible!",
  },
  {
    id: "4",
    title:
      "How can Being.Lagom contribute to reducing stigma around mental health disorders?",
    content:
      "By fostering open conversations, sharing personal stories, and promoting mental health literacy, we aim to break down barriers and show that mental health is a universal concern. Our community is all about embracing differences and creating a supportive space for everyone.",
  },
  {
    id: "5",
    title:
      "How can I contribute to Being.Lagom's mission of promoting mental health and wellbeing?",
    content:
      "Join our community, attend events, and share your unique perspective. Whether you're a medical professional, a student, or just someone passionate about mental health, your voice matters. Together, we'll make a Lagom-sized impact on the world of mental wellbeing!",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

export default function Faq() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about Being.Lagom and how we support
            healthcare workers' mental health and wellbeing.
          </motion.p>
        </div>
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient */}
          <div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-primary/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="1"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className={cn(
                    "bg-card/50 my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all",
                    "data-[state=open]:bg-card/80 data-[state=open]:shadow-md"
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium",
                        "hover:text-primary transition-all duration-300 outline-none",
                        "focus-visible:ring-primary/50 focus-visible:ring-2",
                        "data-[state=open]:text-primary"
                      )}
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          "text-primary/70 shrink-0 transition-transform duration-300 ease-out",
                          "group-data-[state=open]:rotate-45"
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      "text-muted-foreground overflow-hidden pt-0 pb-4",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up"
                    )}
                  >
                    <div className="border-border/30 border-t pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
