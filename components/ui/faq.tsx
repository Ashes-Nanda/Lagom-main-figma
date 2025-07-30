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
    question: 'What is Being.Lagom?',
    answer:
      'Being.Lagom is a vital online sanctuary for healthcare professionals seeking mental health support and community. We provide resources, tools, and a supportive community to help healthcare workers maintain their mental wellness.',
    category: 'general',
  },
  {
    id: '2',
    question: 'Is Being.Lagom free to use?',
    answer:
      'Yes, Being.Lagom is completely free to use. We believe mental health support should be accessible to all healthcare professionals. All our resources, tools, and community features are available at no cost.',
    category: 'general',
  },
  {
    id: '3',
    question: 'How do I find a therapist through the platform?',
    answer:
      'You can browse our therapist directory by visiting the "Directory" page. Use our advanced filters to find therapists by location, specialization, availability, and more. All listed therapists are verified healthcare professionals.',
    category: 'mental-health',
  },
  {
    id: '4',
    question: 'What types of mental health resources are available?',
    answer:
      'We offer a comprehensive library of resources including articles, podcasts, videos, mindfulness tools, breathing exercises, and self-help guides. All content is curated specifically for healthcare professionals.',
    category: 'resources',
  },
  {
    id: '5',
    question: 'How do I access the mindfulness games and tools?',
    answer:
      'Visit the "Mindfulness" page to access our interactive tools including breathing exercises, meditation guides, stress relief games, and wellness activities designed specifically for healthcare workers.',
    category: 'resources',
  },
  {
    id: '6',
    question: 'Is my information kept private and secure?',
    answer:
      'Absolutely. We prioritize your privacy and security. All personal information is encrypted and protected. We follow strict healthcare privacy standards and never share your information without consent.',
    category: 'support',
  },
  {
    id: '7',
    question: 'How can I get crisis support?',
    answer:
      'If you\'re experiencing a mental health crisis, click the "Crisis Support" button in our navigation. We provide immediate access to crisis hotlines, emergency resources, and professional support.',
    category: 'mental-health',
  },
  {
    id: '8',
    question: 'Can I contribute content or share my story?',
    answer:
      'Yes! We welcome contributions from healthcare professionals. You can share your experiences, write articles, or contribute to our community. Contact us through the "Contact" page to learn more.',
    category: 'support',
  },
  {
    id: '9',
    question: 'How do I report inappropriate content or behavior?',
    answer:
      'If you encounter inappropriate content or behavior, please report it immediately through our contact form or email support@being.lagom. We take all reports seriously and maintain a safe community environment.',
    category: 'support',
  },
  {
    id: '10',
    question: 'Are the resources evidence-based?',
    answer:
      'Yes, all our resources are carefully curated and evidence-based. We work with mental health professionals and researchers to ensure our content follows best practices and current research in mental health.',
    category: 'resources',
  },
  {
    id: '11',
    question: 'How do I reset my password or update my account?',
    answer:
      'You can manage your account settings through your profile page. For password resets or account issues, contact our support team at support@being.lagom and we\'ll assist you promptly.',
    category: 'technical',
  },
  {
    id: '12',
    question: 'Do you offer group therapy or support groups?',
    answer:
      'Yes, we offer various support groups and community events for healthcare professionals. Check our "Events" page for upcoming group sessions, workshops, and community gatherings.',
    category: 'mental-health',
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
            Find answers to common questions about Being.Lagom and how we support 
            healthcare professionals in their mental wellness journey.
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