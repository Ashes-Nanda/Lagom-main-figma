'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Badge } from './badge';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'mental-health' | 'technical' | 'support' | 'resources';
}

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'What does "Being.Lagom" mean, and how do you pronounce it?',
    answer:
      '"Being.Lagom" is a Swedish term that roughly translates to "just the right amount" or "balanced living." Pronouncing it is as easy as finding that perfect balance – La-gom, just like sipping your favorite hot beverage!',
    category: 'general',
  },
  {
    id: '2',
    question: 'How can I get involved in the Being.Lagom community?',
    answer:
      'Dive right in! Connect with us on social media, attend local events, or start your own Being.Lagom chapter. It\'s all about finding your sweet spot within the community.',
    category: 'general',
  },
  {
    id: '3',
    question: 'Is prior experience with Being.Lagom necessary for leadership roles?',
    answer:
      'Not at all! We believe in fresh perspectives and welcome everyone. The only prerequisite is a passion for balanced living and a knack for making things happen.',
    category: 'general',
  },
  {
    id: '4',
    question: 'What benefits come with being part of the Executive Team at Being.Lagom?',
    answer:
      'Besides the joy of contributing to global well-being, you\'ll gain skills in multitasking, strategic thinking, and have access to our unofficial but highly valued "Lagom Superpowers" handbook.',
    category: 'general',
  },
  {
    id: '5',
    question: 'Can I really make a difference in addressing physician burnout and mental health issues?',
    answer:
      'Absolutely! Every small effort adds up to create a big impact. It\'s like stacking Legos – one at a time, and soon you\'ve built something incredible!',
    category: 'mental-health',
  },
  {
    id: '6',
    question: 'Is "Lagom" only about work, or does it extend to personal life too?',
    answer:
      'Lagom transcends all aspects of life. It\'s about finding balance in work, play, and everything in between. So, don\'t worry; you can still enjoy that extra slice of cake – in moderation, of course!',
    category: 'mental-health',
  },
  {
    id: '7',
    question: 'Are Lagom community events only serious discussions, or do you have fun too?',
    answer:
      'Oh, absolutely! We believe laughter is the best medicine. Our events are a mix of insightful conversations, shared experiences, and a sprinkle of Lagom humor – because balance includes a good laugh too!',
    category: 'support',
  },
  {
    id: '8',
    question: 'How do you handle burnout within the Lagom community?',
    answer:
      'We practice what we preach! Open communication, support networks, and occasional virtual group hugs. And, of course, a Lagom amount of self-care.',
    category: 'mental-health',
  },
  {
    id: '9',
    question: 'How can Being.Lagom contribute to reducing stigma around mental health disorders?',
    answer:
      'By fostering open conversations, sharing personal stories, and promoting mental health literacy, we aim to break down barriers and show that mental health is a universal concern. Our community is all about embracing differences and creating a supportive space for everyone.',
    category: 'mental-health',
  },
  {
    id: '10',
    question: 'How does Being.Lagom work towards creating healthy work cultures and environments in the healthcare sector?',
    answer:
      'We advocate for positive change! Through partnerships, collaborations, and educational initiatives, we encourage a shift towards healthier work cultures. Think of it as a Lagom-inspired makeover for workplaces, ensuring everyone thrives.',
    category: 'support',
  },
  {
    id: '11',
    question: 'Can individuals outside the medical field benefit from Being.Lagom\'s initiatives on mental wellbeing?',
    answer:
      'Absolutely! Lagom is all-inclusive. Our educational resources and events are designed for everyone, providing valuable insights into mental health for individuals in various professions and walks of life.',
    category: 'resources',
  },
  {
    id: '12',
    question: 'How can I contribute to Being.Lagom\'s mission of promoting mental health and wellbeing?',
    answer:
      'Join our community, attend events, and share your unique perspective. Whether you\'re a medical professional, a student, or just someone passionate about mental health, your voice matters. Together, we\'ll make a Lagom-sized impact on the world of mental wellbeing!',
    category: 'support',
  },
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'mental-health', label: 'Mental Health' },
  { id: 'resources', label: 'Resources' },
  { id: 'support', label: 'Support' },
  { id: 'technical', label: 'Technical' },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center">
          <Badge
            variant="outline"
            className="border-primary mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
          >
            FAQs
          </Badge>

          <h2 className="text-foreground mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground max-w-2xl text-center">
            Find answers to common questions about Being.Lagom, our community, and how we promote 
            balanced living and mental wellness for everyone.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  'border-border h-fit overflow-hidden rounded-xl border',
                  expandedId === faq.id
                    ? 'shadow-3xl bg-card/50'
                    : 'bg-card/50',
                )}
                style={{ minHeight: '88px' }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-foreground text-lg font-medium">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="text-primary h-5 w-5" />
                    ) : (
                      <PlusIcon className="text-primary h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-border border-t px-6 pt-2 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="/contact"
            className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-medium transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
} 