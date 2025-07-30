import { AnimatedHero } from "./ui/animated-hero";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/10 to-accent/10 pt-4">
      <AnimatedHero />
    </section>
  );
}