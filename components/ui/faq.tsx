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
    content: `“Lagom” is a Swedish word that means not too much, not too little - just right. It’s pronounced “la-gom” (rhymes with problem, ironically). Think of it as the opposite of your hospital shift schedule: not overburdened, not underutilized - just… enough. Being.Lagom is about reclaiming that elusive middle ground - in healing, in helping, and in how we show up for ourselves.`,
  },
  {
    id: "2",
    title: "How can I get involved in the Being.Lagom community?",
    content: `Start where you are. Whether it’s joining our events, co-creating healing circles, or simply following us on social media - there’s space for you here. You can even start your own Being.Lagom chapter. We’re building a movement, not a membership. No hierarchy, no gatekeeping — just humans showing up for each other in radically honest, hopeful ways.`,
  },
  {
    id: "3",
    title:
      "Can I really make a difference in addressing physician burnout and mental health issues?",
    content: `Yes. And not just in some vague, motivational way. As Margaret Mead said: “Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has.” Burnout isn’t just an individual problem - it’s a systemic crisis. But systems don’t shift without culture change, and culture doesn’t shift without courageous communities. That’s where you come in. One conversation, one circle, one action at a time.`,
  },
  {
    id: "4",
    title:
      "How can Being.Lagom contribute to reducing stigma around mental health disorders?",
    content: `We don’t fight stigma by preaching. We melt it - through story, presence, and proximity. Being.Lagom creates spaces where people (especially healthcare professionals) can be messy, honest, and human - without fear of judgment. By sharing lived experiences, modeling vulnerability, and centering mental health in everyday conversation, we chip away at the silence. The goal? A world where seeking help is not brave - just normal.`,
  },
  {
    id: "5",
    title:
      "How can I contribute to Being.Lagom’s mission of promoting mental health and wellbeing?",
    content: `This is bigger than attending an event or reposting a story. You’re not just joining a campaign — you’re part of a quiet revolution in how we heal, connect, and care. You can: Join our healing circles and community gatherings, collaborate on research, advocacy, or peer-support pilots, bring Being.Lagom to your institution, your batch, your city, or share your story and build space for others to share theirs.`,
  },
  {
    id: "6",
    title: "Why are the events and interventions targeting HCPs?",
    content: `Because we’re trained to hold space for everyone else - but rarely get it for ourselves. HCPs face unique stressors, moral injury, and stigma around seeking help. This space is designed for us, by people who get it - so we can reconnect, reflect, and heal together. It’s not about exclusion. It’s about giving care a home. And yes, muggles (aka non-HCP friends of Being.Lagom) are welcome too - we’ve got a few on the team who are living proof that care, curiosity, and community aren’t limited to job titles!`,
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
